import React, { useState, useContext, useEffect } from 'react';

const GameContext = React.createContext();

export function useGame() {
  return useContext(GameContext);
}

export function GameProvider(props) {
  const STATES = ['Listening', 'Observing', 'Waiting', 'Deciding', 'Speaking']; // TODO: enums

  const [state, setState] = useState('Observing');
  const [customer, setCustomerObject] = useState();

  const [observation, setObservation] = useState();
  const [speech, setSpeech] = useState();
  const [expression, setExpression] = useState('neutral');
  const [tone, setTone] = useState('neutral');

  useEffect(() => {
    const storedCustomer = localStorage.getItem('customer');

    if (!storedCustomer || storedCustomer === 'null' || storedCustomer === '') {
      getNextCustomer();
    } else {
      setCustomerObject(JSON.parse(storedCustomer));
      setObservation('...');
      setState('Observing');
    }
  }, []);

  const setCustomer = (nextCustomer) => {
    localStorage.setItem('customer', JSON.stringify(nextCustomer));
    setCustomerObject(nextCustomer);
  };

  // TODO: separate fetching information and state management logic
  const getNextCustomer = async () => {
    if (state === 'Waiting') return;
    setState('Waiting');
    setCustomer(null);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/new-customer`,
        {
          method: 'GET',
          headers: {
              'Cache-Control': 'no-cache, no-store, must-revalidate',
              'Pragma': 'no-cache',
              'Expires': '0'
          }
        }
      );

      if (!response.ok) {
        throw new Error('Could not fetch new customer.');
      }

      console.log(response);

      const result = await response.json();

      console.log(result);

      setCustomer(result.customer);
      setObservation('A new customer has arrived!');
    } catch (e) {
      console.error(e);
      setObservation('Tumbleweeds roll through the empty bar.');
    } finally {
      setState('Observing');
    }
  };

  // TODO: fix duplicate code in serve and listen
  const serve = async (drink) => {
    if (state === 'Waiting') return;
    setState('Waiting');

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/serve`,
        {
          method: 'POST',
          body: JSON.stringify({ drink, customer }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        if (response.status == 401) {
          setObservation('The customer needed to leave.');
          setCustomer(null);
          setState('Observing');
          return;
        }
        throw new Error('The Customer could not speak.');
      }

      const result = await response.json();

      console.log(result);

      setSpeech(result.message);
      setExpression(result.expression.toLowerCase());
      setTone(result.tone.toLowerCase());
      setCustomer(result.customer);
      setState('Listening');
    } catch (e) {
      console.error(e);
      setObservation('The customer’s consciousness seems to be buffering…');
      setState('Observing');
    }
  };

  const speak = () => {
    if (state !== 'Deciding') return;
    setState('Speaking');
  };

  const listen = async (userInput = '') => {
    if (state == 'Waiting') return;
    setState('Waiting');

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/converse`,
        {
          method: 'POST',
          body: JSON.stringify({ userInput: userInput, customer: customer }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        if (response.status == 401) {
          setObservation('The customer needed to leave.');
          setCustomer(null);
          setState('Observing');
          return;
        }
        throw new Error('The Customer could not speak.');
      }

      const result = await response.json();

      console.log(result);

      setSpeech(result.message);
      setExpression(result.expression.toLowerCase());
      setTone(result.tone.toLowerCase());
      setCustomer(result.customer);
      setState('Listening');
    } catch (e) {
      console.error(e);
      setObservation('The customer’s consciousness seems to be buffering…');
      setState('Observing');
    }
  };

  const decide = () => {
    if (state != 'Listening' && state != 'Observing') return;

    if (state == 'Observing' && customer == null) {
      getNextCustomer();
      return;
    }

    setState('Deciding');
  };

  const value = {
    state,
    customer,
    observation,
    speech,
    tone,
    expression,
    getNextCustomer,
    serve,
    speak,
    listen,
    decide,
  };

  return (
    <GameContext.Provider value={value}>{props.children}</GameContext.Provider>
  );
}
