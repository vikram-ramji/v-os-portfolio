import DateTime from "./DateTime";
import "./nav.scss";

const Nav = () => {
  return (
    <nav>
      <div className="left">
        <div className="nav-item apple-icon">
          <img src="./nav-icons/apple.svg" alt="" />
        </div>
        <div className="nav-item">
          <p>Vikram Ramji Iyer</p>
        </div>
        <div className="nav-item">
          <p>File</p>
        </div>
        <div className="nav-item">
          <p>Window</p>
        </div>
        <div className="nav-item">
          <p>Terminal</p>
        </div>
      </div>
      <div className="right">
        <div className="nav-item wifi-icon">
          <img src="./nav-icons/wifi.svg" alt="" />
        </div>
        <div className="nav-item">
          <DateTime />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
