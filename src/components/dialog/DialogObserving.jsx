import './Dialog.css'
import { useGame } from '../../context/GameContext';
import Triangle from './Triangle';

function DialogObserving() {
    const { observation, decide } = useGame();

    return (
        <div className='observing' onClick={decide}>
            <p>{observation}</p>
            <Triangle/>
        </div>
    );
}

export default DialogObserving
