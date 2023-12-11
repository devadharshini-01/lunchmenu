import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const DeleteModel =(view,setView)=>{
    return(
        <>
           <Modal view={view} onHide={view}>
                            <Modal.Header closeButton>
                              <Modal.Title>Modal heading</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                          
                            </Modal.Body>
                            <Modal.Footer>
                              <Button variant="secondary"   >
                                OK
                              </Button>
                              <Button variant="secondary"   >
                                Cancel
                              </Button>
                              
                            </Modal.Footer>
                          </Modal>
        </>
    )
}
export default DeleteModel;