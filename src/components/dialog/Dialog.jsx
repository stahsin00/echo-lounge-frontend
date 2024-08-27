import './Dialog.css'
import { useGame } from '../../context/GameContext';
import DialogListening from './DialogListening';
import DialogDeciding from './DialogDeciding';
import DialogWaiting from './DialogWaiting';
import DialogSpeaking from './DialogSpeaking';
import DialogObserving from './DialogObserving';

function Dialog() {
    const { state } = useGame();

    const getDialog = () => {
        switch (state) {
            case "Listening":
                return (<DialogListening/>);
            case "Observing":
                return (<DialogObserving/>);
            case "Waiting":
                return (<DialogWaiting/>);
            case "Deciding":
                return (<DialogDeciding />);
            case "Speaking":
                return (<DialogSpeaking/>);
            default:
                console.error("impossible state");
                return (<></>);
        }
    }

  return (
    <>
        <div className='dialog-outer'>
            <div className='scroll-bar'></div>
            <div className="dialog">
                { getDialog() }
            </div>
        </div>
    </>
  )
}

export default Dialog
