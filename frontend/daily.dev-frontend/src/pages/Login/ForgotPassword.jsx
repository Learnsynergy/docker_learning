import React, { useState } from "react";
import DailyDevLogo from "../../components/DailyDevLogo/DailyDevLogo";
import { TbMail } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../api/client";
import { FaArrowLeft } from "react-icons/fa6";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ email });
    localStorage.setItem("mail", email);
    try {
      const response = await axios.post("/auth/send-otp", {
        email,
      });
      console.log(response.data);
      if (response.data.success) {
        navigate("/onboarding/verify-code");
      }
    } catch (err) {
      if (!err.response) {
        setErrMsg("server failed");
      } else {
        setErrMsg("Invalid email");
      }
    }
  };
  return (
    <div className="bg-[#0e1217] h-full pb-5 overflow-hidden">
      <DailyDevLogo />
      <div className="flex flex-col items-center  justify-center mt-10 ">
        <p
          className={errMsg ? "text-white" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <p className="text-white font-bold title-login mb-5">Reset password</p>
        <p className="text-[#a8b3cf] text-center mb-5">
          Enter the email address you registered with and <br />
          we will send you a verification code.
        </p>
        <form className="w-96 flex flex-col gap-4" onSubmit={handleSubmit}>
          <label htmlFor="name"></label>
          <div
            id="mail"
            className="flex items-center cursor-pointer gap-2 border-2 text-[#a8b3cf] hover:text-white bg-[#a8b3cf] bg-opacity-5  border-transparent border-opacity-0 rounded-lg h-12 pl-5 "
          >
            <TbMail className="bg-transparent text-[#a8b3cf] hover:text-white size-5 " />
            <input
              placeholder="Email"
              name="email"
              id="email"
              autoComplete="off"
              className="self-stretch text-ellipsis w-full bg-transparent focus:outline-none"
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex justify-end">
            <button className="border-2 font-bold p-2  rounded-xl  bg-white   ">
              send verification code
            </button>
          </div>
        </form>
        <hr className="line-code border-[#a8b3cf72] mt-6 " />
        <Link to="/onboarding/login">
          <div className="flex underline text-sm mt-2 items-center  text-white">
            <FaArrowLeft />
            <p>Back to login?</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
