import { Button } from "react-bootstrap";
import Sidebar from "../../layout/Sidebar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import Form from "react-bootstrap/Form";
import axios from "axios";

const Userdata = ({ active, setActive }) => {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    Title: yup.string().required("Name is a required field"),
    Price: yup.number().required("email is a required field"),
    Description: yup.string().required("phoneNUmber is a required field"),
    Image: yup.string().required("message is a required field"),
    Select: yup.string().required("select is a required field"),
  });
  const [post, setPost] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });
  const handleInput = (e) => {
    setPost({ ...post, [e.target.value]: e.target.value });
  };
  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log(e);
    axios.post("https://fakestoreapi.com/products", e).then((res) => {
      navigate("/userdatatable");
     
console.log(res);
    });
axios.put("https://fakestoreapi.com/products/7",e)
.then((res)=>{
  navigate("/userdatatable");
  console.log(res);
})
.catch();

  };
  return (
    <>
      <Formik
        validationSchema={schema}
        onSubmit={handleSubmit}
        initialValues={{
          Title: "",
          Price: "",
          Description: "",
          Image: "",
          Select: "",
        }}
      >
        {({ handleSubmit, handleChange, values, errors  }) => (
         
          <Form noValidate onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-2">
                <Sidebar active={active} setActive={setActive} />
              </div>
              {console.log(errors)}
              <div className="col-10">
             
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className=" mt-3">Title:</Form.Label>
                    <Form.Control
                      type="text"
                      name="Title"
                      value={values.Title}
                      onChange={handleChange}
                      isInvalid={!!errors.Title}
                    />
                    
                    {<p className="formik">{errors.Title}</p>}
                    <Form.Label className=" mt-3">Price:</Form.Label>
                    <Form.Control
                      type="number"
                      name="Price"
                      value={values.Price}
                      onChange={handleChange}
                      isInvalid={!!errors.Price}
                    />
                    
                    {<p className="formik">{errors.Price}</p>}
                  </Form.Group>
                  <Form.Group
                    className="mb-3 "
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Description:</Form.Label>
                    <Form.Control
                      className="textarea"
                      as="textarea"
                      rows={3}
                      type="text"
                      name="Description"
                      value={values.Description}
                      onChange={handleChange}
                      isInvalid={!!errors.Description}
                    />
                    
                    {<p className="formik">{errors.Description}</p>}
                    <Form.Label className=" mt-3">Image:</Form.Label>
                    <Form.Control
                      type="text"
                      name="Image"
                      value={values.Image}
                      onChange={handleChange}
                      isInvalid={!!errors.Image}
                    />
                    
                    {<p className="formik">{errors.Image}</p>}
                  </Form.Group>
                  <Form.Group controlId="formBasicSelect">
                    <Form.Label>Category:</Form.Label>
                    <Form.Control
                      as="select"
                      // id="select"
                      type="text"
                      name="Select"
                      onChange={handleChange}
                      // value={values.Select}
                      // isInvalid={!!errors.Select}
                    >
                      <option value="DICTUM">electronic</option>
                      <option value="CONSTANCY">men's cloth</option>
                      <option value="COMPLEMENT">jewelery</option>
                    </Form.Control>
                  </Form.Group>

                  <div className="d-grid gap-2 d-md-flex justify-content-end">
                    <Button
                      type="submit"
                      as="input"
                      className="pink text-white "
                    />
                    <Button
                      as="input"
                      className="text-black bg-white"
                      type="reset"
                      value="Cancel"
                    />
                  </div>
          
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default Userdata;
