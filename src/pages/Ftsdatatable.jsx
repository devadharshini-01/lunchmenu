import { useEffect, useState } from "react";
import Sidebar from "../layout/Sidebar";
import Table from "react-bootstrap/Table";
import { Icon } from "@iconify/react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Model from "./Model";
import ReactPaginate from "react-paginate";
import Searchbar from "../layout/Searchbar";
import { Spinner } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

const Ftsdatatable = ({ active, setActive }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [show, setShow] = useState(false);
  const [view, setView] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [deleteInfo, setDeleteInfo] = useState();
  const [showdata, setShowData] = useState();
  const [data, setdata] = useState([]);
  const [selected, setSelected] = useState(1);

  const baseurl = process.env.REACT_APP_BASEURL;
  const deleteurl = process.env.REACT_APP_DELETEURL;
  const geturl = process.env.REACT_APP_GETURL;
  const handlegeturl = process.env.REACT_APP_HANDLEGETURL;
  const paginategeturl = process.env.REACT_APP_PAGINATEGETURL;
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    setSpinner(true);
    axios
      .get(`${baseurl}admin/testing/getallusers?page=1&size=5`)
      .then((response) => {
        setSpinner(false);

        console.log(response, "********");
        setdata(response?.data?.response?.paginationOutput);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleDelete = () => {
    toast.success("Deleted successfully!");
    console.log(id, "**********************");
    axios
      .delete(`${deleteurl}admin/testing/deleteUserById?id=${deleteInfo}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setShow(false);
        axios
          .get(
            `${geturl} admin/testing/getallusers?page=1&size=5`,

            { headers: { Authorization: `Bearer ${token}` } }
          )
          .then((response) => {
            setdata(response?.data?.response?.paginationOutput);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch();
  };
  const handleShow = (id) => {
    axios
      .get(`${handlegeturl}admin/testing/getUserById?id=${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setShowData(response.data.response.user);
      });
  };

  console.log(deleteInfo, "delete");
  const handlePageClick = (event) => {
    console.log(event, "event");
    axios
      .get(
        ` ${paginategeturl}admin/testing/getallusers?page=${
          event.selected + 1
        }&size=5`,

        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        setSelected(event.selected + 1);
        setdata(response?.data?.response?.paginationOutput);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
    <div class="overflow-hidden">
    <div className="row">
        <div className="col-2 ">
          <Sidebar active={active} setActive={setActive} />
        </div>
        <div className="col-10">
          {/* {spinner ? spinner : "Loading..."} */}
          <div className="bg-white mt-4 p-3 ">
            <div className="col-12">
              <div className=" d-flex justify-content-end ">
                <button
                  className="btn add-btn-color text-white mt-2 mb-2 "
                  onClick={() => navigate("/Fts-user-data")}
                  type="button"
                >
                  Add
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-9">
                <p className="customerdetail">CUSTOMER DETAILS</p>
              </div>
              <div className="col-3 mb-2">
                <Searchbar />
              </div>
            </div>
            <Table responsive>
              <thead>
                <tr>
                  <th className="tableheading">S.NO</th>
                  <th className="tableheading"> NAME</th>
                  <th className="tableheading">E-MAIL</th>
                  <th className="tableheading">PHONENUMBER</th>
                  <th className="tableheading">MESSAGE</th>
                  <th className="tableheading">CREATED AT</th>
                  <th className="tableheading"> UPDATED AT</th>
                  <th className="tableheading text-center"> ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {data?.results?.length ? (
                  data?.results?.map((val, i) => (
                    <tr key={i}>
                      <th scope="row">{(selected - 1) * 5 + i + 1}</th>

                      <td className="textsize">{val.name}</td>

                      <td className="textsize">{val.email}</td>
                      <td className="textsize">{val.phone_number}</td>
                      <td className="textsize">{val.message}</td>
                      <td className="textsize">{val.createdAt}</td>
                      <td className="textsize">{val.updatedAt}</td>

                      <td>
                        <div className="row d-flex  justify-content-center  ">
                          <Icon
                            icon="tabler:edit"
                            width="30"
                            height="30"
                            className="w-25 label "
                            onClick={() => navigate(`/fts-user-data/${val.id}`)}
                          />
                          <Icon
                            icon="pajamas:remove"
                            width="30"
                            height="30"
                            className="w-25 label "
                            onClick={() => {
                              setShow(true);
                              setDeleteInfo(val.id);
                            }}
                          />
                          <Icon
                            icon="zondicons:view-show"
                            width="30"
                            height="30"
                            className="w-25 label "
                            // onClick={() => {setView(true);
                            // setShowData(val);}}
                            onClick={() => {
                              setView(true);
                              handleShow(val.id);
                            }}
                          />
                        </div>
                      </td>
                    </tr>
                  ))
                ) : spinner ? (
                  <Spinner
                    animation="border"
                    role="status"
                    className=" spinner "
                  >
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                ) : (
                  "no data found"
                )}
              </tbody>
            </Table>
            <div className="row d-flex justify-content-end w-100 ms-1 mt-3">
              <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                pageCount={data && data.totalPages}
                onPageChange={handlePageClick}
                pageRangeDisplayed={10}
                containerClassName={"pagination "}
                pageClassName={"page-item px-0"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item px-0"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item px-0"}
                nextLinkClassName={"page-link"}
                activeClassName={"active"}
              />
            </div>
          <ToastContainer/>
          
          </div>
        </div>
      </div>
    </div>
    
      <Model
        show={show}
        title={"Delete User"}
        body={<p className="model">Are you sure you want to delete this?</p>}
        button1Value={"Delete"}
        button1Click={handleDelete}
        button2Click={() => setShow(false)}
        closeButton={() => setShow(false)}
        button2Value={"Cancel"}
      />
      {console.log(show, "show")}
      {console.log(view, "view")}
      <Model
        show={view}
        title={"User Detail"}
        body={
          <p>
            <span className=" model">Name:</span>
            <br></br>
            {showdata?.name}
            <br></br>
            <span className="model">Email:</span>
            <br></br>
            {showdata?.email}
            <br></br>
            <span className="model">Phone_number:</span>
            <br></br>
            {showdata?.phone_number} <br></br>
            <span className="model">Message:</span>
            <br></br>
            {showdata?.message}
            <br></br>
            <span className="model">CreatedAt:</span>
            <br></br> {showdata?.createdAt}
            <br></br>
            <span className="model">UpdatedAt:</span>
            <br></br> {showdata?.updatedAt}
          </p>
        }
        button1Value={"Ok"}
        button1Click={() => setView(false)}
        // button2Click={() => setView(false)}
        closeButton={() => setView(false)}
        // button2Value={"cancel"}
      />
    </>
  );
};
export default Ftsdatatable;
