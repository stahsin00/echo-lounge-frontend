import { useState, useEffect } from 'react';
import './Customer.css';
import {
  FaBan,
  FaGrinAlt,
  FaAngry,
  FaDizzy,
  FaFlushed,
  FaFrown,
  FaGrinBeamSweat,
  FaGrinHearts,
  FaGrinSquint,
  FaGrinStars,
  FaGrinWink,
  FaMeh,
  FaSadCry,
  FaSurprise,
} from 'react-icons/fa';
import { useGame } from '../context/GameContext';
import Modal from './Modal';

function Customer() {
  const { customer, expression, tone, getNextCustomer } = useGame();

  const [modal, setModal] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const expressionOptions = {
    smily: <FaGrinAlt className="customer-icon" />,
    angry: <FaAngry className="customer-icon" />,
    dizzy: <FaDizzy className="customer-icon" />,
    flushed: <FaFlushed className="customer-icon" />,
    sad: <FaFrown className="customer-icon" />,
    sheepish: <FaGrinBeamSweat className="customer-icon" />,
    inLove: <FaGrinHearts className="customer-icon" />,
    laughing: <FaGrinSquint className="customer-icon" />,
    excited: <FaGrinStars className="customer-icon" />,
    wink: <FaGrinWink className="customer-icon" />,
    crying: <FaSadCry className="customer-icon" />,
    surprised: <FaSurprise className="customer-icon" />,
  };

  const handleKick = async () => {
    setModal(false);
    await getNextCustomer();
  };

  useEffect(() => {
    if (customer == null) {
      setImageUrl(null);
    } else {
      setImageUrl(customer.imageUrl);
    }
  }, [customer]);

  return (
    <>
      <div className="customer">
        {imageUrl == null ? (
          <></>
        ) : (
          <>
            <img src={imageUrl} alt="A customer." className="customer-image" />
            <div className="customer-mood">
              <div className="customer-icon-container">
                {expressionOptions[expression] || (
                  <FaMeh className="customer-icon" />
                )}
              </div>
              <div id='customer-tone' className="customer-icon-container">{tone}</div>
            </div>
            <button className="customer-action customer-icon-container" onClick={() => setModal(true)}>
              <FaBan className="customer-icon" />
            </button>
          </>
        )}
        {modal ? <Modal setModal={setModal} handleKick={handleKick} /> : <></>}
      </div>
    </>
  );
}

export default Customer;
