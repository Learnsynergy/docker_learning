import React, { useEffect, useState } from "react";
import DailyDevLogo from "../../components/DailyDevLogo/DailyDevLogo";
import Input from "../../components/onboarding/Input";
import { FaUser } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { VscMention } from "react-icons/vsc";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import SelectInput from "../../components/onboarding/SelectInput";
import Btn from "../../components/onboarding/Btn";
import Footer from "../../components/onboarding/Footer";
import { IoEyeOffOutline } from "react-icons/io5";
import Mail from "../../components/onboarding/Mail";
import "../../styles/formsStyles/signup.css";
import axios from "../../api/client";
import Verification from "./Verification";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("not-filled");
  const [errMsg, setErrMsg] = useState("");
  const [userName, setUserName] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState("");

  const handleClick = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    console.log(showPassword);
  }, [showPassword]);
  const formSignUp = [
    {
      inputIcon: <CiLock />,
      inputName: "Password",
      inputIconOp: showPassword ? (
        <MdOutlineRemoveRedEye onClick={handleClick} />
      ) : (
        <IoEyeOffOutline onClick={handleClick} />
      ),
    },
  ];
  useEffect(() => {
    const savedMail = localStorage.getItem("email");
    setEmail(savedMail);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({
      name,
      email,
      password,
      experienceLevel,
    });
    setLoading(true);
    try {
      const response = await axios.post(
        "/auth/register",

        { name, email, password, experienceLevel }
      );
      console.log(response.data);
      console.log(response.accessToken);

      if (response.data.user) {
        setSuccess(true);
        try {
          const response = await axios.post("/auth/send-otp", { email });
          console.log(response.data);
        } catch (err) {
          if (!err.response) {
            setErrMsg("server failed");
          } else {
            setErrMsg("Registration failed! Please enter a valid password");
          }
        }
      }
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No server response");
      } else if (err.response?.status === 400) {
        setErrMsg(
          "Password must contain 8 caracters with at least : one uppercase letter, one lowercase letter,a number and a special caracter"
        );
      } else {
        setErrMsg("Login failed");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {success ? (
        <Verification />
      ) : (
        <div className="bg-[#0e1217] h-full pb-5 pt-4 signup-container">
          <div className="ml-6">
            <DailyDevLogo />
          </div>
          <div className="flex flex-col items-center h-auto bg-[#0e1217] justify-center mt-10 signup-wrapper">
            <p
              className={
                errMsg ? "text-red-600 font-extrabold text-xl" : "offscreen"
              }
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <h1 className="text-white font-bold text-xl mb-4">Sign Up</h1>
            <form action="signup" onSubmit={handleSubmit}>
              <Mail email={email} setEmail={setEmail} />
              {/* Name */}
              <div className="w-96 mt-4">
                <label htmlFor="name"></label>
                <div
                  id="mail"
                  className="flex items-center cursor-pointer gap-2 border-2 text-[#a8b3cf] hover:text-white bg-[#a8b3cf] bg-opacity-5  border-transparent border-opacity-0 rounded-lg h-12 pl-5 "
                >
                  <div className="bg-transparent text-[#a8b3cf] hover:text-white size-5 ">
                    <FaUser />
                  </div>

                  <input
                    placeholder="Name"
                    name="name"
                    id="email"
                    className="self-stretch text-ellipsis w-full bg-transparent  focus:outline-none"
                    required
                    value={name}
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              {/* Name */}
              <div className="flex flex-col gap-5 w-96 mt-4">
                {formSignUp.map((input) => (
                  <Input
                    key={input.inputName}
                    inputIcon={input.inputIcon}
                    inputName={input.inputName}
                    inputIconOp={input.inputIconOp}
                    showPassword={
                      input.inputName === "Password" ? showPassword : true
                    }
                    password={password}
                    setPassword={setPassword}
                  />
                ))}
              </div>
              ;{/* Username */}
              <div className="w-96 ">
                <label htmlFor="name"></label>
                <div
                  id="mail"
                  className="flex items-center cursor-pointer gap-2 border-2 text-[#a8b3cf] hover:text-white bg-[#a8b3cf] bg-opacity-5  border-transparent border-opacity-0 rounded-lg h-12 pl-5 "
                >
                  <div className="bg-transparent text-[#a8b3cf] hover:text-white size-5 ">
                    <VscMention />
                  </div>

                  <input
                    placeholder="Username"
                    name="username"
                    id="email"
                    className="self-stretch text-ellipsis w-full bg-transparent  focus:outline-none"
                    value={userName}
                    type="text"
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
              </div>
              <SelectInput
                experienceLevel={experienceLevel}
                setExperienceLevel={setExperienceLevel}
              />
              <p className="w-96 mt-5 text-[#a8b3cf] text-base">
                Your email will be used to send you product and community
                updates
              </p>
              <hr className="w-96 border-[#a8b3cf] opacity-10 mt-5" />
              <div className="flex gap-2 items-center">
                <div className="bg-[#1e222a91] flex items-center justify-center rounded-md p-2 mt-4">
                  <input
                    type="checkbox"
                    className="size-4 accent-purple-500 bg-transparent "
                  />
                </div>
                <p className="text-[#a8b3cf] text-left w-96 mt-4 text-sm">
                  I don't want to receive updates and promotions via email
                </p>
              </div>
              <hr className="w-96 border-[#a8b3cf] opacity-10 mt-5" />
              <div className="w-96 text-black">
                <Btn
                  loading={loading}
                  disabled={loading}
                  btnContent={"Sign up"}
                />
              </div>
            </form>

            <Footer />
          </div>
        </div>
      )}{" "}
    </>
  );
};

export default SignUp;
