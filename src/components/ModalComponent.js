import {Modal} from "react-bootstrap";

function ModalComponent(props) {
    return (
        <Modal show={props.show} onHide={props.modalHide} animation={true}  className="modal-custom">
        <Modal.Body className="m-0 p-0">
            <img src={props.img} alt={props.caption} className=" w-100"></img>
            <p className=" position-absolute bottom-0 bg-dark text-white  m-0">
              {props.caption}
            </p>
            <button type="button" className="btn-close bg-danger btn-lg position-absolute top-0 end-0" 
            aria-label="Close" onClick={props.modalHide}></button>
        </Modal.Body>
        </Modal>
    );
}

export default ModalComponent;