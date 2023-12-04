import Sidebar from "../../layout/Sidebar";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
const AddLunch = (
  { active,
  setActive,
changeArr,
setChangeArr}
) => {

  const [menulist, setMenulist] = useState({
    name: "",
    phoneNumber: "",
    dateofbirth: "",
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

  const handleInput = () => {
    console.log(menulist,"menulist");
    setChangeArr((prev)=>[...prev, menulist])
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

  return (
    <>
      <div className="row ">
        <div className="col-2 ">
          <Sidebar active={active} setActive={setActive} />
        </div>

        <div className="col-10  p-3  ">
          <div className="mx-5">
            <div className="row ">
              <h5 className="bs">Personal Details</h5>
              <div className="col-3">
                <label>Name :</label>
                <input
                  className=" form-control box"
                  name="name"
                  value={menulist.name}
                  onChange={(e) => handlemenulist(e)}
                />
              </div>
              <div className="col-3">
                <label>Phone Number :</label>
                <input
                  type="number"
                  className=" form-control box"
                  name="phoneNumber"
                  value={menulist.phoneNumber}
                  onChange={(e) => handlemenulist(e)}
                />
              </div>
              <div className="col-3">
                <label>Date of Birth :</label>
                <input
                  type="date"
                  className="form-control"
                  name="dateofbirth"
                  value={menulist.dateofbirth}
                  onChange={(e) => handlemenulist(e)}
                />
              </div>
              <div className="col-3">
              <label>E-mail:</label>
              <input
                className=" form-control box"
                name="email"
                value={menulist.email}
                onChange={(e) => handlemenulist(e)}
              />
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
                        value="male"
                        onClick={(e) => handlemenulist(e)}
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
                        value="female"
                        onClick={(e) => handlemenulist(e)}
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
                        value="others"
                        onClick={(e) => handlemenulist(e)}
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
            </div>
            <label className=" mt-3  ">Type of food like to have?</label>
            <div className="row w-50">
              <div className="col-6">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="price"
                    id="veg"
                    value="veg"
                    onClick={(e) => handlemenulist(e)}
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
                    name="price"
                    id="Nonveg"
                    value="Non-veg"
                    onClick={(e) => handlemenulist(e)}
                  />
                  <label className="form-check-label  " for="price">
                    Non veg
                  </label>
                </div>
              </div>
            </div>

            {menulist.price === "veg" ? (
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
            ) : menulist.price === "Non-veg" ? (
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

            <h5 className="mt-2 bs">Address Details</h5>

            <label>Street :</label>
            <textarea
              className=" form-control p-0 "
              name="street"
              value={menulist.street}
              onChange={(e) => handlemenulist(e)}
            />

            <div className="row">
              <div className="col-3 mt-3">
                <label>City :</label>
                <input
                  className=" form-control "
                  name="city"
                  value={menulist.city}
                  onChange={(e) => handlemenulist(e)}
                />
                <div />
              </div>
              <div className="col-3 mt-3">
                <label>State :</label>
                <input
                  className="form-control "
                  name="state"
                  value={menulist.state}
                  onChange={(e) => handlemenulist(e)}
                />
              </div>

              <div className="col-3 mt-3">
                <label>Zip :</label>
                <input
                  className=" form-control "
                  name="zip"
                  value={menulist.zip}
                  onChange={(e) => handlemenulist(e)}
                />
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
                // onClick={() => navigate("/lunch")}
                onClick={() => handleInput()}
                type="button"
              >
                Submit
              </button>
            </div>
          </div>
          <div />
          <div />
        </div>
      </div>
    </>
  );
};
export default AddLunch;
