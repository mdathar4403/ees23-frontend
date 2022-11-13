import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import bgImg from './Characters1.png'
import { useForm } from 'react-hook-form';
import "./form.css"
import { GoogleLogin } from 'react-google-login';
import { useCallback } from 'react';
// import { post } from 'utils/sdk';
import axios from 'axios';
import {gapi} from "gapi-script"
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import logo from './ees_logo.png'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styled from 'styled-components';
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem';

const clientId = "868476725043-56q2l17h7bf2a1fpvkqp04t5br7mti4p.apps.googleusercontent.com"
const scope='https://www.googleapis.com/auth/user.birthday.read https://www.googleapis.com/auth/user.addresses.read https://www.googleapis.com/auth/user.organization.read'

const years = [
    {
      value: '1st',
      label: '1st',
    },
    {
      value: '2nd',
      label: '2nd',
    },
    {
      value: '3rd',
      label: '3rd',
    },
    {
      value: '4th',
      label: '4th',
    },
    {
      value: '5th',
      label: '5th',
    },
  ];

  const WhiteBorderTextField = styled(TextField)`
  & label.Mui-focused {
    color: white;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: white;
    }
  }
`;


export default function Form() {
    const darkTheme = createTheme({
        palette: {
          mode: "dark"
        }
      });

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);

    const {state} = useLocation();
    const { profileData, token } = state;

    // const profileData = window.sessionStorage.getItem("profileData");
    // const token = window.sessionStorage.getItem("tokenId");
    console.log(profileData);

    const postData = (profdata)=> {
        console.log(profdata)
        const mobile = Number(profdata.phone_number);
        if (isNaN(mobile)){
            console.log("wrong number")
            return;
        }
        if (profdata.Password !== profdata.ConfirmPassword){
            console.log("Password is not equal to confirm password")
            return;
        }

        const header= {
            "Authorization": token
        }
        const data = profdata;
        axios.post("http://eeswebsite.herokuapp.com/auth/google-login", header, data).then((resp)=>{
            console.log(resp);
        });
    }
    
  return (
    <section className="registerContainer">
    <div className='App'>
      <ThemeProvider theme={darkTheme}>
        <Box className='form-background' >
          <Grid
            container
            spacing={0}
            alignItems="center"
            justifyContent="center"
            style={{ height: "75vh", width: "60vw" }}
          >
            <Grid item xs={5}>
              <Stack spacing={1.5}>
                <strong className='heading' >Register.</strong>
                <WhiteBorderTextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                />

                <WhiteBorderTextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                />
                <WhiteBorderTextField
                  id="outlined-basic"
                  label="Whatsapp Number"
                  variant="outlined"
                />
                <WhiteBorderTextField
                  id="outlined-basic"
                  label="College"
                  variant="outlined"
                />
                <WhiteBorderTextField
                  id="outlined-select"
                  select
                  label="Year"
                  variant="outlined"
                >
                  {years.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </WhiteBorderTextField>
                <WhiteBorderTextField
                  id="outlined-basic"
                  label="Branch"
                  variant="outlined"
                />
              </Stack>
            </Grid>
            <Grid item xs={5}>
              <Stack spacing={2}>
                <img src={logo} alt="Udyam" />
              </Stack>
            </Grid>
            <Grid item xs={4} className="button-container" style={{ marginBlockEnd: "1rem" }}>
              <Button variant="contained" sx={{
                color: '#2C3339', backgroundColor: 'white', ':hover': {
                  backgroundColor: 'white',
                }
              }}>Register</Button>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </div>
        {/* <div className="register">
            <div className="col-1">
                <h2>Sign In</h2> */}
                {/* <span>register and enjoy the service</span> */}

                {/* <form id='form' className='flex flex-col' onSubmit={handleSubmit((data) => postData(data))}>
                    <input type="text" {...register("name")} value={profileData.givenName} placeholder={profileData.givenName} readOnly/>
                    <input type="text" {...register("email")} value={profileData.email} placeholder={profileData.email} readOnly/>
                    <input type="text" {...register("phone_number", { valueAsNumber: true})} placeholder='Whatsapp Number' required/>
                    <input type="text" {...register("college_name")} placeholder='College/Institute' required/>
                    <input  list="years" {...register("year")} placeholder='Year' required/>
                    <datalist id="years">
                        <option value="ONE">ONE</option>
                        <option value="TWO">TWO</option> */}
                        {/* <option value="3">Third</option>
                        <option value="4">Fourth</option>
                        <option value="5">Fifth</option> */}
                    {/* </datalist> */}
                    {/* <select name="year" {...register("year")} placeholder='Year' required>
                        <option value="ONE">ONE</option>
                        <option value="TWO">TWO</option>
                    </select> */}
                    {/* <input type="text" {...register("branch")} placeholder='Branch' required/>
                    <input type="password" {...register("Password")} placeholder='Password' required/>
                    <input type="password" {...register("ConfirmPassword")} placeholder='Confirm Password' required/> */}
                    {/* {errors.mobile?.type === "required" && "Some Fields are missing!!!"} */}
                    {/* {errors.college_name?.type === "required" && "College Name is required"} */}
                    {/* {errors.mobile?.type === "valueAsNumber" && "Enter correct mobile Number"} */}
                    {/* {errors.year?.type === "required" && "Year is required"} */}
                    {/* {errors.branch?.type === "required" && "Branch is required"} */}
                    {/* {errors.Password?.type === "required" && "password is required"} */}
                    {/* {errors.ConfirmPassword?.type === "required" && "confirm password is required"} */}
                    {/* <button className='signinbtn'>Sign In</button>
                </form>

            </div>
            <div className="col-2">
                <img className="formimg" src={bgImg} alt="" />
            </div>
        </div> */}

    </section>
  )
}
