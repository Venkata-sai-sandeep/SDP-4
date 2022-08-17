import './App.css'
import './Home.css'
import React from 'react';
import './Templates'; 


function Home() {

   
    
    
    return(
        <html>
                <div class="topnav">
                <a class="active" href="#home">Home</a>
                <a href="/templates">Templates</a>
                <a href="/about">About</a>
               
            </div>

            <body class="bg">

            <div class="gallery"> 
            <div class="gallery-container"> 
                <img class="gallery-item gallery-item-1" src='https://sdpimg1.s3.us-east-2.amazonaws.com/img+1.jpg' data-index="1" alt="" />
                <img class="gallery-item gallery-item-2" src='https://sdpimg1.s3.us-east-2.amazonaws.com/img+2.jpg' data-index="2" alt="" />
                <img class="gallery-item gallery-item-3" src='https://sdpimg1.s3.us-east-2.amazonaws.com/img+3.jpg' data-index="3" alt="" />
                <img class="gallery-item gallery-item-4" src='https://sdpimg1.s3.us-east-2.amazonaws.com/img+4.jpg' data-index="4" alt="" />
                <img class="gallery-item gallery-item-5" src='https://sdpimg1.s3.us-east-2.amazonaws.com/img+5.jpg' data-index="5" alt="" />


            </div>
            </div>

            
            </body>
            <div class="namecss">
                <h1><h1>Gallery Automation</h1></h1>
            </div>
        </html>

            

    );
}



         
  

export default Home;