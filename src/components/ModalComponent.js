import {Modal,Button} from "react-bootstrap";

function ModalComponent(props) {
    console.log("rendered");
    return (
        <Modal show={props.show} onHide={props.modalHide} animation={false} size="lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.caption}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={props.img} className="w-100"></img>
          <p>
            {props.desc}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.modalHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default ModalComponent;