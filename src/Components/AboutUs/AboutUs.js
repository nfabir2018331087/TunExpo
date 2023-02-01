import React from "react";
import "./AboutUs.css";
import ab from '../../img/about.jpg'

export default function AboutUs() {
  return (
    <div>
      <div className="top-banner d-flex">
        <div className="my-auto mx-auto ">
          <h3 className="big-txt">About Us</h3>
          <small className="text-secondary">Home / About Us</small>
        </div>
      </div>

      <div className="d-flex py-5 container margin10 text-start">
                <div className="w-50 h-100 px-3 justify-between">
                    <h3 className="mb-5 fs-3">Let's Know About <br /> <span className="textAbout">Tune Expo</span></h3>
                    <p className="pe-5">Welcome to our music recommendation app Tune Expo ! We're here to help you discover new and exciting music that you'll love. 
                    Our app uses advanced algorithms to analyze your 
                    listening habits and suggest songs and artists that match your taste.Our app utilizes machine learning 
                    and data analysis to provide you with customized recommendations based on your listening history. 
                    The more you listen and interact with the app, the more accurate your recommendations will become.</p>
                </div>
                <div className="w-50">
                    <img src={ab} alt="" className="s-pic m-0 p-0" width="100%"/>
                </div>
               
              
            </div>
            <div className="container mb-5">
                    <h3 className="textAbout my-3">Our Team</h3>
                    <p>We are a group of music lovers and technology enthusiasts who believe that everyone deserves access to great music. 
                        Our team is dedicated to bringing you the best music recommendation experience possible.</p>
                </div>
    </div>
  );
}
