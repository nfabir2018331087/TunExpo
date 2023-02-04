import React from "react";
import "./AboutUs.css";
import './style.css'
import Container from "react-bootstrap/Container";
import ab from "../../img/about.jpg";
import dp1 from "../../img/1m.jpg";
import dp2 from "../../img/2a.jpg";
import dp5 from "../../img/5a.jpg";
import dp4 from '../../img/dp44.jpg'
import dp3 from '../../img/dp3.jpeg'

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
          <h3 className="mb-5 fs-3">
            Let's Know About <br /> <span className="textAbout">Tune Expo</span>
          </h3>
          <p className="pe-5">
            Welcome to our music recommendation app Tune Expo ! We're here to
            help you discover new and exciting music that you'll love. Our app
            uses advanced algorithms to analyze your listening habits and
            suggest songs and artists that match your taste.Our app utilizes
            machine learning and data analysis to provide you with customized
            recommendations based on your listening history. The more you listen
            and interact with the app, the more accurate your recommendations
            will become.
          </p>
        </div>
        <div className="w-50">
          <img src={ab} alt="" className="s-pic m-0 p-0" width="100%" />
        </div>
      </div>
      <div className="container mb-5">
        <h1 className="textAbout fs-1 my-3">Meet our AI Team</h1>
        <p className="pb-4">
          We are a group of music lovers and technology enthusiasts who believe
          that everyone deserves access to great music.<br/> Our team is dedicated to
          bringing you the best music recommendation experience possible.
        </p>
      </div>

      <div class="container my-5 ">
           
            <div className="row d-flex justify-content-around gap-5 mb-5">
                <div className="column py-4 rounded-3 border border-info">
                    <div className="team-6">
                        <div className="team-img">
                            <img src={dp1} className="" alt="Team Image"  />
                        </div>
                        <div className="team-content">
                        <h4>Muhit Mahmud</h4>
                            <h3>Frontend , Backend & AI Model Analyzer</h3>
                            <div className="team-social">
                                <a className="social-tw" href=""><i className="fab fa-twitter"></i></a>
                                <a className="social-fb" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="social-li" href=""><i className="fab fa-linkedin-in"></i></a>
                                <a className="social-in" href=""><i className="fab fa-instagram"></i></a>
                                <a className="social-yt" href=""><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column py-4 rounded-3 border border-info">
                    <div className="team-6">
                        <div className="team-img">
                        <img src={dp2} alt="Team Image"/>
                        </div>
                        <div class="team-content">
                            <h4>Amir Hamza</h4>
                            <h3>Backend & AI Model Analyzer</h3>
                            <div class="team-social">
                                <a className="social-tw" href=""><i className="fab fa-twitter"></i></a>
                                <a className="social-fb" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="social-li" href=""><i className="fab fa-linkedin-in"></i></a>
                                <a className="social-in" href=""><i className="fab fa-instagram"></i></a>
                                <a className="social-yt" href=""><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column py-4 rounded-3 border border-info">
                    <div className="team-6">
                        <div className="team-img">
                        <img src={dp3} alt="Team Image"/>
                        </div>
                        <div className="team-content">
                        <h4>Nafis Fuad Abir</h4>
                            <h3>Backend & AI Model Analyzer</h3>
                            <div className="team-social">
                                <a className="social-tw" href=""><i className="fab fa-twitter"></i></a>
                                <a className="social-fb" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="social-li" href=""><i className="fab fa-linkedin-in"></i></a>
                                <a className="social-in" href=""><i className="fab fa-instagram"></i></a>
                                <a className="social-yt" href=""><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div> 
            <div className="row d-flex justify-content-center gap-5 pb-5">
                <div className="column py-4 rounded-3 border border-info me-4">
                    <div className="team-6">
                        <div className="team-img">
                            <img src={dp4} className="" alt="Team Image"  />
                        </div>
                        <div className="team-content">
                           <h4>Abdul Kader Akash</h4>
                            <h3>Frontend , Backend & AI Model Analyzer</h3>
                            <div className="team-social">
                                <a className="social-tw" href=""><i className="fab fa-twitter"></i></a>
                                <a className="social-fb" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="social-li" href=""><i className="fab fa-linkedin-in"></i></a>
                                <a className="social-in" href=""><i className="fab fa-instagram"></i></a>
                                <a className="social-yt" href=""><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column py-4 rounded-3 border border-info ms-4">
                    <div className="team-6">
                        <div className="team-img">
                        <img src={dp5} alt="Team Image"/>
                        </div>
                        <div className="team-content">
                        <h4>Ahmadul Islam</h4>
                            <h3>AI Model Analyzer</h3>
                            <div className="team-social">
                                <a className="social-tw" href=""><i className="fab fa-twitter"></i></a>
                                <a className="social-fb" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="social-li" href=""><i className="fab fa-linkedin-in"></i></a>
                                <a className="social-in" href=""><i className="fab fa-instagram"></i></a>
                                <a className="social-yt" href=""><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div> 
        </div>
    </div>
  );
}
