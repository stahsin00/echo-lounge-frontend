import './Game.css';
import Dialog from '../components/dialog/Dialog';
import Customer from '../components/Customer';
import ControlPanel from '../components/ControlPanel';

function Game() {
  return (
    <div className="game">
      <div className="logo">Echo Lounge</div>
      <div className="gameplay">
        <Customer />
        <ControlPanel />
      </div>
      <Dialog />
    </div>
  );
}

export default Game;
