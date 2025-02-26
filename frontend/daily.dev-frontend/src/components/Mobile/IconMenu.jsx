import React from "react";
import home from "../../images/iconMenu/home.svg";
import mobilelook from "../../images/iconMenu/mobilelook.svg";
import activityIcon from "../../images/iconMenu/activityIcon.svg";
import mobilesquad from "../../images/iconMenu/mobilesquad.svg";
import "../../styles/Mobile/IconMenu.css";
import BasicModal from "./BasicModal";
import { Link } from "react-router-dom";
const IconMenu = () => {
  return (
    <nav className="icon-menu">
      <div className="icon-menu-wrapper">
        <Link to="/myfeed">
          <img className="size-10" src={home} alt="home" />
        </Link>
        <Link to="/posts">
          <img className="size-10" src={mobilelook} alt="home" />
        </Link>
        <BasicModal />
        <img className="size-10" src={activityIcon} alt="home" />
        <Link to="/squads">
          <img className="size-10" src={mobilesquad} alt="home" />
        </Link>
      </div>
    </nav>
  );
};

export default IconMenu;
