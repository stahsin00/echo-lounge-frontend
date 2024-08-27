import './Dialog.css'
import Dots from './Dots';

function DialogWaiting() {
    const customer = "Customer"; // TODO

    return (
        <div className='waiting'>
            <p>{customer} appears to be in thought<Dots /></p>
        </div>
    );
}

export default DialogWaiting
