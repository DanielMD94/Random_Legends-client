import Toast from 'react-bootstrap/Toast';
import "./ToastComponent.css"
import { useContext } from 'react';
import { MessageContext } from '../../context/message.context';


const Tostadita = () => {
    console.log('estoy entre vosotros?')
    const { showMessage, setShowMessage } = useContext(MessageContext)
    const { show, title, message } = showMessage

    return (
        <Toast
            className='toast'
            show={show}
            onClose={() => setShowMessage({ ...showMessage, show: false })}
            style={{ position: 'fixed', bottom: 30, left: 30 }}
        // autohide
        // delay={5000}
        >
            <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                <strong className="me-auto">{title}</strong>
            </Toast.Header>
            <Toast.Body>{message}</Toast.Body>
        </Toast>
    );
}

export default Tostadita;