import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { logDOM } from "@testing-library/react";

const Model = ({
  view,

  show,
  setView,
  name,
  email,
  phoneNumber,
  deleterecord,

  setDeleteRecord,
  i,
  deleteName,
}) => {
  console.log(view,"show");
  console.log(deleterecord,"view");
  return (
    <>
      <Modal show={show } >
        
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {view&&      
    
            <div>
              <label>Name:</label>

              <td className="idea">{name}</td>
              <label>Email:</label>
              <td className="idea">{email}</td>
              <label>Phone Number:</label>
              <td className="idea">{phoneNumber}</td>
            </div>}
         
           {deleterecord && <div>
              
           

              <label>If you delete  this name<b>{deleteName}</b> </label>
            </div>}

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setView(false) } >
            OK
          </Button>
          <Button variant="secondary">
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Model;
