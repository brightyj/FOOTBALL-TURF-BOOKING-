import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';
import LoginBox from '../Components/Common/LoginBox';
import './Login.css'
import SignUpBox from '../Components/Common/SignUpBox';
const Login=()=> {

  const[boxName,setBoxName]=useState('signUp')
 
  const handleSignUp=()=>
  {
    setBoxName('signUp')
  }
  
  const handleLogin=()=>
  {
    setBoxName('login')
  }
  
  return (
    <div className='background-radial-gradient login-page' style={{minHeight:'100 vh'}}>
<div className="background-image">
    <MDBContainer fluid className='p-4 background-radial-gradient min-vh-100'>

      <MDBRow>

        <MDBCol md='6' className='p1 text-center  d-flex flex-column '>

          <h1 className="my-5" >
            FRIENDS.FAMILY.FUN.FOOTBALL <br />
            <span style={{color: 'hsl(218, 81%, 75%)'}}>BOOK YOUR SLOTS SOON</span>
          </h1>
          <p className='px-3' style={{color: 'hsl(218, 81%, 85%)'}}>
            Most Trusted Football Field Turf And The Fastest Booking App
          </p>
          <div className='but'>
        <button className='b1' onClick={handleSignUp}>signup</button>
        <button className='b2'onClick={handleLogin}>login</button>
        </div>
        </MDBCol>
       {boxName==='login'&& <LoginBox setBoxName={setBoxName}/>}
        {boxName==='signUp'&& <SignUpBox setBoxName={setBoxName}/>}
        
        <MDBCol md="1"></MDBCol>
       </MDBRow>

    </MDBContainer>
    
    </div>
  </div>
  );
}

export default Login;
