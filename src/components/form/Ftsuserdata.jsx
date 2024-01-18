import Sidebar from "../../layout/Sidebar";
import Form from "react-bootstrap/Form";
import * as yup from "yup";
import { Formik } from "formik";
import Button from "react-bootstrap/Button";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import logo from "../../assets/image/sidebarimage.png";

const Ftsuserdata = ({ active, setActive }) => {
  const token = localStorage.getItem("accessToken");
  const [getData, setGetData] = useState();
  const navigate = useNavigate();
  const userdatageturl = process.env.REACT_APP_USERDATAGETURL;
  const puturl = process.env.REACT_APP_PUTURL;
  const posturl = process.env.REACT_APP_POSTURL;

  const schema = yup.object().shape({
    name: yup.string().required("Name is a required field"),
    email: yup.string().email().required("email is a required field"),
    phone_number: yup.number().required("phoneNumber is a required field"),
    message: yup.string().required("message is a required field"),
  });
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios
        .get(`${userdatageturl}admin/testing/getUserById?id=${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          console.log(response, "55555");
          setGetData(response.data.response.user);
        })
        .catch((errors) => {});
    }
  }, []);
  console.log(getData, "454545454");
  return (
    <Formik
      validationSchema={schema}
      onSubmit={(values) => {
        values.phone_number = values.phone_number.toString();
        if (id) {
          axios
            .put(`${puturl}admin/testing/editUserById?id=${id}`, values, {
              headers: { Authorization: `Bearer ${token}` },
            })
            .then((res) => {
              navigate("/Fts-data-table");
            });
        } else {
          axios
            .post(`${posturl} user/newRegistration`, values, {
              headers: { Authorization: `Bearer ${token}` },
            })

            .then((res) => {
              navigate("/Fts-data-table");
              console.log(res);
            });
        }
      }}
      initialValues={{
        name: getData?.name || "",
        phone_number: getData?.phone_number || "",
        email: getData?.email || "",
        message: getData?.message || "",
      }}
      enableReinitialize={true}
    >
      {({ handleSubmit, handleChange, values, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <div className="row vh-100 ">
            {console.log(errors)}
            <div className="col-2 d-none d-sm-none d-md-block d-lg-block">
              <Sidebar active={active} setActive={setActive} />
            </div>
            <div className="col-sm-10 col-md-10 col-lg-10 ">
              <div className="  rounded image-color p-4  d-flex  d-sm-block d-md-none d-lg-none">
                <div className="col-10 ">
                  <img src={logo} className="image-width" />
                </div>
                <div className="col-2">
                  <a
                    data-bs-toggle="offcanvas"
                    href="#offcanvasExample"
                    role="button"
                    aria-controls="offcanvasExample"
                  >
                    <Icon
                      className="text-white"
                      icon="heroicons:bars-3-20-solid"
                      width="30"
                      height="30"
                    />
                  </a>

                  <div
                    className="offcanvas offcanvas-start w-75"
                    tabindex="-1"
                    id="offcanvasExample"
                    aria-labelledby="offcanvasExampleLabel"
                  >
                    <div className="offcanvas-header">
                      <h5
                        className="offcanvas-title text-white"
                        id="offcanvasExampleLabel"
                      >
                        Offcanvas
                      </h5>

                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      ></button>
                    </div>

                    <div className="offcanvas-body">
                      <div>
                        <div className="row sidebar h-100">
                          <div className=" p-3 mb-5 rounded">
                            <img
                              src={logo}
                              className=" d-flex justify-content-center logo  "
                            />
                            <div className="list-group mt-3 ">
                              <Link to="/breakfast">
                                {" "}
                                <p
                                  className={`${
                                    active === "breakfast"
                                      ? "p-2 bg-white rounded-3  text-danger"
                                      : "text-white"
                                  } p-2 fontsize hover  `}
                                  onClick={() => setActive("breakfast")}
                                >
                                  <Icon
                                    className="me-2"
                                    icon="material-symbols-light:no-meals-rounded"
                                    width="20"
                                    height="20"
                                  />
                                  Breakfast
                                </p>
                              </Link>
                              <Link to="/lunch">
                                {" "}
                                <p
                                  className={`${
                                    active === "lunch"
                                      ? " p-2 bg-white rounded-3  text-danger"
                                      : "text-white"
                                  } p-2 hover   fontsize `}
                                  onClick={() => setActive("lunch")}
                                >
                                  <Icon
                                    className="mb-1 me-2"
                                    icon="cil:dinner"
                                    width="20"
                                    height="20"
                                  />
                                  Lunch
                                </p>
                              </Link>

                              <Link to="/dinner">
                                {" "}
                                <p
                                  className={`${
                                    active === "dinner"
                                      ? " p-2 bg-white rounded-3 text-danger"
                                      : "text-white"
                                  } p-2 hover  fontsize `}
                                  onClick={() => setActive("dinner")}
                                >
                                  <Icon
                                    className="mb-1 me-2"
                                    icon="mdi:dinner"
                                    width="20"
                                    height="20"
                                  />
                                  Dinner
                                </p>
                              </Link>

                              <Link to="/User-data-table">
                                <p
                                  className={`${
                                    active === "User-data-table"
                                      ? " p-2 bg-white rounded-3  text-danger"
                                      : "text-white"
                                  } p-2 hover   `}
                                  onClick={() => setActive("User-data-table")}
                                >
                                  <Icon
                                    icon="uil:chat-bubble-user"
                                    width="20"
                                    height="20"
                                    className="me-2 mb-1"
                                  />
                                  User DataTable
                                </p>
                              </Link>

                              <Link to="/fts-data-table">
                                {" "}
                                <p
                                  className={`${
                                    active === "Ftsdatatable"
                                      ? " p-2 bg-white rounded-3 text-danger"
                                      : "text-white"
                                  } p-2 hover  `}
                                  onClick={() => setActive("Ftsdatatable")}
                                >
                                  <Icon
                                    icon="gridicons:multiple-users"
                                    className="mb-1 me-2"
                                    width="20"
                                    height="20"
                                  />
                                  Ftsdatatable
                                </p>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h5 className="ftsuserdata mt-2">FTS userdata</h5>
              <Form.Group className="mb-3">
                <Form.Label className="mt-2">Name :</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  isInvalid={!!errors.name}
                />
                {<p className="formik">{errors.name}</p>}
                <Form.Label className="mt-2">E-mail :</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                {<p className="formik">{errors.email}</p>}
                <Form.Label className="mt-2">PhoneNumber :</Form.Label>
                <Form.Control
                  type="number"
                  name="phone_number"
                  value={values.phone_number}
                  onChange={handleChange}
                  isInvalid={!!errors.phone_number}
                />
                {<p className="formik">{errors.phone_number}</p>}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="mt-2">Message :</Form.Label>
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
              <div className=" gap-2 d-flex justify-content-end">
                <Button
                  onClick={() => navigate("/Fts-data-table")}
                  className=" btn-outline-dark bg-white text-black "
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="buttoncolor text-white border"
                  // onClick={() => handleSubmit()}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Ftsuserdata;
