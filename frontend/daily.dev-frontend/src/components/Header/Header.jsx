import React, { useState, useEffect } from "react";
import "../../styles/Header/Header.css";
import { FaBell, FaFire } from "react-icons/fa";
import { IoFlashSharp } from "react-icons/io5";
import DailyDevLogo from "../DailyDevLogo/DailyDevLogo";
import Button from "../Button/index";
import searchIcon from "../../images/searchIcon.svg";
import { Link } from "react-router-dom";
import { LuSettings2 } from "react-icons/lu";
import axios from "../../api/client";
import UserMenu from "../UserMenu/UserMenu";




const Header = ({ userId }) => {
  const [user, setUser] = useState({
    id: userId,
    profilePicture: "",
    reputation: "",
  });

  const [showUserMenu, setShowUserMenu] = useState(false);
  const handleMenuClick = () => {
    setShowUserMenu(!showUserMenu); 
  };

  useEffect(() => {
    // Fonction pour récupérer les données utilisateur via l'API
    const fetchUserData = async () => {
      if (!user.id) return; // Vérifier si l'id est disponible

      try {
        const response = await axios.get(`/api/users/${user.id}`);
        const data = response.data;

        setUser({
          id: user.id,
          profilePicture: data.profilePicture || "https://res.cloudinary.com/daily-now/image/upload/s--O0TOmw4y--/f_auto/v1715772965/public/noProfile",
          reputation: data.reputation || "Unknown level",
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [user.id]);

  return (
    <header className="header border-b border-opacity-15 border-white">
      <div className="header-left">
        <DailyDevLogo alt="daily.dev" className="daily-dev-icon" />
      </div>
      <div className="header-center">
        <div className="search-bar">
          <div className="flex gap-3">
            <img src={searchIcon} className="w-8 h-8" alt="look" />
            <input
              type="text"
              placeholder="Search"
              className="search-input text-lg text-[#9da7c1]"
            />
          </div>

          <div className="search-shortcut flex gap-2">
            <p className="border border-white border-opacity-15 pr-2 pl-2 rounded-lg">
              Ctrl
            </p>
            <p>+</p>
            <p className="border border-white border-opacity-15 pr-2 pl-2 rounded-lg">
              K
            </p>
          </div>
        </div>
      </div>
      <div className="header-right">
        <Link to="/create">
          <Button className="new-post-button" text="New post" />
        </Link>
        <Button
          className="header-btn-icon"
          text=""
          icon1={
            <FaBell
              alt="Icon"
              className="header-icon"
              id="header-icon-notification"
            />
          }
        />

        
          <div className="header-icon-container">
            <div className="header-icon-group-fafire">
              <div className="header-icon-fafire-circle">
                <FaFire alt="Icon" className="header-icon" id="" />
              </div>
              <span className="notification-count">1</span>
            </div>

            <Button
              className="LuSettings2-button"
              icon1={<LuSettings2 alt="Icon 1" className="w-8 h-8 text-gray-500" />}
              text=""
            />

            <div className="header-icon-group-IoFlashSharp" onClick={handleMenuClick}>
              <div className="header-icon-IoFlashSharp-circle">
                <IoFlashSharp alt="Icon" className="header-icon-facircle" id="" />
              </div>
              <span className="user-level">{user.reputation}</span>
            </div>
            <div onClick={handleMenuClick}>
              <img
                src={user.profilePicture || "https://res.cloudinary.com/daily-now/image/upload/s--O0TOmw4y--/f_auto/v1715772965/public/noProfile"}
                alt="User Avatar"
                className="w-8 h-8 rounded-lg"
              />
            </div>
          </div>
        
      </div>
      {showUserMenu && <UserMenu />}
    </header>
    
  );
};

export default Header;
