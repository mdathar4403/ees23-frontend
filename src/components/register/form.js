import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import bgImg from './Characters1.png'
import { useForm } from 'react-hook-form';
import "./form.css"
import { GoogleLogin } from 'react-google-login';
import { useCallback } from 'react';
import axios from 'axios';
import { gapi } from "gapi-script"
import logo from '../images/eeslogored.png'
import { useNavigate } from "react-router-dom";
import AnimatedButton from '../../animated button/AnimatedButton';


const clientId = "868476725043-56q2l17h7bf2a1fpvkqp04t5br7mti4p.apps.googleusercontent.com"
const scope = 'https://www.googleapis.com/auth/user.birthday.read https://www.googleapis.com/auth/user.addresses.read https://www.googleapis.com/auth/user.organization.read'

export default function Form() {
  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = data => console.log(data);
  const [isGSignedIn, setisGSignedIn] = useState(0);

  const profileData = window.sessionStorage.getItem("profileData");
  const token = window.sessionStorage.getItem("tokenId");
  const postData = (profdata) => {
    console.log(profdata)
    const mobile = Number(profdata.phone_number);
    if (isNaN(mobile)) {
      console.log("wrong number")
      return;
    }
    if (profdata.Password !== profdata.ConfirmPassword) {
      console.log("Password is not equal to confirm password")
      return;
    }

    const header = {
      "Authorization": token
    }
    const data = profdata;
    axios.post("http://eeswebsite.herokuapp.com/auth/google-login", header, data).then((resp) => {
      console.log(resp);
    });
    window.sessionStorage.setItem("registered_email:" + profdata.email, 1);
    navigate("/");
  }
  const onGoogleLoginSuccess = (res) => {
    console.log("SUCCESS!!! Current User: ", res);
    window.sessionStorage.setItem(
      "profileData",
      JSON.stringify(res.profileObj)
    );
    window.sessionStorage.setItem("tokenId", res.tokenId);
    setisGSignedIn(1);
  };

  const onGoogleLoginFailure = (res) => {
    console.log("FAILURE!!! res: ", res);
  };


  useEffect(() => {

  }, [isGSignedIn]);

  return (
    <>
      <div className='bg'>
      <div class="star-field">
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        {isGSignedIn === 0 && (
          <>
            <div className="g-sign-in-button">
              <div className="register-button">
                <GoogleLogin
                  accessType="online"
                  disabled={false}
                  client_id={clientId} // your Google app client ID
                  buttonText="Sign in with Google"
                  onSuccess={onGoogleLoginSuccess} // perform your user logic here
                  onFailure={onGoogleLoginFailure} // handle errors here
                  cookiePolicy={"single-host-origin"}
                  isSignedIn={true}
                  scope={scope}
                />
              </div>
            </div>
          </>
        )}

        {isGSignedIn == 1 && (
          <div className="refisterForm">
            <div className="register">
              <div className="col-1">
                <h1>
                  <strong className="register-heading">Register</strong>
                </h1>

                <form
                  id="form"
                  className="flex flex-col"
                  onSubmit={handleSubmit((data) => postData(data))}
                >

                  <input
                    type="text"
                    {...register("name")}
                    value={profileData.givenName}
                    placeholder={profileData.givenName}
                    readOnly
                  />
                  
                  <input
                    type="text"
                    {...register("email")}
                    value={profileData.email}
                    placeholder={profileData.email}
                    readOnly
                  />
                  <input
                    type="text"
                    {...register("phone_number", { valueAsNumber: true })}
                    placeholder="Whatsapp Number"
                    required
                  />
                  <input
                    type="text"
                    {...register("college_name")}
                    placeholder="College/Institute"
                    required
                  />
                  <input
                    list="years"
                    {...register("year")}
                    placeholder="Year"
                    required
                  />
                  <datalist id="years">
                    <option value="ONE">ONE</option>
                    <option value="TWO">TWO</option>
                    <option value="THIRD">Third</option>
                    <option value="FOURTH">Fourth</option>
                    <option value="FIFTH">Fifth</option>
                  </datalist>
                  <input
                    type="text"
                    {...register("branch")}
                    placeholder="Branch"
                    required
                  />
                  {errors.mobile?.type === "required" &&
                    "Some Fields are missing!!!"}
                  {errors.college_name?.type === "required" &&
                    "College Name is required"}
                  {errors.mobile?.type === "valueAsNumber" &&
                    "Enter correct mobile Number"}
                  {errors.year?.type === "required" && "Year is required"}
                  {errors.branch?.type === "required" && "Branch is required"}
                  {errors.Password?.type === "required" && "password is required"}
                  {errors.ConfirmPassword?.type === "required" &&
                    "confirm password is required"}
                  <AnimatedButton
                    className="signinbtn"
                    text={"Register"}
                  />
                </form>
              </div>
              <div className="col-2">
                <img className="formimg" src={logo} alt="" />
              </div>
            </div>
          </div>
        
        )}
        </div>
        </div>
      </>
      );
}
