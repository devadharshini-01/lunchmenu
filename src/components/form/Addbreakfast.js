import Sidebar from "../../layout/Sidebar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import Form from "react-bootstrap/Form";
import logo from "../../assets/image/sidebarimage.png";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import Header from "../../layout/Header";

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
    list: yup.string().required("lunchlist is a required field"),
    street: yup.string().required("street is a required field"),
    city: yup.string().required("city is a required field"),
    state: yup.string().required("state is a required field"),
    zip: yup.string().required("zip is a required field"),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={handleValue}
      initialValues={{
        Name: "",
        phoneNumber: "",
        dateofbirth: "",
        email: "",
        gender: "",
        list: "",
        street: "",
        city: "",
        state: "",
        zip: "",
      }}
    >
      {({ handleSubmit, handleChange, values, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <div className="row vh-100">
            <div className="col-2 d-none d-sm-none d-md-block d-lg-block">
              <Sidebar active={active} setActive={setActive} />
            </div>
            <div className=" col-sm-12 col-md-10 col-lg-10   ">
             <Header active={active} setActive={setActive}/>
              <div className="row  bg-white  rounded p-3 ">
                <div className="col-md-6">
                  <div className="row ">
                    <h5 className="personaldetail">Personal Details</h5>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label"
                      >
                        Name :
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        name="Name"
                        value={values.Name}
                        onChange={handleChange}
                      />
                      <p className="formik">{errors.Name}</p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                      <label for="phonenumber2" class="form-label">
                        PhoneNumber:
                      </label>
                      <input
                        type=""
                        className="form-control"
                        id="phonenumber2"
                        name="phoneNumber"
                        value={values.phoneNumber}
                        onChange={handleChange}
                      />
                      <p className="formik">{errors.phoneNumber}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                      <label for="emailinput" className="form-label">
                        Email :
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="emailinput"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                      />
                      {<p className="formik">{errors.email}</p>}
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                      <label for="dateofbirth" class="form-label">
                        Date Of Birth
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="dateofbirth"
                        name="dateofbirth"
                        value={values.dateofbirth}
                        onChange={handleChange}
                      />
                      {<p className="formik">{errors.dateofbirth}</p>}
                    </div>

                    <div>
                      <label for="gender" class="form-label">
                        Gender :
                      </label>{" "}
                      <div class="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          value={"male"}
                          onChange={handleChange}
                          defaultChecked={values.gender === "gender"}
                        />
                        <label className="form-check-label" for="inlineRadio1">
                          Male
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="female"
                          name="gender"
                          value={"female"}
                          onChange={handleChange}
                          defaultChecked={values.gender === "female"}
                        />
                        <label className="form-check-label" for="inlineRadio2">
                          Female
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="others"
                          name="gender"
                          value={"others"}
                          onChange={handleChange}
                          defaultChecked={values.gender === "others"}
                        />
                        <label className="form-check-label" for="inlineRadio2">
                          Others
                        </label>
                      </div>
                    </div>
                    <p className="formik">{errors.gender}</p>
                  </div>

                  <h5 className="mt-2 addressdetail">Address Details</h5>

                  <div className="row ">
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                      <label for="street" className="form-label">
                        Street :
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="street"
                        name="street"
                        value={values.street}
                        onChange={handleChange}
                      />
                      <p className="formik">{errors.street}</p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                      <label for="city" className="form-label">
                        City:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="city"
                        name="city"
                        value={values.city}
                        onChange={handleChange}
                      />
                      <p className="formik">{errors.city}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                      <label for="state" class="form-label">
                        State :
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="state"
                        name="state"
                        value={values.state}
                        onChange={handleChange}
                      />
                      {<p className="formik">{errors.state}</p>}
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                      <label for="zip" class="form-label">
                        Zip :
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="zip"
                        name="zip"
                        value={values.zip}
                        onChange={handleChange}
                      />
                      {<p className="formik">{errors.zip}</p>}
                    </div>
                  </div>
                </div>
                <div className="col-md-6 border border-right-0 border-top-0 border-bottom-0">
                  <label className=" mt-3  ">Type of food like to have?</label>

                  <div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="list"
                        id="veg"
                        value={"veg"}
                        onChange={handleChange}
                        defaultChecked={values.list === "veg"}
                      />
                      <label class="form-check-label" for="inlineRadio1">
                        veg
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="list"
                        id="nonveg"
                        value={"Non-veg"}
                        onChange={handleChange}
                        defaultChecked={values.list === "Non-veg"}
                      />
                      <label class="form-check-label" for="inlineRadio2">
                        Nonveg
                      </label>
                    </div>
                  </div>

                  {<p className="formik">{errors.list}</p>}

                  {values.list === "veg" ? (
                    <div className="table-responsive">
                      <table className="table  table-hover table-striped  d-block mt-3 p-4  ">
                        <thead>
                          <tr>
                            <th>S.no</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
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
                    </div>
                  ) : values.list === "Non-veg" ? (
                    <table className="table table-responsive  table-hover table-striped  d-block mt-3 p-4">
                      <thead>
                        <tr>
                          <th>S.no</th>
                          <th>Product</th>
                          <th>Quantity</th>
                          <th>Price</th>
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
                </div>
                <div className="row">
                  <div className="col-6"></div>
                </div>
                <div className="   gap-2 d-flex justify-content-sm-end ">
                  <button
                    className="  btn p-2 me-md-2 bg-white btn-outline-dark"
                    onClick={() => navigate("/lunch")}
                    type="button"
                  >
                    Cancel
                  </button>
                  <button
                    className=" col-xs-6 col-sm-6 btn p-2 me-md-2 buttoncolor text-white"
                    type="submit"
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
