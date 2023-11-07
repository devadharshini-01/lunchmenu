import { Icon } from '@iconify/react';
import Sidebor from './Sidebor';
const Content =()=>{
    return(
        <>
        <Sidebor/>
        <div className="row">
       
            <div className="col-10">
            
            <table class="table">
  <thead>
    <tr>
      <th scope="col">s.no</th>
      <th scope="col">Email</th>
      <th scope="col">Username</th>
      <th scope="col">Mobile Number </th>
      <th scope="col ">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>derhgyfg24@gmail.com</td>
      <td>bnjui</td>
      <td>8967542311</td>
      <td><span><Icon icon="tabler:edit" width="18" height="18" /></span></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>jhgjfysa@gmail.com</td>
      <td>asdx</td>
      <td>9087654321</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >jgbbcrse@gmail.com</td>
      <td>vbhcvf</td>
      <td>4532087642</td>
    </tr>
   
  </tbody>
</table>
            </div>
            </div>
    

        </>
    )
}
export default Content