import Header from "./Header";
import Sidebor from "./Sidebor";
import { Icon } from "@iconify/react";
const Breakfast = () => {
  return (
    <>
      <div className="breakfast">
        <Header />
        <div className="row">
          <div className="col-2">
            <Sidebor />
          </div>
        
          <div className="col-10">
          
          
             



           
              
              <div class="card w-100 mt-3">
  <h5 class="card-header"></h5>
  <div class="card-body ">
     
              <table className="table table-bordered mt-5 ms-2 p-3">
               
               <table className="table ">
                 <thead>
                   <tr>
                     <th scope="col" className="all">s.no</th>
                     <th scope="col " className="all">E-mail</th>
                     <th scope="col" className="all">Username</th>
                     <th scope="col"className="all">Mobile Number </th>
                     <th scope="col " className="all">Actions</th>
                   </tr>
                 </thead>
                 <tbody>
                   <tr>
                     <th scope="row">1</th>
                     <td className="idea">derhgyfg24@gmail.com</td>
                     <td  className="idea">bnjui</td>
                     <td  className="idea">8967542311</td>
                     <td>
                       <div className="row d-flex">
                         
                           <Icon icon="tabler:edit" width="18" height="18" className="w-25 all" />
                           <Icon icon="pajamas:remove" width="18" height="18"className="w-25 all" />
                           <Icon
                             icon="zondicons:view-show"
                             width="20"
                             height="20"className="w-25 all"
                           />
                         
                       </div>
                     </td>
                   </tr>
                   <tr>
                     <th scope="row">2</th>
                     <td  className="idea">jhgjfysa@gmail.com</td>
                     <td  className="idea">asdx</td>
                     <td  className="idea">9087654321</td>
                     <td>
                       <div className="d-flex">
                         <Icon icon="tabler:edit" width="18" height="18" className="w-25 all"/>
                         <Icon icon="pajamas:remove" width="18" height="18" className="w-25 all" />
                         <Icon
                           icon="zondicons:view-show"
                           width="18"
                           height="18" className="w-25 all"
                         />
                       </div>
                     </td>
                   </tr>
                   <tr>
                     <th scope="row">3</th>
                     <td  className="idea">jgbbcrse@gmail.com</td>
                     <td  className="idea">vbhcvf</td>
                     <td  className="idea">4532087642</td>
                     <td>
                       <div className="d-flex">
                         <Icon icon="tabler:edit" width="18" height="18" className="w-25 all" />
                         <Icon icon="pajamas:remove" width="18" height="18" className="w-25 all"  />
                         <Icon
                           icon="zondicons:view-show"
                           width="18"
                           height="18"className="w-25 all" 
                         />
                       </div>
                     </td>
                   </tr>
                 </tbody>
                 <div/>
               </table>
              
             </table>  
  </div>
</div>
             </div> 
 
</div>
             </div>
                  
          
          
          
            
          
       
 
    </>
  );
};

export default Breakfast;
