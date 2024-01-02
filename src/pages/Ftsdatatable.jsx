import { useEffect, useState } from "react";
import Sidebar from "../layout/Sidebar";
import Table from "react-bootstrap/Table";
import { Icon } from "@iconify/react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Model from "./Model";

const Ftsdatatable = ({ active, setActive }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setadata] = useState([]);
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    axios
      .get(
        " https://fts-backend.onrender.com/admin/testing/getallusers?page=1&size=5",

        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        console.log(response, "********");
        setadata(response?.data?.response?.paginationOutput?.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  axios
    .delete(
      `https://fts-backend.onrender.com/admin/testing/deleteUserById?id=${id}`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
    .then((res) => {})
    .catch();

  return (
    <>
      <div className="row">
        <div className="col-2 ">
          <Sidebar active={active} setActive={setActive} />
        </div>
        <div className="col-10">
          <Table className="mt-4">
            <thead>
              <tr>
                <th className="all">S.NO</th>
                <th className="all"> NAME</th>
                <th className="all">E-MAIL</th>
                <th className="all">PHONENUMBER</th>
                <th className="all">MESSAGE</th>
                <th className="all">CREATED AT</th>
                <th className="all"> UPDATE AT</th>
                <th className="all"> ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {data.map((val, i) => (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>

                  <td className="idea">{val.name}</td>

                  <td className="idea">{val.email}</td>
                  <td className="idea">{val.phone_number}</td>
                  <td className="idea">{val.message}</td>
                  <td className="idea">{val.createdAt}</td>
                  <td className="idea">{val.updatedAt}</td>

                  <td>
                    <div className="row d-flex  justify-content-center  ">
                      <Icon
                        icon="tabler:edit"
                        width="18"
                        height="18"
                        className="w-25 label "
                        onClick={() => navigate(`/fts-user-data/${val.id}`)}
                      />
                      <Icon
                        icon="pajamas:remove"
                        width="18"
                        height="18"
                        className="w-25 label "
                        onClick={() => setShow(true)}
                      />

                      <Icon
                        icon="zondicons:view-show"
                        width="18"
                        height="18"
                        className="w-25 label "
                        // onClick={()=>setView(true)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
      <Model
        show={show}
        title={"deleteModel"}
        body={"Are you sure you want to delete?"}
        button1Value={"delete"}
        closeButton={() => setShow(false)}
        button2Value={"cancel"}
      />
      {/* <Model  view={view} title={"showModel"} body={"name,email,phoneNumber,message"} button1Value={"ok"} closeButton={()=>setView(false)} button2Value={"cancel"}/> */}
    </>
  );
};
export default Ftsdatatable;
