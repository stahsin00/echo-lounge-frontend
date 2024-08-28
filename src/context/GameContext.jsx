import React, {useState, useContext, useEffect } from 'react'

const GameContext = React.createContext();

export function useGame() {
    return useContext(GameContext);
}

export function GameProvider(props) {
    const STATES = ["Listening", "Observing", "Waiting", "Deciding", "Speaking"];  // TODO: enums?

    const [state, setState] = useState("Observing");
    const [customer, setCustomerState] = useState();
    const [observation, setObservation] = useState();
    const [speech, setSpeech] = useState();

    useEffect( () => {
        const storedCustomer = localStorage.getItem('customer');

        if (!storedCustomer || storedCustomer === 'null' || storedCustomer === '') {
            getNextCustomer();
        } else {
            setCustomerState(JSON.parse(storedCustomer));
            setObservation("...");
        }

      }, []);

      const setCustomer = (nextCustomer) => {
        localStorage.setItem('customer', JSON.stringify(nextCustomer));
        setCustomerState(nextCustomer);
      }

    const getNextCustomer = async () => {
        if (state === "Waiting") return;
        setCustomer(null);
        setState("Waiting");

        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/new-customer`, {
                method: 'GET'
            });

            if (!response.ok) {
                throw new Error("Could not fetch new customer.");
            }

            const result = await response.json();

            console.log(result);

            setCustomer(result.customer);
            setObservation("A new customer has arrived!");
        } catch (e) {
            console.error(e);
            setObservation("Tumbleweeds roll through the empty bar.");
        } finally {
            setState("Observing");
        }
    }

    const serve = async (drink) => {
        if (state === "Waiting") return;
        setState("Waiting");

        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/serve`, {
                method: 'POST',
                body: JSON.stringify({ drink: drink, customer: customer }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error("Could not serve drink.");
            }

            const result = await response.json();

            console.log(result);

            setSpeech(result.message);
            setCustomer(result.customer);
            setState("Listening");
        } catch (e) {
            console.error(e);
            setObservation("Tumbleweeds roll through the empty bar.");
            setState("Observing");
        }
    }

    const speak = () => {
        if (state !== "Deciding") return;
        setState("Speaking");
    }

    const listen = async (userInput = "") => {
        if (state == "Waiting") return;
        setState("Waiting");

        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/dialog`, {
                method: 'POST',
                body: JSON.stringify({ userInput: userInput, customer: customer }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error("The Customer could not speak.");
            }

            const result = await response.json();

            console.log(result);

            setSpeech(result.message);
            setCustomer(result.customer);
            setState("Listening");
        } catch (e) {
            console.error(e);
            setObservation("The customer’s consciousness seems to be buffering…");
            setState("Observing");
        }
    }

    const decide = () => {
        if (state != "Listening" && state != "Observing") return;
        
        if (state == "Observing" && customer == null) {
            getNextCustomer();
            return;
        }

        setState("Deciding");
    }

    const value = {
        state,
        setState,
        customer,
        observation,
        speech,
        getNextCustomer,
        serve,
        speak,
        listen,
        decide
    }

    return (<GameContext.Provider value={value}>{props.children}</GameContext.Provider>)
}