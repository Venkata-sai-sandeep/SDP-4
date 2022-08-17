//import React from "react";
import './App.css'
import './index.css'
import './Triangle.css'
import './Style.css'
import { Link } from "react-router-dom";
import {
  FacebookLoginButton,
  InstagramLoginButton
} from "react-social-login-buttons";

import React, { Component } from "react"; 
 
class DisplayImage extends Component { 

  constructor(props) { 
    super(props); 
    this.state = { 
      image: null 
    }; 
 
    this.onImageChange = this.onImageChange.bind(this); 
  } 
 
  onImageChange = event => { 
    if (event.target.files && event.target.files[0]) { 
      let img = event.target.files[0]; 
      this.setState({ 
        image: URL.createObjectURL(img) 
      }); 
    } 
    else{
    this.setState({ 
        image:event.target.value 
     })
    }
  }; 



  render() { 
    return ( 



        
        <body>
      <div class="a"> 
        <div>
            <a class="button" href="/templates">Back</a> 
          <div > 
            <h1>Select Image</h1> 
            
            <input  type="file" name="myImage" onChange={this.onImageChange} />
            <br></br> 
            <br></br>
            <p1>Upload via URL</p1>
            <input type="text" id="kinguu"  name="myImage2" value={this.state.value} 
        onChange={this.onImageChange} />
          </div> 
           
          <img src={this.state.image} class="box clipCircle" id="bx"/> 
        </div> 
      </div> 
      <div className="socialMediaButtons">
            <div className="facebookButton">
              <FacebookLoginButton onClick={() => alert("")
            
            
            } />
            </div>

            <div className="instagramButton">
              <InstagramLoginButton onClick={() => alert("Page is not yet ready")} />
            </div>
          </div>s


      </body>
    ); 
  } 
} 
export default DisplayImage;