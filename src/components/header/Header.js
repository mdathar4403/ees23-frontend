import './Header.css';
// import { Register } from './Register';
// import './Register.css';
import { GoogleLogin } from "react-google-login";
import { useState } from "react";


function Header() {
    const [isShown, setIsShown] = useState(false);
    const handleClick = event => {
        setIsShown(current => !current);
        console.log("button clicked");
    }

    return (
        <>
            <div className='header-main-container'>
                <div className="header-empty-div-1"></div>
                <div className='header-empty-div-2'></div>
                <div className='header-element-container'>
                    <div className='header-empty-div-3'></div>
                    <div className='header-empty-div-4'></div>
                    <div className='header-EES-element-container'>ELECTRONICS ENGINEERING SOCIETY</div>
                    <div className='header-button-container' onClick={handleClick}>REGISTER</div>
                </div>
            </div>
            {/* {isShown && <Register />} */}
        </>
    );
}

export default Header;
