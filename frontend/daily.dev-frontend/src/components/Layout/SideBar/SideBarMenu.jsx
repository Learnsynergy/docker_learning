import React from "react";
import { Link, useLocation } from "react-router-dom";

const SideBarMenu = ({ menuTitle, submenus }) => {
  const { pathname } = useLocation();
  return (
    <div className="mb-3">
      <h1 className="mb-1 font-extrabold text-xs text-[#71798c]">
        {menuTitle}
      </h1>
      <div>
        {submenus.map((submenu, idx) => (
          <Link key={idx} to={submenu.path}>
            <div
              className={`flex gap-3 items-center text-base p-1 hover:bg-[#2d323b] ${
                pathname === submenu.path ? "active-menu" : "inactive-menu"
              }`}
            >
              <img
                className="w-5 h-5 rounded-md "
                src={submenu.menuIcon}
                alt="menu"
              />
              <p>{submenu.subTitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBarMenu;
