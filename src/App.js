import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes , Switch} from 'react-router-dom'
import './App.css';
import Home from './Home';
import { Navigate } from 'react-router-dom';
import Templates from './Templates';
import About from './About';
import Login from './Login';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import Triangle from './Triangle';
import Circle from './Circle';
import Message from './Message';
import Star from './Star';
import Box from './Box';
import Ellipse from './Ellipse';
import Upload from './Components/Uploads';

//import Templates from './Templates';
function App() {
  return (
    <Router>
      
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/templates" element={<Templates/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/login" element={<Circle/>}/>
          <Route exact path="/signupform" element={<SignUpForm/>}/>
          <Route exact path="/signinform" element={<SignInForm/>}/>
          <Route exact path="/trangle" elements={<Triangle/>}/>
          <Route exact path="/circle" element={<Circle/>}/>
          <Route exact path="/triangle" element={<Triangle/>}/>
          <Route exact path="/message" element={<Message/>}/>
          <Route exact path="/star" element={<Star/>}/>
          <Route exact path="/box" element={<Box/>}/>
          <Route exact path="/ellipse" element={<Ellipse/>}/>
          <Route exact path="/uploads" element={<Upload/>}/>
        </Routes>
      
    </Router>
  );
}

export default App;
