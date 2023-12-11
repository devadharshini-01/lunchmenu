import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


const Model =({show,setShow,name,email,phoneNumber})=>{
  
    return (
        <>
        
      
                   <Modal show={show} onHide={show}>
                            <Modal.Header closeButton>
                              <Modal.Title>Modal heading</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <label>Name:</label>
                         
                          <td className="idea">{name}</td>
                          <label>Email:</label>
                          <td className="idea">{email}</td>
                          <label>Phone Number:</label>
                          <td className="idea">{phoneNumber}</td>
                            </Modal.Body>
                            <Modal.Footer>
                              <Button variant="secondary"  onClick={() =>setShow(false)} >
                                OK
                              </Button>
                            
                              
                            </Modal.Footer>
                          </Modal>
        </>
    )
}
export default Model;