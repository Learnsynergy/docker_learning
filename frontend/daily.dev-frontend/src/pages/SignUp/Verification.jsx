import React, { useEffect, useState } from "react";
import DailyDevLogo from "../../components/DailyDevLogo/DailyDevLogo";
import { MdOutlineKey } from "react-icons/md";
import Mail from "../../components/onboarding/Mail";
import axios from "../../api/client";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner";
const Verification = () => {
  const [otp, setOtp] = useState(null);
  const [email, setEmail] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    const savedMail = localStorage.getItem("email");

    setEmail(savedMail);
    console.log(savedMail);
  }, []);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    console.log({ email, otp });
    try {
      const response = await axios.post("/auth/verify-otp", {
        email,
        otp,
      });
      console.log(response.data);
      if (response.data.success) {
        navigate("/myFeed");
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
    try {
      const response = await axios.post("/auth/send-otp", { email });
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
    }
  };
  return (
    <div className="bg-[#0e1217] h-full pb-5 pt-8">
      <DailyDevLogo />
      <div className="flex flex-col items-center justify-center mt-10">
        <p
          className={
            errMsg ? "text-red-600 font-extrabold text-lg" : "offscreen"
          }
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <h1 className="text-white font-bold text-xl">Verification</h1>
        <div className="flex flex-col gap-5 w-96 mt-4 relative">
          <form action="verification" onSubmit={handleSubmit}>
            <Mail email={email} setEmail={setEmail} />
            <div className="mt-3">
              <label htmlFor="name"></label>
              <div
                id="mail"
                className="flex items-center cursor-pointer gap-2 border-2 text-[#a8b3cf] hover:text-white bg-[#a8b3cf] bg-opacity-5  border-transparent border-opacity-0 rounded-lg h-12 pl-5 "
              >
                <div className="bg-transparent text-[#a8b3cf] hover:text-white size-5 ">
                  <MdOutlineKey />
                </div>
                <div className="flex justify-between w-full ">
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
                <div className="w-24 mb-7 text-black">
                  <button
                    disabled={loading}
                    onClick={handleClick}
                    className=" media-onboard-btn mt-7 justify-center rounded-xl border-transparent p-3 gap-1 bg-white w-full flex items-center"
                  >
                    <p className="font-bold ">
                      {" "}
                      {!loading ? "Resend" : <Spinner />}
                    </p>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-96">
              <button
                disabled={loading}
                type="submit"
                className=" media-onboard-btn mt-7 justify-center rounded-xl border-transparent p-3 gap-1 bg-white w-full flex items-center"
              >
                <p className="font-bold ">
                  {" "}
                  {!loading ? "Verify" : <Spinner />}
                </p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Verification;
