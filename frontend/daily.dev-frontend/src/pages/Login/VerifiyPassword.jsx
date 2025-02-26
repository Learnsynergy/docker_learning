import React, { useState, useEffect } from "react";
import DailyDevLogo from "../../components/DailyDevLogo/DailyDevLogo";
import { MdOutlineKey } from "react-icons/md";
import axios from "../../api/client";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner";
const VerifiyPassword = () => {
  const [email, setEmail] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [otp, setOtp] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const savedMail = localStorage.getItem("mail");

    setEmail(savedMail);
    console.log(savedMail);
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [otp]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ email, otp });
    setLoading(true);
    try {
      const response = await axios.post("/auth/verify-otp", {
        email,
        otp,
      });

      console.log(response.data);
      setOtp("");
      localStorage.setItem("otpToken", response.data.otpToken);
      console.log(response.data.otpToken);
      if (response.data.success) {
        navigate("/onboarding/change-password");
      }
    } catch (err) {
      if (!err.response) {
        setErrMsg("server failed");
      } else {
        setErrMsg("Wrong Code please click on resend button");
      }
    } finally {
      setLoading(false);
    }
  };
  const handleClick = async () => {
    setLoading(true);
    try {
      const response = await axios.post("auth/send-otp", { email });
      console.log(response.data);
      if (response.data.success) {
        setErrMsg("Code sent");
      }
    } catch (err) {
      if (!err.response) {
        setErrMsg("server failed");
      } else {
        setErrMsg("registration failed");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-[#0e1217] h-full pb-5 overflow-hidden">
      <DailyDevLogo />
      <div className="flex flex-col items-center  justify-center mt-10  ">
        <p
          className={
            errMsg ? "text-red-600 font-extrabold text-lg" : "offscreen"
          }
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <h1 className="text-white font-bold text-xl">Verification</h1>
        <p className="text-[#a8b3cf] text-center mb-5 mt-5">
          We just sent the verification code to <br />
          {email}
        </p>
        <form action="verification" onSubmit={handleSubmit}>
          <div className="mt-3 w-96">
            <label htmlFor="name"></label>
            <div
              id="mail"
              className="flex items-center w-full cursor-pointer gap-2 border-2 text-[#a8b3cf] hover:text-white bg-[#a8b3cf] bg-opacity-5  border-transparent border-opacity-0 rounded-lg h-12 pl-5 "
            >
              <div className="bg-transparent text-[#a8b3cf] hover:text-white size-5 ">
                <MdOutlineKey />
              </div>

              <input
                placeholder="code"
                name="code"
                id="email"
                className="self-stretch text-ellipsis w-full bg-transparent  focus:outline-none"
                required
                value={otp}
                type="text"
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="border-2 font-bold p-2 w-24 rounded-xl  bg-white"
            >
              {!loading ? "Verify" : <Spinner />}
            </button>
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={handleClick}
              className="border-2 font-bold p-2 w-24 rounded-xl btn-login text-white bg-opacity-5  "
            >
              {!loading ? "Resend " : <Spinner />}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerifiyPassword;
