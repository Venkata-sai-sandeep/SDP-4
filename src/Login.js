import './App.css'
import './Home.css'
import React from 'react';
import './Templates';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
//import App from "./App";
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import { Redirect } from 'react-router';
//import { Link } from 'react-router-dom';
import './Login.css'
function Login()  {
    return(
        <div>
                <div class="topnav">
                <a  href="/">Home</a>
                <a href="/templates">Templates</a>
                <a href="#about">About</a>
                
            </div>

            <form >
                <input type="text" placeholder='email id'></input><br></br>
                <input type="password" placeholder='password'></input><br></br>
                <input type="submit"placeholder='submit' ></input>
                <a href="/signupform">New User ..! Click here to Register</a>
            </form>
            
        </div>
        

            

    );
}



export default Login;