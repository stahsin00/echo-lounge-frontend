import './Dialog.css';
import { useGame } from '../../context/GameContext';

function DialogDeciding() {
  const { listen, speak } = useGame();

  return (
    <div className="deciding">
      <button className="primary-button" onClick={() => listen()}>Listen</button>
      <button className="primary-button" onClick={speak}>Speak</button>
    </div>
  );
}

export default DialogDeciding;
