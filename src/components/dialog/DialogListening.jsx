import './Dialog.css';
import { useState, useEffect } from 'react';
import { useGame } from '../../context/GameContext';
import Triangle from './Triangle';

function DialogListening() {
    const { speech, decide } = useGame();
    const [ currentSpeech, setCurrentSpeech ] = useState("");
    const [ index, setIndex ] = useState(0);
    const [ typing, setTyping ] = useState(true);
    
    const customer = "Customer"; // TODO
    const speed = 40;

    useEffect(() => {
        let timeout;
  
        if (index < speech.length && typing) {

          timeout = setTimeout(() => {
            setCurrentSpeech((prevText) => prevText + speech[index]);
            setIndex((prevIndex) => prevIndex + 1);
          }, speed);

        } else {
            setTyping(false);
        }

        return () => clearTimeout(timeout);
    }, [index, typing]);

    const handleClick = () => {
        if (typing) {
            setCurrentSpeech(speech);
            setIndex(speech.length);
            setTyping(false);
        } else {
            decide();
        }
    }

    return (
        <div className='listening' onClick={handleClick}>
            <p><span>{customer} :</span> {currentSpeech}</p>
            <Triangle/>
        </div>
    );
}

export default DialogListening
