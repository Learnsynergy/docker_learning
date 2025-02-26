import React from "react";

const LoginBtn = ({ logInBtnContent }) => {
  return (
    <button className="border-2 font-bold p-2 w-20 rounded-xl btn-login  bg-opacity-5  ">
      {logInBtnContent}
    </button>
  );
};

export default LoginBtn;
