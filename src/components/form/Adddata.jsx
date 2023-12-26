import Sidebar from "../../layout/Sidebar";
import Form from 'react-bootstrap/Form';
import * as yup from "yup";
import { Formik } from "formik";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

const Adddata=({active,setActive})=>{
    const navigate = useNavigate();
    
  const schema = yup.object().shape({
    Name: yup.string().required("Name is a required field"),
    email: yup.string().email().required("email is a required field"),
    phoneNumber: yup.string().required("phoneNumber is a required field"),
    message: yup.string().required("message is a required field"),
});
const handleSubmit=()=>{
    navigate("/breakfast");
}

    return(
        <Formik
      validationSchema={schema}
      onSubmit= { handleSubmit}
      initialValues={{
        Name: "",
        phoneNumber: "",
        email: "",
        message:"",
       
      }}
    >
      {({ handleSubmit, handleChange, values, errors }) => (

        <Form noValidate onSubmit={handleSubmit}>
     <div className="row ">
        <div className="col-2 ">
          <Sidebar active={active} setActive={setActive}  />
        </div>
        <div className="col-10">
        <Form>
      <Form.Group className="mb-3">
        <Form.Label className="mt-2">Name :</Form.Label>
        <Form.Control type="text" />
        <Form.Label>E-mail :</Form.Label>
        <Form.Control type="text" />
        <Form.Label>phoneNumber :</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" >

        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" className="textarea" />
      </Form.Group>
      <div className="d-grid gap-2 d-md-flex justify-content-end">
      <Button type="submit" className="pink text-black">Submit</Button>
      <Button className="bg-white text-black">Cancel</Button>
      </div>
    </Form>
        </div>
        </div>
        </Form>
      )}
    </Formik>
    
   


               
    
    
      
    );
};  

export default Adddata;