import { useEffect, useState } from "react";
import Sidebar from "../layout/Sidebar";
import Table from "react-bootstrap/Table";
import { Icon } from "@iconify/react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Model from "./Model";
import ReactPaginate from "react-paginate";

const Ftsdatatable = ({ active, setActive }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [show, setShow] = useState(false);
  const [view, setView] = useState(false);

  const [deleteInfo, setDeleteInfo] = useState();
  const[showdata,setShowData]=useState();

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const [data, setdata] = useState([]);
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    axios
      .get(
        " https://fts-backend.onrender.com/admin/testing/getallusers?page=1&size=5",

        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        console.log(response, "********");
        setdata(response?.data?.response?.paginationOutput?.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(deleteInfo,"hgg");
  console.log(showdata,"showdata");
  const handleDelete = () => {
    console.log(id,"**********************");
    axios
      .delete(
        `https://fts-backend.onrender.com/admin/testing/deleteUserById?id=${deleteInfo}`,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        setShow(false);
        axios
          .get(
            " https://fts-backend.onrender.com/admin/testing/getallusers?page=1&size=5",

            { headers: { Authorization: `Bearer ${token}` } }
          )
          .then((response) => {
            setdata(response?.data?.response?.paginationOutput?.results);
          })
          .catch((err) => {
            console.log(err);
          });
      })

      .catch();
  };
const handleShow=(id)=>{
  axios.get(`https://fts-backend.onrender.com/admin/testing/getUserById?id=${id}`,
  { headers: { Authorization: `Bearer ${token}` } }
  )
  .then((response)=>{
    setShowData(response.data.response.user);
  
  })
}



  // console.log(deleteInfo, "delete");
  // const handlePageClick = () => {
    
  // };
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
                        onClick={() => {
                          setShow(true);
                          setDeleteInfo(val.id);
                        }}
                      />

                      <Icon
                        icon="zondicons:view-show"
                        width="18"
                        height="18"
                        className="w-25 label "
                        // onClick={() => {setView(true);
                        // setShowData(val);}}
                             onClick={() => {setView(true);
                              handleShow(val.id)
                              // setShowData(val.id);
                         }}

                      />
                    </div>
                  </td>
                </tr>
              ))}
               {/* <div className="row d-flex justify-content-end w-100 ">
                  <ReactPaginate
                    previousLabel={"previous"}
                    nextLabel={"next"}
                    pageCount={4}
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
                </div> */}
            </tbody>
         
          </Table>
         
        </div>
      </div>
      <Model
        show={show}
        title={"deleteModel"}
        body={"Are you sure you want to delete?"}
        button1Value={"delete"}
        button1Click={handleDelete}
        button2Click={() => setShow(false)}
        closeButton={() => setShow(false)}
        button2Value={"cancel"}
      />
      <Model
        show={view}
        title={"showModel"}
   
       body={<p>name:{showdata?.name} email:{showdata?.email} phone_number:{showdata?.phone_number} message:{showdata?.message} createdAt:{showdata?.createdAt} updatedAt:{showdata?.updatedAt}</p> }
      
        button1Value={"ok"}
        button1Click={() => setView(false)}
        button2Click={() => setView(false)}
        closeButton={() => setView(false)}
        button2Value={"cancel"}
      />
    </>
  );
};
export default Ftsdatatable;
