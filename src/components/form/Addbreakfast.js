import Sidebar from "../../layout/Sidebar";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import Form from "react-bootstrap/Form";

const Datalist = ({
  datalist,
  setDatalist,
  active,
  setActive,
  inputArr,
  setInputArr,
}) => {
  // const [active, setActive] = useState();

  const navigate = useNavigate();
  const handledatalist = (e) => {
    setDatalist({ ...datalist, [e.target.name]: e.target.value });
  };
  const handleproduct = (event) => {
    if (event.target.checked)
      setDatalist({
        ...datalist,
        product: [...datalist.product, event.target.value],
      });
    else {
      const temp = datalist.product.filter(
        (item) => item !== event.target.value
      );
      setDatalist({ ...datalist, product: temp });
    }
  };
  const handlequantity = (event) => {
    if (event.target.checked)
      setDatalist({
        ...datalist,
        quantity: [...datalist.quantity, event.target.value],
      });
    else {
      const temp = datalist.quantity.filter(
        (item) => item !== event.target.value
      );
      setDatalist({ ...datalist, quantity: temp });
    }
  };

  const handleValue = (values) => {

    console.log(values, "++++++++");
    // setDatalist({ ...Datalist, id: inputArr?.length + 1 });
    setInputArr([...inputArr, values]);
    navigate("/breakfast");
  };

  //console.log(inputArr, "4444444");

  useEffect(() => {
    const temp = datalist.cost * 15;
    setDatalist({ ...datalist, price: temp });
  }, [datalist.cost]);

  useEffect(() => {
    const temp = datalist.text * 15;
    setDatalist({ ...datalist, test: temp });
  }, [datalist.text]);

  useEffect(() => {
    const temp = datalist.input * 15;
    setDatalist({ ...datalist, array: temp });
  }, [datalist.input]);

  useEffect(() => {
    const temp = datalist.object * 15;
    setDatalist({ ...datalist, map: temp });
  }, [datalist.object]);

  useEffect(() => {
    const temp = datalist.state * 15;
    setDatalist({ ...datalist, zip: temp });
  }, [datalist.state]);

  useEffect(() => {
    const temp = datalist.pin * 15;
    setDatalist({ ...datalist, code: temp });
  }, [datalist.pin]);

  useEffect(() => {
    const temp = datalist.boolean * 50;
    setDatalist({ ...datalist, example: temp });
  }, [datalist.boolean]);

  useEffect(() => {
    const temp = datalist.array * 30;
    setDatalist({ ...datalist, list: temp });
  }, [datalist.array]);

  const schema = yup.object().shape({
    Name: yup.string().required("Name is a required field"),
    phoneNumber: yup.number().required("phone Number is a required field"),
    dateofbirth: yup.string().required("date of birth is a required field"),
    email: yup.string().email().required("E-mail is a required field"),
    gender: yup.string().required("Gender is a required field"),
    list:yup.string().required("lunchlist is a required field"),
    street: yup.string().required("street is a required field"),
    city: yup.string().required("city is a required field"),
    state: yup.string().required("state is a required field"),
    zip: yup.string().required("zip is a required field"),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit= { handleValue}
      initialValues={{
        Name: "",
        phoneNumber: "",
        dateofbirth:"",
        email: "",
        gender:"",
         list:"",
        street: "",
        city: "",
        state: "",
        zip: "",
      }}
    >
      {({ handleSubmit, handleChange, values, errors }) => (

        <Form noValidate onSubmit={handleSubmit}>
          <div className="row ">
            <div className="col-2 ">
              <Sidebar active={active} setActive={setActive}  />
            </div>

            <div className="col-10  p-3  ">
              <div className="mx-5">
                <div className="row ">
                  <h5 className="bs">Personal Details</h5>

                  <div className="col-3">
                    <label>Name :</label>
                    <input
                      className=" form-control box"
                      name="Name"
                      value={values.Name}
                      onChange={handleChange}
                    />
                    {<p className="formik">{errors.Name}</p>}
                  </div>
                  <div className="col-3">
                    <label>Phone Number :</label>
                    <input
                      type="number"
                      className=" form-control box"
                      name="phoneNumber"
                      value={values.phoneNumber}
                      onChange={handleChange}
                    />
                    {<p className="formik">{errors.phoneNumber}</p>}
                  </div>
                  <div className="col-3">
                    <label>Date of Birth :</label>
                    <input
                      type="date"
                      className="form-control"
                      name="dateofbirth"
                      value={values.dateofbirth}
                      onChange={handleChange}
                    />
                        {<p className="formik">{errors.dateofbirth}</p>}
                  </div>
                  <div className="col-3">
                    <label>E-mail:</label>
                    <input
                      className=" form-control box"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                    />
                         {<p className="formik">{errors.email}</p>}
                  </div>

                  <div className="row">
                    <label className="mt-2 ">Gender :</label>

                    <div className="row w-50">
                      <div className="col-4">
                        <div className="form-check ">
                          <input
                            className="form-check-input "
                            type="radio"
                            id="male"
                            name="gender"
                            value={"male"}
                            onChange={handleChange}
                            defaultChecked={values.gender=== "male"}
                          />
                        
                          <label
                            className="form-check-label male "
                            for="flexRadioDefault1"
                          >
                            Male
                          </label>
                        </div>
                      </div>

                      <div className="col-4">
                        <div className="form-check  ">
                          <input
                            className="form-check-input "
                            type="radio"
                            id="female"
                            name="gender"
                            value={"female"}
                           onChange={handleChange}
                            defaultChecked={values.gender=== "female"}
                          />
                          <label
                            className="form-check-label"
                            for="flexRadioDefault2"
                          >
                            Female
                          </label>
                        </div>
                      </div>

                      <div className="col-4">
                        <div className="form-check  ">
                          <input
                            className="form-check-input"
                            type="radio"
                            id="others"
                            name="gender"
                            value={"others"}
                            onChange={handleChange}
                            defaultChecked={values.gender=== "others"}
                          />
                          <label
                            className="form-check-label"
                            for="flexRadioDefault2"
                          >
                            Others
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="formik">{errors.gender}</p>
                </div>

                <label className=" mt-3  ">Type of food like to have?</label>
                <div className="row w-50">
                  <div className="col-6">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="list"
                        id="veg"
                        value={"veg"}
                        onChange={handleChange}
                            defaultChecked={values.list=== "veg"}
                      />
                        
                      <label className="form-check-label  " for="price">
                        Veg
                      </label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-check ">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="list"
                        id="nonveg"
                        value={"Non-veg"}
                        onChange={handleChange}
                        defaultChecked={values.list=== "Non-veg"}
                      />
                       
                      <label className="form-check-label  " for="price">
                        Non veg
                      </label>
                    </div>
                  </div>
                </div>
             
                {<p className="formik">{errors.list}</p>}
                {values.list === "veg" ? (
                  <table className="table mt-3 p-4">
                    <thead>
                      <tr>
                        <th scope="col" className="bs">
                          S.no
                        </th>
                        <th scope="col" className="bs">
                          Food
                        </th>
                        <th scope="col" className="bs">
                          Quantity
                        </th>
                        <th scope="col" className="bs">
                          Price
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="idely"
                              name="idelyproduct"
                              value={"idely"}
                              onClick={(e) => handleproduct(e)}
                            />
                            <label
                              className="form-check-label"
                              for="flexCheckDefault"
                            >
                              Idly
                            </label>
                          </div>
                        </td>

                        <td>
                          {datalist.product.includes("idely") && (
                            <input
                              className="form-control w-25"
                              type="number"
                              name="idelyquantity"
                              value={datalist.cost}
                              onChange={(e) =>
                                setDatalist({
                                  ...datalist,
                                  cost: e.target.value,
                                })
                              }
                            />
                          )}
                        </td>
                        <td>
                          {datalist.price !== ""
                            ? datalist.price
                            : (datalist.price = 0)}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="dosa"
                              name="dosaproduct"
                              value={"dosa"}
                              onClick={(e) => handleproduct(e)}
                            />
                            <label
                              className="form-check-label"
                              for="flexCheckDefault"
                            >
                              Dosa
                            </label>
                          </div>
                        </td>
                        <td>
                          {datalist.product.includes("dosa") && (
                            <input
                              className="form-control w-25"
                              type="number"
                              name="curdricequantity"
                              value={datalist.text}
                              onChange={(e) =>
                                setDatalist({
                                  ...datalist,
                                  text: e.target.value,
                                })
                              }
                            />
                          )}
                        </td>
                        <td>
                          {" "}
                          {datalist.test !== ""
                            ? datalist.test
                            : (datalist.test = 0)}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="ven pongal"
                              name="venpongalproduct"
                              value={"venpongal"}
                              onClick={(e) => handleproduct(e)}
                            />
                            <label
                              className="form-check-label"
                              for="flexCheckDefault"
                            >
                              Ven pongal
                            </label>
                          </div>
                        </td>
                        <td>
                          {datalist.product.includes("venpongal") && (
                            <input
                              className="form-control w-25"
                              type="number"
                              name="venpongalquantity"
                              value={datalist.input}
                              onChange={(e) =>
                                setDatalist({
                                  ...datalist,
                                  input: e.target.value,
                                })
                              }
                            />
                          )}
                        </td>
                        <td>
                          {" "}
                          {datalist.array !== ""
                            ? datalist.array
                            : (datalist.array = 0)}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>

                        <td>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="upma"
                              name="upmaproduct"
                              value={"upma"}
                              onClick={(e) => handleproduct(e)}
                            />
                            <label
                              className="form-check-label"
                              for="flexCheckDefault"
                            >
                              Upma
                            </label>
                          </div>
                        </td>
                        <td>
                          {datalist.product.includes("upma") && (
                            <input
                              className="form-control w-25"
                              type="number"
                              name="upmaquantity"
                              value={datalist.object}
                              onChange={(e) =>
                                setDatalist({
                                  ...datalist,
                                  object: e.target.value,
                                })
                              }
                            />
                          )}
                        </td>
                        <td>
                          {" "}
                          {datalist.map !== ""
                            ? datalist.map
                            : (datalist.map = 0)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : values.list === "Non-veg" ? (
                  <table className="table mt-3 p-4">
                    <thead>
                      <tr>
                        <th scope="col" className="bs">
                          S.no
                        </th>
                        <th scope="col" className="bs">
                          Product
                        </th>
                        <th scope="col" className="bs">
                          Quantity
                        </th>
                        <th scope="col" className="bs">
                          Price
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="chickenpasta"
                              name="chickenpastaquantity"
                              value={"chickenpasta"}
                              onClick={(e) => handlequantity(e)}
                            />
                            <label
                              className="form-check-label"
                              for="flexCheckDefault"
                            >
                              Duck gravy
                            </label>
                          </div>
                        </td>
                        <td>
                          {datalist.quantity.includes("chickenpasta") && (
                            <input
                              className="form-control w-25"
                              type="number"
                              name="chickenpastaquantity"
                              value={datalist.state}
                              onChange={(e) =>
                                setDatalist({
                                  ...datalist,
                                  state: e.target.value,
                                })
                              }
                            />
                          )}
                        </td>
                        <td>
                          {" "}
                          {datalist.zip !== ""
                            ? datalist.zip
                            : (datalist.zip = 0)}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="chilli chicken"
                              name="chillichickenquantity"
                              value={"chillichicken"}
                              onClick={(e) => handlequantity(e)}
                            />
                            <label
                              className="form-check-label"
                              for="flexCheckDefault"
                            >
                              Chicken gravy
                            </label>
                          </div>
                        </td>
                        <td>
                          {datalist.quantity.includes("chillichicken") && (
                            <input
                              className="form-control w-25"
                              type="number"
                              name="chillichickenquantity"
                              value={datalist.pin}
                              onChange={(e) =>
                                setDatalist({
                                  ...datalist,
                                  pin: e.target.value,
                                })
                              }
                            />
                          )}
                        </td>
                        <td>
                          {" "}
                          {datalist.code !== ""
                            ? datalist.code
                            : (datalist.code = 0)}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="egg pulao"
                              name="eggpulaoquantity"
                              value={"eggpulao"}
                              onChange={(e) =>
                                setDatalist({
                                  ...datalist,
                                  cost: e.target.value,
                                })
                              }
                            />
                            <label
                              className="form-check-label"
                              for="flexCheckDefault"
                            >
                              Paper Chicken
                            </label>
                          </div>
                        </td>
                        <td>
                          {datalist.quantity.includes("eggpulao") && (
                            <input
                              className="form-control w-25"
                              type="number"
                              name="eggpulaoquantity"
                              value={datalist.boolean}
                              onChange={(e) =>
                                setDatalist({
                                  ...datalist,
                                  boolean: e.target.value,
                                })
                              }
                            />
                          )}
                        </td>
                        <td>
                          {" "}
                          {datalist.example !== ""
                            ? datalist.example
                            : (datalist.example = 0)}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>

                        <td>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="ginger chicken"
                              name="gingerchickenquantity"
                              value={"gingerchicken"}
                              onClick={(e) => handlequantity(e)}
                            />
                            <label
                              className="form-check-label"
                              for="flexCheckDefault"
                            >
                              Chicken Tikka
                            </label>
                          </div>
                        </td>
                        <td>
                          {datalist.quantity.includes("gingerchicken") && (
                            <input
                              className="form-control w-25"
                              type="number"
                              name="gingerchickenquantity"
                              value={datalist.array}
                              onChange={(e) =>
                                setDatalist({
                                  ...datalist,
                                  array: e.target.value,
                                })
                              }
                            />
                          )}
                        </td>
                        <td>
                          {" "}
                          {datalist.list !== ""
                            ? datalist.list
                            : (datalist.list = 0)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : null}

                <h5 className="mt-2 bs">Address Details</h5>

                <label>Street :</label>
                <textarea
                  className=" form-control p-0 "
                  name="street"
                  value={values.street}
                  onChange={handleChange}
              
                />
                {<p className="formik">{errors.street}</p>}
                <div className="row">
                  <div className="col-3 mt-3">
                    <label>City :</label>
                    <input
                      className=" form-control "
                      name="city"
                      value={values.city}
                      onChange={handleChange}
                      
                    />
                         {<p className="formik">{errors.city}</p>}
                    <div />
                  </div>
                  <div className="col-3 mt-3">
                    <label>State :</label>
                    <input
                      className="form-control "
                      name="state"
                      value={values.state}
                      onChange={handleChange}
                     
                    />
                         {<p className="formik">{errors.state}</p>}
                  </div>

                  <div className="col-3 mt-3">
                    <label>Zip :</label>
                    <input
                      className=" form-control "
                      name="zip"
                      value={values.zip}
                      onChange={handleChange}
                      
                    />
                         {<p className="formik">{errors.zip}</p>}
                  </div>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-end">
                  <button
                    className="btn p-2 me-md-2  bg-white"
                    onClick={() => navigate("/breakfast")}
                    type="button"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn p-2 me-md-2 pink text-white"   
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Datalist;
