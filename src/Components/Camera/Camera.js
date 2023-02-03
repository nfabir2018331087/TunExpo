import React, { useRef } from "react";
import "./Camera.css";
import Webcam from "react-webcam";
import cp from "../../img/shutter.png";
import re from "../../img/bin.png";

const videoConstraints = {
  width: "100%",
  facingMode: "environment",
};

const Camera = () => {
  const webcamRef = useRef(null);
  const link = "../../img/wave.png";
  const [url, setUrl] = React.useState(null);

  const capturePhoto = React.useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);
    // console.log(imageSrc);
    const response = await fetch("http://localhost:5000/api/tracks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ img_b64s: imageSrc }),
    });
    const data = await response.json();
    console.log(data);
  }, [webcamRef]);

  const onUserMedia = (e) => {
    console.log(e);
  };

  return (
    <>
      <div className="bg-theme-light pb-5">
        <div className="container py-5">
          <h3 className="pt-5 text-light fs-2">
            Camera is finding you Please Look at the Camera
          </h3>
          <p className="text-light py-3 fw-light">
            There is one thing the photograph must contain, the humanity of the
            moment.There is one thing the photograph must contain, the humanity
            of the moment
          </p>
        </div>

        <div className="container d-flex">
          <div className="w-50 mx-auto ">
            <Webcam
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
              onUserMedia={onUserMedia}
            />
          </div>
          <div className="w-50 mx-auto">
            {url && (
              <div>
                <img src={url} alt="Screenshot" />
              </div>
            )}
          </div>
        </div>
        <div className="w-100 d-flex container py-3">
          <div className="w-50 mx-auto">
            <button onClick={capturePhoto}>
              <img
                src={cp}
                className=" btn"
                width={"80px"}
                alt="Capture Icon"
              />
            </button>
          </div>
          <div className="w-50 mx-auto">
            <button onClick={() => setUrl(null)}>
              <img
                src={re}
                className="rounded-circle btn"
                width={"80px"}
                alt="Resfresh icon"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Camera;
