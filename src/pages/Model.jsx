import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { logDOM } from "@testing-library/react";

const Model = ({
  show,
 view,
  body,
  button1Value,
  button2Value,
  button1Click,
  button2Click,

  title,
 
  closeButton,
}) => {
  return (
    <>
      <Modal  show={show } onHide={closeButton} >
        
        <Modal.Header closeButton className="header">
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
        <Modal.Footer className="header">
   
     {button1Value&& <Button variant="secondary" onClick={button1Click } >
            {button1Value}
          </Button>}
          {button2Value&&<Button variant="secondary" onClick={button2Click} >
            {button2Value}
          </Button>}
        
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Model;
