import { useRef } from 'react';
import { useGame } from '../../context/GameContext';
import './Dialog.css';

function DialogSpeaking() {
    const { listen } = useGame();

    const userInputRef = useRef(null);

    const handleSpeak = () => {
        let userInput = "";

        if (userInputRef.current) {
            userInput = userInputRef.current.textContent;
            userInputRef.current.textContent = "";
        }

        listen(userInput);
    }

    return (
        <div className='speaking'>
            <p className='user-edit' contentEditable="true"  ref={userInputRef}></p>
            <button onClick={handleSpeak}>Speak</button>
        </div>
    );
}

export default DialogSpeaking
