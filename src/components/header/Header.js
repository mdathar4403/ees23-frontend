import './Header.css';
// import { Register } from './Register';
// import './Register.css';
import { GoogleLogin } from "react-google-login";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const clientId = process.env.REACT_APP_CLIENT_ID;
const scope =
  "https://www.googleapis.com/auth/user.birthday.read https://www.googleapis.com/auth/user.addresses.read https://www.googleapis.com/auth/user.organization.read";

function Header() {
  const navigate = useNavigate();
  const [isShown, setIsShown] = useState(window);
  const handleClick = event => {
    navigate("/register",
    );
  }
  return (
    <>
      <div className="header-main-container">
        <div className="header-empty-div-1"></div>
        <div className="header-empty-div-2"></div>
        
        <div className="header-element-container">
          <div className="header-empty-div-3"></div>
          <div className="header-empty-div-4"></div>
          <div className="header-EES-element-container">
            ELECTRONICS ENGINEERING SOCIETY
          </div>
          <div className="header-udyamfest-container">
            <a className="header-udyamfest-container-link" href="https://udyamfest.com">udyamfest</a>
          </div>
          <div className="header-button-container" onClick={handleClick}>
            REGISTER
          </div>

        </div>
      </div>
      <div className="header-udyamfest-container-mobile">
          <a className="header-udyamfest-container-link-mobile" href="https://udyamfest.com">udyamfest</a>
        </div>
    </>
  );
}

export default Header;
