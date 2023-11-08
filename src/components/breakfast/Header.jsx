import logo from "../image/Frame 55481 .png";
import picture from "../image/pngtree-avatar-bussinesman-man-profile-icon-vector-illustration-png-image_7268049.png";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <hr></hr>
    <div class="container-fluid">
  <img className="git red" src={logo}></img>
   
        <form className="d-flex justify-content-end" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
       
        </form>
        <img className="width" src={picture}></img>
      </div>
   
  </nav>
  );
};
export default Header;
