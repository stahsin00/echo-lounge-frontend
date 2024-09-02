import './Modal.css';

function Modal(props) {
  return (
    <div className="modal">
      <div className="modal-main">
        <p>Are you sure you want to kick out the current customer?</p>
        <div className="modal-buttons">
          <button
            className="secondary-button-special"
            onClick={() => props.setModal(false)}
          >
            Cancel
          </button>
          <button className="primary-button" onClick={() => props.handleKick()}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
