import React from "react";
import icon from "../../img/wave.png";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import "./Hero.css";
import step1 from "../../img/detect.jpg";
import step2 from "../../img/sso.jpg";

export default function Hero() {
  return (
    <>
      <div className="hero-bg">
        <div className="d-flex container">
          <div className="w-50 text-start text-white pt-xl">
            <h1 className="fontHero">
              Capture Your face and show <br /> whats on your mind
            </h1>
            <p className="my-4  fontP text-white">
              Artificial intelligence is not less than our intelligence{" "}
            </p>
            <button className="btn-primary btn px-5 py-2 rounded-3 fs-5">
              {" "}
              <GraphicEqIcon className="me-1 my-auto" />{" "}
              <a className="text-decoration-none text-light" href="#steps">
                Explore TuneExpo
              </a>
            </button>
          </div>
          <div className="w-50"></div>
        </div>
      </div>
      <div id="steps" className="d-flex py-5 my-5 container text-start">
        <div className="w-50 mx-auto h-100 px-3 my-auto">
          <div className="d-flex">
            <h3 className="mb-4 fs-3 rounded-3 px-3 py-2 bg-contact text-light">
              Step{" "}
              <span className="textAbout fs-4 my-auto bg-info text-white rounded-circle p-3">
                01
              </span>
            </h3>
          </div>
          <div className="d-flex">
          <h5 className="ms-1 my-auto">Scan your face in our built in Camera .</h5>
          <button className="btn btn-info text-light ms-2 px-3 rounded-pill"> <a className="text-decoration-none text-white" href="#camera">Find Camera</a> </button>
            
          </div>
          

          
        </div>
        <div className="w-50">
          <img src={step1} alt="" className="s-pic m-0 p-0" width="100%" />
        </div>
      </div>
      <div className="d-flex pb-5 mb-5 container text-start bg-gray">
        <div className="w-50 mx-auto h-100 px-3 my-auto">
          <div className="d-flex">
            <h3 className="mb-4 fs-3 rounded-3 px-3 py-2 bg-contact text-light">
              Step{" "}
              <span className="textAbout fs-4 my-auto bg-info text-white rounded-circle p-3">
                02
              </span>
            </h3>
          </div>
          <h5 className="ms-1">
            We detect your face and suggest a music list.
          </h5>
        </div>
        <div className="w-50">
          <img src={step2} alt="" className="s-pic m-0 p-0 rounded-pill" width="100%" />
        </div>
      </div>
    </>
  );
}
