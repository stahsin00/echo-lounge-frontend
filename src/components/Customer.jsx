import { useState, useEffect } from 'react';
import './Customer.css'
import { FaBan, FaGrinAlt } from "react-icons/fa";
import { useGame } from '../context/GameContext';
import Modal from './Modal';

function Customer(props) {
  const { customer, getNextCustomer } = useGame();
  const [ modal, setModal ] = useState(false);

  const [imageUrl, setImageUrl] = useState();

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
                    <div className='character-expression'><FaGrinAlt className='temp-button-icon'/></div>
                    <div className='character-tone'>Friendly</div>
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
