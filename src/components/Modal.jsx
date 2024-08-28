import './Modal.css'

function Modal(props) {

  return (
    <>
        <div className="modal">
            <div className='modal-main'>
                <p>Are you sure you want to kick out the current customer?</p>
                <div className='modal-buttons'>
                    <button className='cancel-button' onClick={() => props.setModal(false)}>Cancel</button>
                    <button className='confirm-button' onClick={() => props.handleBan()}>Confirm</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Modal
