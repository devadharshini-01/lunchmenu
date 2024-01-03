import { Icon } from "@iconify/react";
import Sidebor from "../layout/Sidebar";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const UserDataTable = ({active,setActive})=>{

  

  const navigate = useNavigate();
  const [store, setStore] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setStore(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
return(
 <>
     <div className="row">
        <div className="col-2">
        <Sidebor active={active} setActive={setActive}  />
          <Sidebor active={active} setActive={setActive} />
        </div>
        <div className=" col-10 p-2 mb-5 rounded ">
          <div className="bg-white mt-4 p-3 ">
            <div className="row">
              <div className="col-9">
                <p href="#" className=" d-flex justify-content-start   ">
                  <h5 className=" text-secondary me-1 ">UserDataTable </h5>&#10095;
                  <h5 className=" text-secondary me-1 ">UserDataTable </h5>
                  &#10095;
                  <h5 className="text-black ms-1 ">Customer Details</h5>{" "}
                </p>

      </div> 
      <div className="col-3">
              </div>
              <div className="col-3">
                <div className=" d-flex justify-content-end ">
                  <button
                    className="btn commit text-white mb-3 "
                    onClick={() => navigate("/userdata")}
                    type="button"
                  >
                    Add
                  </button>
                </div>
              </div>


              <table class="table">
                <thead>
                  <tr>
                    <th className="all">S.NO</th>
                    <th className="all">CATEGORY</th>
                    <th className="all">TITTLE</th>
                    <th className="all">RATING</th>
                    <th className="all">PRICE</th>
                    <th className="all me-2">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                
                  {Array.isArray(store) &&
                    store.map((val, i) => {
                      return (
                        <tr key={i}>
                          {console.log(val)}
                          <th scope="row">{i + 1}</th>

                          <td className="idea">{val.category}</td>

                          <td className="idea">{val.title}</td>
                          <td className="idea">{val.rating.rate}</td>
                          <td className="idea">{val.price}</td>
                          {/* <td className="idea">{val.message}</td> */}

                          <td>
                            <div className="row d-flex  justify-content-center  ">
                              <Icon
                                icon="tabler:edit"
                                width="30"
                                height="30"
                                className="w-25 label "
                              />
                              <Icon
                                icon="pajamas:remove"
                                width="30"
                                height="30"
                                className="w-25 label "
                              />

                              <Icon
                                icon="zondicons:view-show"
                                width="30"
                                height="30"
                                className="w-25 label "
                              />
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
</>
)
}
export default UserDataTable;