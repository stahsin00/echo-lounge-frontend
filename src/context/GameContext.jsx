import React, {useState, useContext} from 'react'

const GameContext = React.createContext();

export function useGame() {
    return useContext(GameContext);
}

export function GameProvider(props) {
    const STATES = ["Listening", "Observing", "Waiting", "Deciding", "Speaking"];  // TODO: enums?

    const [state, setState] = useState("Observing");
    const [customer, setCustomer] = useState();
    const [observation, setObservation] = useState();
    const [speech, setSpeech] = useState();

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
                body: JSON.stringify({ userInput: userInput }),
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
            setState("Listening");
        } catch (e) {
            console.error(e);
            setObservation("The customer’s consciousness seems to be buffering…");
            setState("Observing");
        }
    }

    const decide = () => {
        if (state != "Listening" && state != "Observing") return;
        setState("Deciding");
    }

    const value = {
        state,
        setState,
        customer,
        observation,
        speech,
        getNextCustomer,
        speak,
        listen,
        decide
    }

    return (<GameContext.Provider value={value}>{props.children}</GameContext.Provider>)
}