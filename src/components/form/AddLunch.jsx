import Sidebar from "../../layout/Sidebar";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Formik } from "formik";
import Form from "react-bootstrap/Form";
import * as yup from "yup"; 
const AddLunch = (
  { active,
  setActive,
changeArr,
setChangeArr}
) => {

  const [menulist, setMenulist] = useState({
    Name: "",
    phoneNumber: "",
    dateofbirth: "",
    email:"",
    gender: "",
    price: "",
    menu: "",
    list: "",
    lunch: "",
    link: "",
    put: "",
    array:"",
    object:"",
    long:"",

    product: [],
    quantity: [],
    money: "",
    quality: "",
    food: "",
    image: "",
    get: "",
    input:"",
    map:"",
    double:"",

    street: "",
    city: "",
    state: "",
    zip: "",
  });
  // const[changeArr,setChangeArr]=useState([]);
  // const [active, setActive] = useState();

  const navigate = useNavigate();
  const handlemenulist = (e) => {
    setMenulist({ ...menulist, [e.target.name]: e.target.value });
  };
  const handleproduct = (event) => {
    if (event.target.checked)
      setMenulist({
        ...menulist,
        product: [...menulist.product, event.target.value],
      });
    else {
      const temp = menulist.product.filter(
        (item) => item !== event.target.value
      );
      setMenulist({ ...menulist, product: temp });
    }
  };
  const handlequantity = (event) => {
    if (event.target.checked)
      setMenulist({
        ...menulist,
        quantity: [...menulist.quantity, event.target.value],
      });
    else {
      const temp = menulist.quantity.filter(
        (item) => item !== event.target.value
      );
      setMenulist({ ...menulist, quantity: temp });
    }
  };

  const handleInput = (values) => {
    console.log(values,"");
    setChangeArr([...changeArr, values]);
   navigate("/lunch");
  };

  useEffect(() => {
    const temp = menulist.menu * 15;
    setMenulist({ ...menulist, money: temp });
  }, [menulist.menu]);

  useEffect(() => {
    const temp = menulist.list * 15;
    setMenulist({ ...menulist, quality: temp });
  }, [menulist.list]);

  useEffect(() => {
    const temp = menulist.lunch * 15;
    setMenulist({ ...menulist, food: temp });
  }, [menulist.lunch]);

  useEffect(() => {
    const temp = menulist.long * 100;
    setMenulist({ ...menulist, double: temp });
  }, [menulist.long]);

  useEffect(() => {
    const temp = menulist.put * 90;
    setMenulist({ ...menulist, get: temp });
  }, [menulist.put]);

  useEffect(() => {
    const temp = menulist.array * 15;
    setMenulist({ ...menulist, input: temp });
  }, [menulist.array]);

  useEffect(() => {
    const temp = menulist.object * 15;
    setMenulist({ ...menulist, map: temp });
  }, [menulist.object]);

  const schema = yup.object().shape({
    Name: yup.string().required("Name is a required field"),
    phoneNumber: yup.number().required("phone Number is a required field"),
    dateofbirth: yup.string().required("date of birth is a required field"),
    email: yup.string().email().required("E-mail is a required field"),
    gender: yup.string().required("Gender is a required field"),
    coin:yup.string().required("lunchlist is a required field"),
    street: yup.string().required("street is a required field"),
    city: yup.string().required("city is a required field"),
    state: yup.string().required("state is a required field"),
    zip: yup.string().required("zip is a required field"),
  });


  return (
    <>
     <Formik
      validationSchema={schema}
      onSubmit= { handleInput}
      initialValues={{
        Name: "",
        phoneNumber: "",
        dateofbirth:"",
        email: "",
        gender:"",
        coin:"",
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
          <div className="mx-5">
            <div className="row ">
              <h5 className="personaldetail">Personal Details</h5>
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
                 <p className="formik">{errors.phoneNumber}</p>
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
                { <p className="formik">{errors.dateofbirth}</p>}
              </div>
              <div className="col-3">
              <label>E-mail:</label>
              <input
                className=" form-control box"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              { <p className="formik">{errors.email}</p>}
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
                        defaultChecked={values.gender=== "gender"}
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
                    name="coin"
                    id="veg"
                    value={"veg"}
                    onChange={handleChange}
                        defaultChecked={values.coin=== "veg"}
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
                    name="coin"
                    id="Nonveg"
                    value={"Non-veg"}
                    onChange={handleChange}
                    defaultChecked={values.coin=== "Non-veg"}
                  />
                  <label className="form-check-label  " for="price">
                    Non veg
                  </label>
                </div>
              </div>
            </div>
            <p className="formik">{errors.coin}</p>
            {values.coin === "veg" ? (
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
                          id="tomoto rice"
                          name="tomotoriceproduct"
                          value={"tomotorice"}
                          onClick={(e) => handleproduct(e)}
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Tomoto rice
                        </label>
                      </div>
                    </td>

                    <td>
                      {menulist.product.includes("tomotorice") && (
                        <input
                          className="form-control w-25"
                          type="number"
                          name="tomotoricequantity"
                          value={menulist.menu}
                          onChange={(e) =>
                            setMenulist({ ...menulist, menu: e.target.value })
                          }
                        />
                      )}
                    </td>
                    {
                      <td>
                        {" "}
                        {menulist.money !== ""
                          ? menulist.money
                          : (menulist.money = 0)}
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
                          id="gopi rice"
                          name="gopiriceproduct"
                          value={"gopirice"}
                          onClick={(e) => handleproduct(e)}
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Gopi rice
                        </label>
                      </div>
                    </td>
                    <td>
                      {menulist.product.includes("gopirice") && (
                        <input
                          className="form-control w-25"
                          type="number"
                          name="gopiricequantity"
                          value={menulist.list}
                          onChange={(e) =>
                            setMenulist({ ...menulist, list: e.target.value })
                          }
                        />
                      )}
                    </td>
                    {
                      <td>
                        {" "}
                        {menulist.quality !== ""
                          ? menulist.quality
                          : (menulist.quality = 0)}
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
                          id="sambar rice"
                          name="sambarriceproduct"
                          value={"sambarrice"}
                          onClick={(e) => handleproduct(e)}
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Sambar rice
                        </label>
                      </div>
                    </td>
                    <td>
                      {menulist.product.includes("sambarrice") && (
                        <input
                          className="form-control w-25"
                          type="number"
                          name="curdricequantity"
                          value={menulist.lunch}
                          onChange={(e) =>
                            setMenulist({ ...menulist, lunch: e.target.value })
                          }
                        />
                      )}
                    </td>
                    {
                      <td>
                        {" "}
                        {menulist.food !== ""
                          ? menulist.food
                          : (menulist.food = 0)}
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
                          id="meals"
                          name="mealsproduct"
                          value={"meals"}
                          onClick={(e) => handleproduct(e)}
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Meals
                        </label>
                      </div>
                    </td>
                    <td>
                      {menulist.product.includes("meals") && (
                        <input
                          className="form-control w-25"
                          type="number"
                          name="vegnoodlesquantity"
                          value={menulist.vegnoodlesquantity}
                          onChange={(e) =>
                            setMenulist({ ...menulist, list: e.target.value })
                          }
                        />
                      )}
                    </td>
                    {
                      <td>
                        {" "}
                        {menulist.money !== ""
                          ? menulist.money
                          : (menulist.money = 0)}
                      </td>
                    }
                  </tr>
                </tbody>
              </table>
            ) : values.coin === "Non-veg" ? (
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
                          id="briyani"
                          name="Briyani quantity"
                          value={"Briyani"}
                          onClick={(e) => handlequantity(e)}
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Briyani
                        </label>
                      </div>
                    </td>
                    <td>
                      {menulist.quantity.includes("Briyani") && (
                        <input
                          className="form-control w-25"
                          type="number"
                          name="Briyaniquantity"
                          value={menulist.long}
                          onChange={(e) =>
                            setMenulist({ ...menulist, long: e.target.value })
                          }
                        />
                      )}
                    </td>
                    {
                      <td>
                        {menulist.double !== ""
                          ? menulist.double
                          : (menulist.double = 0)}
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
                          id="chicken shawarma"
                          name="chickenshawarmaquantity"
                          value={"chickenshawarma"}
                          onClick={(e) => handlequantity(e)}
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Chicken shawarma
                        </label>
                      </div>
                    </td>
                    <td>
                      {menulist.quantity.includes("chickenshawarma") && (
                        <input
                          className="form-control w-25"
                          type="number"
                          name="chickenshawarmaquantity"
                          value={menulist.put}
                          onChange={(e) =>
                            setMenulist({ ...menulist, put: e.target.value })
                          }
                        />
                      )}
                    </td>
                    {
                      <td>
                        {menulist.get !== ""
                          ? menulist.get
                          : (menulist.get = 0)}
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
                          id="chicken fried rice"
                          name="chickenfriedriceproduct"
                          value={"chickenfriedrice"}
                          onClick={(e) => handlequantity(e)}
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Chicken fried rice
                        </label>
                      </div>
                    </td>
                    <td>
                      {menulist.quantity.includes("chickenfriedrice") && (
                        <input
                          className="form-control w-25"
                          type="number"
                          name="vegricequantity"
                          value={menulist.array}
                          onChange={(e) =>
                            setMenulist({ ...menulist, array: e.target.value })
                          }
                        />
                      )}
                    </td>
                    {
                      <td>
                        {menulist.input !== ""
                          ? menulist.input
                          : (menulist.input = 0)}
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
                          id="prawn pulao"
                          name="prawnpulaoquantity"
                          value={"prawnpulao"}
                          onClick={(e) => handlequantity(e)}
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Prawn pulao
                        </label>
                      </div>
                    </td>
                    <td>
                      {menulist.quantity.includes("prawnpulao") && (
                        <input
                          className="form-control w-25"
                          type="number"
                          name="prawnpulaoquantity"
                          value={menulist.object}
                          onChange={(e) =>
                            setMenulist({ ...menulist, object: e.target.value })
                          }
                        />
                      )}
                    </td>
                    {
                      <td>
                        {menulist.map !== ""
                          ? menulist.map
                          : (menulist.map = 0)}
                      </td>
                    }
                  </tr>
                </tbody>
              </table>
            ) : null}

            <h5 className="mt-2 addressdetail">Address Details</h5>

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
                onClick={() => navigate("/lunch")}
                type="button"
              >
                Cancel
              </button>
              <button
                className="btn p-2 me-md-2 pink text-white"
               
              
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
          <div />
          <div />
        </div>
      </div>
</Form>
)}
   
      </Formik>
    </>

  );
};
export default AddLunch;
