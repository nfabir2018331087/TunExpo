import React, { useRef } from "react";
import "./Camera.css";
import Webcam from "react-webcam";
import cp from "../../img/shutter.png";
import re from "../../img/bin.png";
import MusicHome from "./MusicHome";
import MusicCard from "./MusicCard";
import "./CardStyle.css";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import Face5Icon from "@mui/icons-material/Face5";
import { useState } from "react";

const videoConstraints = {
  width: "100%",
  facingMode: "environment",
};

const Camera = () => {
  const webcamRef = useRef(null);
  const link = "../../img/wave.png";
  const [url, setUrl] = React.useState(null);
  const [songs, setSongs] = useState([]);
  const [emotion, setEmotion] = useState("");

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
    setSongs(data.data);
    setEmotion(data.emotion);
  }, [webcamRef]);

  const onUserMedia = (e) => {
    console.log(e);
  };

  return (
    <>
      <div id = 'camera' className="bg-theme-light pb-5">
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

        <div className="container d-flex w-100">
          <div className="w-25 mx-auto p-4">
            <Webcam
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
              onUserMedia={onUserMedia}
              className="wCam"
            />
          </div>
          <div className="w-25 mx-auto p-4">
            {url && (
              <div className="w-100">
                <img className="w-100" src={url} alt="Screenshot" />
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
      <div className="cardBg py-5">
        <div className="container">
          <div className=" mx-auto text-light p-4 mt-5">
            <h2 className="fw-light text-light mt-2">
              Your Mood is Detected :{" "}
              {emotion.charAt(0).toUpperCase() + emotion.slice(1)}
              {emotion === "happy" && (
                <SentimentSatisfiedAltIcon className="fs-1 mx-2 mb-2" />
              )}
              {emotion === "sad" && (
                <SentimentVeryDissatisfiedIcon className="fs-1 mx-2 mb-2" />
              )}
              {emotion === "neutral" && (
                <SentimentSatisfiedIcon className="fs-1 mx-2 mb-2" />
              )}
              {emotion === "fear" && <Face5Icon className="fs-1 mx-2 mb-2" />}
              {emotion === "surprise" && (
                <SentimentSatisfiedIcon className="fs-1 mx-2 mb-2" />
              )}
              {emotion === "angry" && (
                <SentimentSatisfiedIcon className="fs-1 mx-2 mb-2" />
              )}
              {emotion === "disgust" && (
                <SentimentSatisfiedIcon className="fs-1 mx-2 mb-2" />
              )}
            </h2>
            <h4 className="text-info fw-light">
              Suggested Song : {songs.length}
            </h4>
          </div>
          <h4 className="text-light text-start marginR conatiner py-4 fw-light">
            Recommended Music :
          </h4>

          <div className="d-flex w-100 mx-auto">
            <div className="d-flex row gap-5 mx-auto justify-content-around">
              {songs.map((song) => (
                <MusicCard key={song.id} song={song}></MusicCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Camera;
