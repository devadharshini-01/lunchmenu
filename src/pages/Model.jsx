import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { logDOM } from "@testing-library/react";

const Model = ({
  show,
  setView,
  body,
  button1Value,
  button2Value,
  title,
  deleterecord,
  tableRowRemove,
  closeButton,
}) => {
  return (
    <>
      <Modal show={show } onHide={closeButton} >
        
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {body}
          {/* {view&&      
    
            <div>
              <label>Name:</label>

              <td className="idea">{name}</td>
              <label>Email:</label>
              <td className="idea">{email}</td>
              <label>Phone Number:</label>
              <td className="idea">{phoneNumber}</td>
            </div>}
         
           {deleterecord && <div>
              
           
             <label>If you delete  this name<b>{i}</b></label>
              <label>with name<b>{deleteName}</b> </label>
            </div>} */}

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setView(false) } >
            {button1Value}
          </Button>
          <Button variant="secondary" onClick={() => tableRowRemove() } >
            {button2Value}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Model;
