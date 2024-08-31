import { useState, useEffect } from 'react';
import './Customer.css'
import { FaBan, FaGrinAlt, FaAngry, FaDizzy, FaFlushed, FaFrown, FaGrinBeamSweat, FaGrinHearts, FaGrinSquint, FaGrinStars, FaGrinWink, FaMeh, FaSadCry, FaSurprise } from "react-icons/fa";
import { useGame } from '../context/GameContext';
import Modal from './Modal';

function Customer(props) {
  const { customer, expression, tone, getNextCustomer } = useGame();
  const [ modal, setModal ] = useState(false);
  const [ customerExpression, setCustomerExpression ] = useState(<FaGrinAlt className='temp-button-icon'/>);

  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    console.log(expression);
    switch (expression) {
      case "smily":
        setCustomerExpression(<FaGrinAlt className='temp-button-icon'/>);
        break;
      case "angry":
        setCustomerExpression(<FaAngry className='temp-button-icon'/>);
        break;
      case "dizzy":
        setCustomerExpression(<FaDizzy className='temp-button-icon'/>);
        break;
      case "flushed":
        setCustomerExpression(<FaFlushed className='temp-button-icon'/>);
        break;
      case "sad":
        setCustomerExpression(<FaFrown className='temp-button-icon'/>);
        break;
      case "sheepish":
        setCustomerExpression(<FaGrinBeamSweat className='temp-button-icon'/>);
        break;
      case "inLove":
        setCustomerExpression(<FaGrinHearts className='temp-button-icon'/>);
        break;
      case "laughing":
        setCustomerExpression(<FaGrinSquint className='temp-button-icon'/>);
        break;
      case "excited":
        setCustomerExpression(<FaGrinStars className='temp-button-icon'/>);
        break;
      case "wink":
        setCustomerExpression(<FaGrinWink className='temp-button-icon'/>);
        break;
      case "crying":
        setCustomerExpression(<FaSadCry className='temp-button-icon'/>);
        break;
      case "surprised":
        setCustomerExpression(<FaSurprise className='temp-button-icon'/>);
        break;
      default:
        setCustomerExpression(<FaMeh className='temp-button-icon'/>);
        break
    }
  }, [expression])

  const handleBan = async () => {
    setModal(false);
    await getNextCustomer();
  }

  useEffect( () => {

    if (customer == null) {
      setImageUrl(null);
    } else {
      setImageUrl(customer.imageUrl);
    }

  }, [customer]);

  return (
    <>
        <div className="character">
            {
            (imageUrl == null) ?
              <></> 
              :
              <>
                  <img src={imageUrl} alt="A customer." className='customer'/>
                  <div className='character-mood'>
                    <div className='character-expression'>{customerExpression}</div>
                    <div className='character-tone'>{tone}</div>
                  </div>
                  <button className='temp-button' onClick={() => setModal(true)}><FaBan className='temp-button-icon'/></button>
              </>
            }
            {
              modal ? (<Modal setModal={setModal} handleBan={handleBan} />) : (<></>)
            }
        </div>
    </>
  )
}

export default Customer
