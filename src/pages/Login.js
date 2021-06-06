import React, { useState } from "react";
import "./Login.css"
import {Container,Row,Col} from "reactstrap"
import { auth } from "../firebase";
import { useHistory,Link } from "react-router-dom";

export default function SignIn() 
{
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (e) => {
    e.preventDefault();
    //login logic
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged in ,redirect to homepage
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

    return(
      <>    
      <Row>
        <Col lg={8}>
          <video id="videoBG" poster="https://wallpapercave.com/wp/wp1867426.jpg" autoplay muted loop>
          </video>
        </Col>
        <Col lg={4}>
        <div className=" login ">
      <div id="login-page" class="row">
        <div class="col s12">
          <form class="login-form">
            <div class="row">
              <div class="input-field col s12 center">
                <img src="data:image/png;base64,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" alt="LOGO" style={{height:"80px"}} class="circle responsive-img valign profile-image-login"/>
                <h3 class="center login-form-text">Sign In </h3>
              </div>
            </div>
            <div class="row margin">
              <div class="input-field col s12">
              <i class="material-icons prefix">mail_outline</i>
                <input id="email" type="text" name='email'
                label='Email'
                type='email'
                id='email'
                value={email}
                onChange={(event) => setEmail(event. target.value)}
                />
                <label for="email" class="center-align c">Email</label>
              </div>
            </div>
            <div class="row margin">
              <div class="input-field col s12">
              <i class="material-icons prefix">lock_outline</i>
                <input id="password" type="password" name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                value={password}
                onChange={(event) => setPassword(event. target.value)}/>
                <label for="password">Password</label>
              </div>
            </div>
 
            <div class="row">
              <div class="input-field col s12">
                <button onClick={login} class="btn col s12">Login</button>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s6 m6 l6">
                <p class="margin" style={{fontWeight:"600"}}><Link to="/register" style={{textDecoration:"none",fontWeight:"700"}}>Don't have an account? Sign Up</Link></p>
              </div>         
            </div>

          </form>
        </div>
      </div>

    </div>
          
        </Col>
      </Row>
      
</>
    
    
  );
}
