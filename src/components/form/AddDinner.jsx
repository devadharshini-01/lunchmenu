import Sidebar from "../../layout/Sidebar";
import { useState } from "react";
import { useEffect } from "react";
import { Formik } from "formik";
import Form from "react-bootstrap/Form";
import * as yup from "yup"; 

import { Navigate, useNavigate } from "react-router-dom";
const Dinnerlist = ({active,setActive,arrList,setArrList}) => {
  const [dinnerlist, setDinnerlist] = useState({
    name: "",
    phoneNumber: "",
    dateofbirth: "",
    gender: "",
    menu: "",
    cost: "",
    rupees: "",
    coin: "",
    image: "",
    universe: "",
    edit: "",
    max: "",
    delete: "",

    product: [],
    quantity: [],
    price: "",
    value: "",
    money: "",
    test: "",
    unit: "",
    get: "",
    exam: "",
    head: "",

    street: "",
    city: "",
    state: "",
    zip: "",
  });

  // const [active, setActive] = useState();
  const navigate = useNavigate();
  const handledinnerlist = (e) => {
    setDinnerlist({ ...dinnerlist, [e.target.name]: e.target.value });
  };
  const handleproduct = (event) => {
    if (event.target.checked)
      setDinnerlist({
        ...dinnerlist,
        product: [...dinnerlist.product, event.target.value],
      });
    else {
      const temp = dinnerlist.product.filter(
        (item) => item !== event.target.value
      );
      setDinnerlist({ ...dinnerlist, product: temp });
    }
  };
  const handlequantity = (event) => {
    if (event.target.checked)
      setDinnerlist({
        ...dinnerlist,
        quantity: [...dinnerlist.quantity, event.target.value],
      });
    else {
      const temp = dinnerlist.quantity.filter(
        (item) => item !== event.target.value
      );
      setDinnerlist({ ...dinnerlist, quantity: temp });
    }
  };

  const handleChange = (values) => {
    // console.log(menulist,"menulist");
    setArrList((prev)=>[...prev, values])
   navigate("/dinner");
   
  };


  useEffect(() => {
    const temp = dinnerlist.cost * 15;
    setDinnerlist({ ...dinnerlist, price: temp });
  }, [dinnerlist.cost]);

  useEffect(() => {
    const temp = dinnerlist.rupees * 15;
    setDinnerlist({ ...dinnerlist, value: temp });
  }, [dinnerlist.rupees]);

  useEffect(() => {
    const temp = dinnerlist.coin * 20;
    setDinnerlist({ ...dinnerlist, money: temp });
  }, [dinnerlist.coin]);

  useEffect(() => {
    const temp = dinnerlist.image * 20;
    setDinnerlist({ ...dinnerlist, test: temp });
  }, [dinnerlist.image]);

  useEffect(() => {
    const temp = dinnerlist.universe * 120;
    setDinnerlist({ ...dinnerlist, unit: temp });
  }, [dinnerlist.universe]);

  useEffect(() => {
    const temp = dinnerlist.edit * 120;
    setDinnerlist({ ...dinnerlist, get: temp });
  }, [dinnerlist.edit]);

  useEffect(() => {
    const temp = dinnerlist.max * 120;
    setDinnerlist({ ...dinnerlist, exam: temp });
  }, [dinnerlist.max]);

  useEffect(() => {
    const temp = dinnerlist.delete * 120;
    setDinnerlist({ ...dinnerlist, head: temp });
  }, [dinnerlist.delete]);

  console.log(dinnerlist, "dinnerlist", dinnerlist.price !== "");

  const schema = yup.object().shape({
    Name: yup.string().required("Name is a required field"),
    phoneNumber: yup.number().required("phone Number is a required field"),
    dateofbirth: yup.string().required("date of birth is a required field"),
    email: yup.string().email().required("E-mail is a required field"),
    gender: yup.string().required("Gender is a required field"),
    test:yup.string().required("lunchlist is a required field"),
    street: yup.string().required("street is a required field"),
    city: yup.string().required("city is a required field"),
    state: yup.string().required("state is a required field"),
    zip: yup.string().required("zip is a required field"),
  });
  return (
    <>
      <Formik
      validationSchema={schema}
      onSubmit= { handleChange}
      initialValues={{
        Name: "",
        phoneNumber: "",
        dateofbirth:"",
        email: "",
        gender:"",
        test:"",
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
          <Sidebar active={active} setActive={setActive} />
        </div>

        <div className="col-10  p-3  ">
      
            <div className="row bg-white mx-3 rounded p-3">
              <h5 className="personaldetail">Personal Details</h5>
              <div className="col-3">
                <label>Name :</label>
                <input
                  className=" form-control inputfield"
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
                  className=" form-control inputfield"
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
                    name="test"
                    id="veg"
                    value={"veg"}
                    onChange={handleChange}
                    defaultChecked={values.test=== "veg"}
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
                    name="test"
                    id="Nonveg"
                    value={"Non-veg"}
                    onChange={handleChange}
                        defaultChecked={values.test=== "Non-veg"}
                  />
                  <label className="form-check-label  " for="price">
                    Non veg
                  </label>
                </div>
              </div>
            </div>
            <p className="formik">{errors.test}</p>
            {values.test === "veg" ? (
              <table className="table mt-3 p-4">
                <thead>
                  <tr>
                    <th scope="col" className="tableheading">
                      S.no
                    </th>
                    <th scope="col" className="tableheading">
                      Food
                    </th>
                    <th scope="col" className="tableheading">
                      Quantity
                    </th>
                    <th scope="col" className="tableheading">
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
                          id="parota"
                          name="parotaproduct"
                          value={"parota"}
                          onClick={(e) => handleproduct(e)}
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Parota
                        </label>
                      </div>
                    </td>

                    <td>
                      {dinnerlist.product.includes("parota") && (
                        <input
                          className="form-control w-25"
                          type="number"
                          name="parotaquantity"
                          value={dinnerlist.cost}
                          onChange={(e) =>
                            setDinnerlist({
                              ...dinnerlist,
                              cost: e.target.value,
                            })
                          }
                        />
                      )}
                    </td>

                    {/* {<td> {dinnerlist.price!== "" &&dinnerlist.price}</td>} */}
                    {
                      <td>
                        {" "}
                        {dinnerlist.price !== ""
                          ? dinnerlist.price
                          : (dinnerlist.price = 0)}
                      </td>
                    }
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="chapati"
                          name="chapatiproduct"
                          value={"chapati"}
                          onClick={(e) => handleproduct(e)}
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Chapati
                        </label>
                      </div>
                    </td>
                    <td>
                      {dinnerlist.product.includes("chapati") && (
                        <input
                          className="form-control w-25"
                          type="number"
                          name="chapatiquantity"
                          value={dinnerlist.rupees}
                          onChange={(e) =>
                            setDinnerlist({
                              ...dinnerlist,
                              rupees: e.target.value,
                            })
                          }
                        />
                      )}
                    </td>

                    {
                      <td>
                        {dinnerlist.value !== ""
                          ? dinnerlist.value
                          : (dinnerlist.value = 0)}
                      </td>
                    }
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="poori"
                          name="pooriproduct"
                          value={"poori"}
                          onClick={(e) => handleproduct(e)}
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Poori
                        </label>
                      </div>
                    </td>
                    <td>
                      {dinnerlist.product.includes("poori") && (
                        <input
                          className="form-control w-25"
                          type="number"
                          name="pooriquantity"
                          value={dinnerlist.coin}
                          onChange={(e) =>
                            setDinnerlist({
                              ...dinnerlist,
                              coin: e.target.value,
                            })
                          }
                        />
                      )}
                    </td>
                    {
                      <td>
                        {dinnerlist.money !== ""
                          ? dinnerlist.money
                          : (dinnerlist.money = 0)}
                      </td>
                    }
                  </tr>
                  <tr>
                    <th scope="row">4</th>

                    <td>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="paniyaram"
                          name="paniyaramproduct"
                          value={"paniyaram"}
                          onClick={(e) => handleproduct(e)}
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Paniyaram
                        </label>
                      </div>
                    </td>
                    <td>
                      {dinnerlist.product.includes("paniyaram") && (
                        <input
                          className="form-control w-25"
                          type="number"
                          name="paniyaramquantity"
                          value={dinnerlist.image}
                          onChange={(e) =>
                            setDinnerlist({
                              ...dinnerlist,
                              image: e.target.value,
                            })
                          }
                        />
                      )}
                    </td>
                    {
                      <td>
                        {dinnerlist.test !== ""
                          ? dinnerlist.test
                          : (dinnerlist.test = 0)}
                      </td>
                    }
                  </tr>
                </tbody>
              </table>
            ) : values.test === "Non-veg" ? (
              <table className="table mt-3 p-4">
                <thead>
                  <tr>
                    <th scope="col" className="tableheading">
                      S.no
                    </th>
                    <th scope="col" className="tableheading">
                      Food
                    </th>
                    <th scope="col" className="tableheading">
                      Quantity
                    </th>
                    <th scope="col" className="tableheading">
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
                          id="chicken tikka"
                          name="chickentikkaquantity"
                          value={"chickentikka"}
                          onClick={(e) => handlequantity(e)}
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Chicken kolampu
                        </label>
                      </div>
                    </td>
                    <td>
                      {dinnerlist.quantity.includes("chickentikka") && (
                        <input
                          className="form-control w-25"
                          type="number"
                          name="chickentikkaquantity"
                          value={dinnerlist.universe}
                          onChange={(e) =>
                            setDinnerlist({
                              ...dinnerlist,
                              universe: e.target.value,
                            })
                          }
                        />
                      )}
                    </td>
                    {
                      <td>
                        {dinnerlist.unit !== ""
                          ? dinnerlist.unit
                          : (dinnerlist.unit = 0)}
                      </td>
                    }
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="chicken rice"
                          name="chickenricequantity"
                          value={"chickenrice"}
                          onClick={(e) => handlequantity(e)}
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Matton kolampu
                        </label>
                      </div>
                    </td>
                    <td>
                      {dinnerlist.quantity.includes("chickenrice") && (
                        <input
                          className="form-control w-25"
                          type="number"
                          name="chickenricequantity"
                          value={dinnerlist.edit}
                          onChange={(e) =>
                            setDinnerlist({
                              ...dinnerlist,
                              edit: e.target.value,
                            })
                          }
                        />
                      )}
                    </td>
                    {
                      <td>
                        {dinnerlist.get !== ""
                          ? dinnerlist.get
                          : (dinnerlist.get = 0)}
                      </td>
                    }
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="chicken noodles"
                          name="chickennoodlesquantity"
                          value={"chickennoodles"}
                          onClick={(e) => handlequantity(e)}
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Chicken noodles
                        </label>
                      </div>
                    </td>
                    <td>
                      {dinnerlist.quantity.includes("chickennoodles") && (
                        <input
                          className="form-control w-25"
                          type="number"
                          name="vegricequantity"
                          value={dinnerlist.max}
                          onChange={(e) =>
                            setDinnerlist({
                              ...dinnerlist,
                              max: e.target.value,
                            })
                          }
                        />
                      )}
                    </td>
                    {
                      <td>
                        {dinnerlist.exam !== ""
                          ? dinnerlist.exam
                          : (dinnerlist.exam = 0)}
                      </td>
                    }
                  </tr>
                  <tr>
                    <th scope="row">4</th>

                    <td>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="grilled chicken sandwich"
                          name="grilledchickensandwichquantity"
                          value={"grilledchickensandwich"}
                          onClick={(e) => handlequantity(e)}
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Chicken rice
                        </label>
                      </div>
                    </td>
                    <td>
                      {dinnerlist.quantity.includes(
                        "grilledchickensandwich"
                      ) && (
                        <input
                          className="form-control w-25"
                          type="number"
                          name="grilledchickensandwichquantity"
                          value={dinnerlist.delete}
                          onChange={(e) =>
                            setDinnerlist({
                              ...dinnerlist,
                              delete: e.target.value,
                            })
                          }
                        />
                      )}
                    </td>
                    {
                      <td>
                        {dinnerlist.head !== ""
                          ? dinnerlist.head
                          : (dinnerlist.head = 0)}
                      </td>
                    }
                  </tr>
                </tbody>
              </table>
            ) : null}

            <h5 className="mt-2 addressdetail">Address Details</h5>

            <label>Street :</label>
            <textarea
              className=" form-control p-0 textarea"
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
                onClick={() => navigate("/dinner")}
                type="button"
              >
                Cancel
              </button>
              <button
                className="btn p-2 me-md-2 buttoncolor text-white"
                
           
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
          <div />
          <div />
        </div>
        

      </Form>
        )}   
          </Formik>
    </>
   
  );
};
export default Dinnerlist;
