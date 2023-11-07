import logo from "../image/Frame 55481 .png";
import picture from "../image/pngtree-avatar-bussinesman-man-profile-icon-vector-illustration-png-image_7268049.png";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary p-0">
      <div class="container-fluid red">
        <div className="row">
          <div className="col-6">
            <img className="git" src={logo}></img>
          </div>
        </div>
        <div className="col-6 text-end pe-4">
          <img className="width " src={picture}></img>
        </div>
      </div>
    </nav>
  );
};
export default Header;
