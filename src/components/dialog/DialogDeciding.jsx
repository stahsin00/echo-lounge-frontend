import './Dialog.css';
import { useGame } from '../../context/GameContext';

function DialogDeciding() {
    const { listen, speak } = useGame();

    return (
        <div className='deciding'>
            <button onClick={() => listen()}>Listen</button>
            <button onClick={speak}>Speak</button>
        </div>
    );
}

export default DialogDeciding
