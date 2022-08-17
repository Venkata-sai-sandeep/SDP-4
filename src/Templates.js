import './App.css'
import './Style.css'
import React from 'react';
function Templates() {
    return(
        <header >
             <div class="topnav">
                <a href="/">Home</a>
                <a  class="active" href="#">Templates</a>
                <a href="/about">About</a>
                
            </div>

            
        <div class="bg">

        <div class="row">
        <div class="column">
        <div class="box1">
            <div class="container">
            <div class="image">
            <div class="boxMain clipPolygon"></div>
            <div class="middle">
                <div class="text"><a href="/triangle" >TRY</a></div>
            </div>
            </div>
            </div>
            </div>
            </div>
          

            <div class="column">
            <div class="box2">
            <div class="container">
            <div class="image">
            <div class="boxMain clipCircle"></div>
            <div class="middle">
                <div class="text"><a href="/circle" >TRY</a></div>
            </div>
            </div>
            </div>
            </div>
            </div>
          

            <div class="column">
            <div class="box3">
            <div class="container">
            <div class="image">
            <div class="boxMain clipEllipse"></div>
            <div class="middle">
                <div class="text"><a href="/ellipse" >TRY</a></div>
            </div>
            </div>
            </div></div>
            </div>
           
            <div class="column">
            <div class="box4">
            <div class="container">
            <div class="image">
            <div class="boxMain clipInset"></div>
            <div class="middle">
                <div class="text"><a href="/box" >TRY</a></div>
            </div>
            </div>
            </div>
            </div>
            </div>
            

            <div class="column">
            <div class="box5">
            <div class="container">
              <div class="image">
            <div class="boxMain message"></div>
            <div class="middle">
                <div class="text"><a href="message" >TRY</a></div>
            </div>
            </div>
            </div>
            </div>
            </div>
            
            

            <div class="column">
            <div class="box6">
            <div class="container">
            <div class="image">
            <div class="boxMain star"></div>
            <div class="middle">
                <div class="text"><a href="/star" >TRY</a></div>
            </div>
            </div>
            </div>
            </div>
            </div>

        </div>
        
        </div>
      </header>
    );
    
}

export default Templates;