import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import g from "../../img/google.png";
import signbg from "../../img/signimg.webp";
import "../globalcss/style.css";
import { auth, provider } from "../Login/config.js";
import { signInWithPopup } from "firebase/auth";
import { SettingsOverscanOutlined } from "@mui/icons-material";

export default function Signup() {
  const [googlelog, setGooglelog] = useState("");
  /*
    const [ email, setemail ] = useState('');
    const [ pass, setpass ] = useState('');
    const { signInUsingGoogle, user,signinMailandPass } = useAuth();
   

    const handleEmailchange = e => {
         setemail(e.target.value);
        // console.log(email);
        
    }
    const handlePassChange = e => {
        setpass(e.target.value);
        // console.log(pass);
       
    }

    const handleLogin = e => {
        // console.log(email);
        // console.log(pass);
        signinMailandPass(email, pass);
        e.preventDefault();
    }*/
  const handleGoogleLogin = (e) => {
    // console.log(email);
    // console.log(pass);
    signInWithPopup(auth, provider).then((data) => {
      setGooglelog(data.user.email);
      localStorage.setItem("email", data.user.email);
      console.log('login kor')
    });
    
  };

  useEffect(() => {
    setGooglelog(localStorage.getItem("email"));
  });

  const googleLogout = () => {
    localStorage.clear();
    window.location.reload()
  };
  return (
    <>
      {googlelog ? (
        <h2 className=" my-4 pt-5 text-center ">
          <span className="text-danger">Congratulation</span> Google lognin is
          Done !!!!
        </h2>
      ) : (
        <h2 className="my-4 text-center pt-5"></h2>
      )}
      <div className="text-center d-flex ">
        <div className="d-flex shadow-lg mx-auto my-5 marginTopBot">
          <div className="w-50 d-flex mx-4">
            <img
              src={signbg}
              alt="login img"
              className="my-auto"
              width="100%"
            />
          </div>
          <div className="w-50">
            <Container className="border-start w-100   p-5">
              <h4 className="pt-5 pb-3 text-theme-dark border-theme mx-auto">
                Sign-Up
              </h4>
              <div className="py-5 ">
                <form>
                  <input
                    type="text"
                    className="form-control mx-auto"
                    placeholder="Enter Name"
                  />
                  <br />
                  <input
                    type="email"
                    className="form-control  mx-auto"
                    placeholder="Enter Email"
                  />{" "}
                  <br />
                  <input
                    type="password"
                    className="form-control mx-auto"
                    placeholder="Password"
                  />
                  <br />
                  <input
                    type="submit"
                    className="btn btn-theme-dark text-light px-5 py-2 btn"
                    value="Sign Up"
                  />
                </form>
                <p className="my-3 ">
                  Already register ?
                  <Link to="/login" className="ms-2">
                    {" "}
                    Log In
                  </Link>
                </p>
                <button
                  onClick={handleGoogleLogin}
                  className="btn-light my-2 px-5 py-2 btn shadow"
                >
                  <img
                    src={g}
                    className="pe-2"
                    width="28px"
                    height="20px"
                    alt="Google icon"
                  />{" "}
                  Sign in with Google
                </button>
              </div>
            </Container>
          </div>
        </div>
      </div>
      {googlelog ? (
        <button
          className="btn btn-primary px-4 py-2 my-5 rounded"
          onClick={googleLogout}
        >
          Google Log out
        </button>
      ) : (
        <h2 className="my-4 text-center pt-5"></h2>
      )}
    </>
  );
}
