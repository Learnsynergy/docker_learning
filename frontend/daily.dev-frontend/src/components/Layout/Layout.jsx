import React from "react";
import Header from "../Header/Header";
import SideBar from "./SideBar/SideBar";
import IconMenu from "../Mobile/IconMenu";
import "../../styles/Mobile/IconMenu.css";
const Layout = ({ children }) => {
  return (
    <div>
      <div className="sticky top-0 bg-[#0e1217] z-20">
        <Header />
      </div>
      <div className="flex">
        <div className="sidebar sticky z-10">
          <SideBar />
        </div>
        <div className="w-full layout bg-[#0e1217] ">{children}</div>
      </div>
      <IconMenu />
    </div>
  );
};

export default Layout;
