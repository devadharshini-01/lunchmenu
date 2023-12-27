import Sidebar from "../../layout/Sidebar";
import Form from "react-bootstrap/Form";
import * as yup from "yup";
import { Formik } from "formik";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Ftsuserdata = ({ active, setActive }) => {
  const token = localStorage.getItem("accessToken");

  const navigate = useNavigate();

  const schema = yup.object().shape({
    Name: yup.string().required("Name is a required field"),
    email: yup.string().email().required("email is a required field"),
    phoneNumber: yup.number().required("phoneNumber is a required field"),
    message: yup.string().required("message is a required field"),
  });

  const handleSubmit = () => {
  
        navigate("/Ftsdatatable");
        axios.post("https://fts-backend.onrender.com/user/newRegistration",Name,email,phoneNumber,message)
       
      
        .then((response)=>{
        console.log(response.data);
    
        })
       .catch(()=>{
       console.log()
        })
      
  };

  return (
    <Formik
      validationSchema={schema}
      onSubmit={handleSubmit}
      initialValues={{
        Name: "",
        phoneNumber: "",
        email: "",
        message: "",
      }}
    >
      {({ handleSubmit, handleChange, values, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <div className="row ">
            <div className="col-2 ">
              <Sidebar active={active} setActive={setActive} />
            </div>
            <div className="col-10">
              <Form.Group className="mb-3">
                <Form.Label className="mt-2">Name :</Form.Label>
                <Form.Control
                  type="text"
                  name="Name"
                  value={values.Name}
                  onChange={handleChange}
                  isInvalid={!!errors.Name}
                />
                {<p className="formik">{errors.Name}</p>}
                <Form.Label className="mt-2">E-mail :</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                {<p className="formik">{errors.email}</p>}
                <Form.Label className="mt-2">phoneNumber :</Form.Label>
                <Form.Control
                  type="number"
                  name="phoneNumber"
                  value={values.phoneNumber}
                  onChange={handleChange}
                  isInvalid={!!errors.phoneNumber}
                />
                {<p className="formik">{errors.phoneNumber}</p>}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="mt-2">Message</Form.Label>
                <Form.Control
                  as="textarea"
                  className="textarea"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  isInvalid={!!errors.message}
                />
                {<p className="formik">{errors.message}</p>}
              </Form.Group>
              <div className="d-grid gap-2 d-md-flex justify-content-end">
                <Button
                  type="submit"
                  className="pink text-black border"
                  onClick={() => handleSubmit()}
                >
                  Submit
                </Button>
                <Button className="bg-white text-black border">Cancel</Button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Ftsuserdata;
