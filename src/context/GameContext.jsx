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

    const getNextCustomer = async () => {
        if (state == "Waiting") return;
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

    const value = {
        state,
        setState,
        customer,
        setCustomer,
        observation,
        setObservation,
        getNextCustomer
    }

    return (<GameContext.Provider value={value}>{props.children}</GameContext.Provider>)
}