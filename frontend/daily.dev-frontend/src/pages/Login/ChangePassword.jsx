import React, { useState, useEffect } from "react";
import DailyDevLogo from "../../components/DailyDevLogo/DailyDevLogo";
import { CiLock } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoEyeOffOutline } from "react-icons/io5";
import axios from "../../api/client";
import Spinner from "../../components/Spinner";
import { useNavigate } from "react-router-dom";
const ChangePassword = () => {
  const date = new Date();
  const [errMsg, setErrMsg] = useState("");
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [otpToken, setOtpToken] = useState("");
  const [loading, setLoading] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    setShowPassword(!showPassword);
  };
  useEffect(() => {
    const email = localStorage.getItem("mail");
    const otpToken = localStorage.getItem("otpToken");
    setOtpToken(otpToken);
    setEmail(email);
    console.log(email);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("/auth/forgot-password", {
        email,
        otpToken,
        newPassword,
      });

      if (response.data.success) {
        navigate("/myfeed");
      }
    } catch (err) {
      if (!err.response) {
        setErrMsg("server failed");
      } else {
        setErrMsg(" Please strengthen your new password");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-[#0e1217] h-full pb-5 overflow-hidden">
      <DailyDevLogo />
      <div className="flex flex-col items-center  justify-center mt-10 ">
        <p
          className={errMsg ? "text-red-600 font-extrabold" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <p className="text-white font-bold title-login mb-5">
          Create a new password
        </p>
        <p className="text-[#a8b3cf] text-center mb-5">
          Please enter your new password. A password <br /> strength meter will
          guide you if your password is <br /> strong enough.
        </p>
        <form onSubmit={handleSubmit} className="w-96">
          <label htmlFor="new-password"></label>
          <div
            id="mail"
            className="flex items-center mt-5 cursor-pointer gap-2 border-2 text-[#a8b3cf] hover:text-white bg-[#a8b3cf] bg-opacity-5  border-transparent border-opacity-0 rounded-lg h-12 pl-5 "
          >
            <CiLock className="bg-transparent text-[#a8b3cf] hover:text-white size-5 " />
            <input
              placeholder="Create a new password"
              name="password"
              id="password"
              className="self-stretch text-ellipsis w-full bg-transparent focus:outline-none"
              required
              type={showPassword ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            {showPassword ? (
              <MdOutlineRemoveRedEye
                className="size-6 mr-4"
                onClick={handleClick}
              />
            ) : (
              <IoEyeOffOutline className="size-6 mr-4" onClick={handleClick} />
            )}
          </div>
          <div className="flex justify-end mt-5">
            <button
              disabled={loading}
              className="border-2 font-bold p-2  rounded-xl  bg-white   "
            >
              {!loading ? "Change password" : <Spinner />}
            </button>
          </div>
        </form>
        <footer className="text-[#a8b3cf] footer-onboarding absolute bottom-3">
          <div className="flex gap-5 text-xs ">
            <p>&copy; {date.getFullYear()}</p>
            <a href="#gui">Guidelines</a>
            <a href="#expl">Explore</a>
            <a href="#tags">Tags</a>
            <a href="#sour">Sources</a>
            <a href="#squ">Squads</a>
            <a href="#lea">Leaderboard</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ChangePassword;
