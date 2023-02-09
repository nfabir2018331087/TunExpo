import React from "react";
import c1 from "../../img/3.jpg";
import c2 from "../../img/5.jpg";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import StarIcon from "@mui/icons-material/Star";
import VerifiedIcon from "@mui/icons-material/Verified";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import "./CardStyle.css";

export default function MusicCard({ song }) {
  return (
    <>
      <div className="d-flex  p-0 bg-light shadow-lg rounded-3 col-md-6 cardM mx-auto">
        <div className="w-140">
          <img
            src={song.imageUrl}
            className="rounded-start p-0 m-0 w-100 h-100"
            alt="card image"
          />
        </div>
        <div className=" p-3  w-75 text-start">
          <h5 className="text-start">{song.name}</h5>
          {/* album */}
          <p className="text-danger my-1">
            <QueueMusicIcon className="me-2" />
            {song.album.substring(0, 25)}
          </p>
          <div className="">
            {/* artist */}
            <p className="my-2">
              <VerifiedIcon className="me-2 text-primary" />
              {song.artist}
            </p>

            {/* popularity / views */}
            <p className="fw-bold py-0 my-0">Popularity : {song.popularity}</p>
          </div>
          <div className="d-flex">
            {/* <p className='ms-auto text-warning py-0 my-0'><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarHalfIcon/></p> */}
            <button className="btn-danger btn text-light my-2 py-0 px-4">
              {" "}
              <a
                className="text-decoration-none text-light "
                href={song.link}
                target="_blank"
              >
                Play
              </a>
            </button>
            <p className="fw-bold  rounded-3 py-1 px-3 text-light bg-success ms-auto my-auto">
              {song.mood.charAt(0).toUpperCase() + song.mood.slice(1)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
