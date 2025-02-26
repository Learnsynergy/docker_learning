import React from "react";
import "../../styles/FirstHome/FirstHome.css";
import { Link } from "react-router-dom";

import Button from "../../components/Button";
import image_Daily from "../../images/image_Daily.svg";
import image_Chrome from "../../images/image_Chrome.svg";
import image_Edge from "../../images/image_Edge.svg";
import google from "../../images/google.svg";
import Group from "../../images/Group.svg";
import Microsoft_logo from "../../images/Microsoft_logo.svg";
import Meta_Platforms_Inc_logo from "../../images/Meta_Platforms_Inc_logo.svg";
import image_Playbutton from "../../images/image_Playbutton.svg";
import image_Review_Stats from "../../images/image_Review_Stats.png";

function FirstHome() {
  return (
    <div className="FirstHome">
      <div className="container1-firsthome">
        <div className="navbar-firsthome">
          <div className="logo-firsthome">
            <a href="http://">
              <img src={image_Daily} alt="Logo" className="" />
            </a>
          </div>

          <div className="button-navbar-firsthome">
            <Button
              className="btn-firsthome"
              text="Star reading - Free forever"
            />
          </div>
        </div>

        <div className="section-hero-firsthome">
          <div className="hero-firsthome">
            <div className="hero-firsthome-wrapper">
              <h1 className="hero-firsthome-h1">
                Where developers <br />{" "}
                <span className="hero-firsthome-h1-span">suffer together</span>
              </h1>

              <p className="hero-firsthome-p1">
                We know how hard it is to be a developer. It doesn’t have to be.
                Personalized news feed, dev communities and search, much better
                than what’s out there. Maybe ;)
              </p>

              <div className="hero-link-container">
                <a href="http://#" className="">
                  <Button
                    className="btn2-firsthome"
                    text="Star reading - Free forever"
                    icon1={<img src={image_Chrome} alt="Icon 1" />}
                    icon2={<img src={image_Edge} alt="Icon 2" />}
                  />
                </a>
                <Link to="/onboarding" className="btn-cta-hero">
                  Or try our web version
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="section2-hero-firsthome">
          <div className="image-container">
            <Link to="/" className="">
              <img
                src={image_Playbutton}
                alt="Overlay"
                className="overlay-image"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="section-review-container">
        <div className="left-section">
          <h1>
            The world's best developer platform for{" "}
            <span>staying up to date</span>
          </h1>
          <div className="logos">
            <img src={google} alt="Google" />
            <img src={Group} alt="AWS" />
            <img src={Microsoft_logo} alt="Microsoft" />
            <img src={Meta_Platforms_Inc_logo} alt="Meta" />
          </div>
        </div>
        <div className="right-section">
          <img
            src={image_Review_Stats}
            alt="Reviews"
            className="review-image"
          />
        </div>
      </div>
    </div>
  );
}

export default FirstHome;
