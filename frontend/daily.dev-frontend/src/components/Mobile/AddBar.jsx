import React from "react";
import stylo from "../../images/iconMenu/stylo.svg";
import link from "../../images/iconMenu/link.svg";
import docs from "../../images/iconMenu/docs.svg";
import "../../styles/Mobile/IconMenu.css";
import { Link } from "react-router-dom";
const AddBar = () => {
  return (
    <div className="bg-[#0e1217] absolute bottom-0 w-full p-3 flex justify-center rounded-t-lg ">
      <div className="flex flex-col gap-3 add-wrapper">
        <div className="flex gap-5">
          <div className="flex flex-col items-center  ">
            <Link to="/create">
              <img
                className="size-12 p-1 border-2 border-white border-opacity-10 rounded-xl bg-[#a8b3cf0d]"
                src={stylo}
                alt="home"
              />
              <p className="text-[#9da7c1]">New post</p>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="size-12 p-1 border-2 border-white border-opacity-10 rounded-xl bg-[#a8b3cf0d]"
              src={link}
              alt="home"
            />
            <p className="text-[#9da7c1]">share a link</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="size-12 p-1 border-2 border-white border-opacity-10 rounded-xl bg-[#a8b3cf0d]"
              src={docs}
              alt="home"
            />
            <p className="text-[#9da7c1]">Community</p>
          </div>
        </div>

        <button className=" text-[#9da7c1] w-full p-1 border-2 border-white border-opacity-10 rounded-xl bg-[#a8b3cf0d]">
          close
        </button>
      </div>
    </div>
  );
};

export default AddBar;
