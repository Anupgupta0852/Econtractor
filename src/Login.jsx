import React, { useState } from "react";
import firebase from "./firebase.js";
import { NavLink } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import "./styles.css";
const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLog, setIsLog] = useState(false);

  const otpp = () => {
    alert("otp sent");
  };

  const login = () => {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const user = result.user;
        setName(user.displayName);
        setEmail(user.email);
        setIsLog(true);
        console.log(user.displayName + "\n" + user.email);
      })
      .catch(function (error) {
        var errorMessage = error.message;

        console.log(errorMessage);
        alert("Can't Login");
      });
  };
  const logout = () => {
    if (isLog) {
      firebase
        .auth()
        .signOut()
        .then(function () {
          setIsLog(false);
          setNum("");
          document.querySelector("h5").textContent = ""; // Sign-out successful.
        })
        .catch(function (error) {
          alert("Can't Logout"); // An error happened.
        });
    } else {
      alert("Please Login");
    }
  };

  const fblogin = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        var token = result.credential.accessToken;

        var user = result.user;
        setName(user.displayName);
        setEmail(user.email);
        setIsLog(true);
        // ...
      })
      .catch(function (error) {
        var errorMessage = error.message;
        console.log(errorMessage);
        alert("Can't Login");
      });
  };
  const [num, setNum] = useState("");
  const handleClick = () => {
    var recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha");
    var number = num;
    firebase
      .auth()
      .signInWithPhoneNumber(number, recaptcha)
      .then(function (e) {
        var code = prompt("Enter the otp", "");

        if (code === null) {
          alert("please refresh and try again");
          // grecaptcha.reset(window.recaptcha);
        }

        e.confirm(code)
          .then(function (result) {
            console.log(result.user);
            setIsLog(true);
          })
          .catch(function (error) {
            // grecaptcha.reset(window.recaptcha);
            console.error(error);
            alert("please refresh and try again");
          });
      })
      .catch(function (error) {
        console.error(error);
        prompt("please refresh and try again");
      });
  };

  return (
    <>
      <div className="bodiDiv">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 widthLo">
            <div className="cardd border my-5">
              <div className=" p-5 text-center">
                <img
                  src="https://res.cloudinary.com/dz4wzkogr/image/upload/v1671700663/Econt/icon_inrkib.png "
                  alt="econtarctor"
                  className="logImg"
                />
                <div className="row justify-content-center">
                  <div className="col-xl-8 col-lg-9 mb-4">
                    <h2 className="responsiveE">
                      {isLog ? <></> : <>Log in to Econtractor</>}{" "}
                    </h2>
                    <p className="mb-0 bodiDiv2">
                      {isLog ? <></> : <>Join our community</>}{" "}
                    </p>
                  </div>
                </div>
                <div className="loginOuter">
                  {isLog ? (
                    <>
                      <div className="loginData">
                        <h3>Welcome</h3>
                        <h3>{name}</h3>
                        <h3>{num}</h3>
                        <h3>{email}</h3>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                  <button
                    className="fa fa-google"
                    type="button"
                    onClick={() => {
                      login();
                    }}
                  >
                    <GoogleIcon />
                  </button>

                  <button
                    className="fa respon fa-facebook"
                    type="button"
                    onClick={() => {
                      fblogin();
                    }}
                  >
                    <FacebookIcon />
                  </button>
                  <button
                    className="textLOGout respon fa "
                    type="button"
                    onClick={() => {
                      logout();
                    }}
                  >
                    <LogoutIcon />
                  </button>
                </div>
              </div>
              <div className="cardd p-5">
                <div className="row justify-content-center">
                  <div className="col-xl-8 col-lg-9">
                    <form className=" ng-untouched ng-pristine ng-invalid fsizeLogin ">
                      <div className="form-group ">
                        <div id="recaptcha" className="overflow-auto "></div>
                        <label
                          for="emailInput"
                          className="text-gray-600 small "
                          placeholder="enter phone number"
                        >
                          Mobile Number
                        </label>
                        <input
                          placeholder="+9186024xxxxx"
                          onChange={(e) => setNum(e.target.value)}
                          className="form-control form-control-solid ng-untouched ng-pristine ng-invalid"
                        />
                        <button
                          type="button"
                          class="btn otp_ btn-outline-success my-2 my-sm-0 srch otp_"
                          onClick={handleClick}
                        >
                          Send Otp
                        </button>
                        <div
                          _ngcontent-serverapp-c110=""
                          className="invalid-feedback"
                        >
                          OTP required.
                        </div>
                      </div>

                      <div
                        _ngcontent-serverapp-c110=""
                        className="  form-group"
                      >
                        <NavLink
                          _ngcontent-serverapp-c110=""
                          routerlink="/auth/password-reset-request"
                          to="/auth/password-reset-request"
                          onClick={() => {
                            otpp();
                          }}
                        >
                          Resend OTP
                        </NavLink>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div
                _ngcontent-serverapp-c111=""
                class="fsizeLogin  card-body px-5 py-4"
              >
                <div _ngcontent-serverapp-c111="" class="small text-center">
                  New user? <NavLink to="/contact">Create an account!</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown-divider "></div>
      </div>
    </>
  );
};

export default Login;
