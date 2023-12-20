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
  // const data = { name: "", email: "", phoneNumber: "", message: "" };
  // const [inputdata, setInputData] = useState(data);

  // const handledata = (e) => {
  //   setInputData({ ...inputdata, [e.target.value]: e.target.value });
  // };
  // const handleSubmit = (e) => {
  //   // e.preventDefault();
  //   axios
  //     .post("https://fakestoreapi.com/products", inputdata)
  //     .then((response) => {
  //       console.log(response.data);
  //     });
  // };
  const handleSubmit=()=>{
    navigate("/userdatatable");
 
  }

  const schema = yup.object().shape({
    Name: yup.string().required("Name is a required field"),
    email: yup.string().email().required("email is a required field"),
    phoneNumber: yup.string().required("phoneNUmber is a required field"),
    message: yup.string().required("message is a required field"),
  });

  return (
    <>
      <Formik
        validationSchema={schema}
        onSubmit={handleSubmit}
        initialValues={{
          Name: "",
          email: "",
          phoneNumber: "",
          message: "",
        }}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-2">
                <Sidebar active={active} setActive={setActive} />
              </div>

              <div className="col-10">
                <ol className="breadcrumb divider">
                  <li className="breadcrumb-item">
                    <a href="#">UserData</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    PersonalDetails
                  </li>
                </ol>

                <div className="w-75">
                  <label className="block mt-2">Name:</label>
                  <input
                    className="form-control "
                 
                    name="Name"
                
                    value={values.Name}
                    onChange={handleChange}
                  />
                  {<p className="formik">{errors.Name}</p>}
                  <label className="mt-2 block">E-mail</label>
                  <input
                    className="form-control "
                   name="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                  {<p className="formik">{errors.email}</p>}
                  <label className="mt-2 block">PhoneNumber</label>
                  <input
                    phoneNumber="phoneNumber"
                    type="number"
                    className="form-control"
                     name="phoneNumber"
                    value={values.phoneNumber}
                    onChange={handleChange}
                  />
                  {<p className="formik">{errors.phoneNumber}</p>}
                  <label className="mt-2 block">Message</label>
                  <textarea 
                  className="form-control textarea " 
                   name="message"
                  value={values.message} 
                  onChange={handleChange}
                  />
                  {<p className="formik">{errors.message}</p>}
                  <div className="d-grid gap-2 d-md-flex justify-content-end">
                    <button type="submit"
                      className=" btn text-white pink"
                      onClick={() => handleSubmit()}
                    >
                      Submit
                    </button>
                    <button className=" btn text-block bg-white">Cancel</button>
                  </div>
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
