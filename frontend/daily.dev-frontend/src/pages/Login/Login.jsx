import React, { useState, useContext, useRef, useEffect } from "react";
import Spinner from "../../components/Spinner";
import "../../styles/Spinner/Spinner.css";
import AuthContext from "../../Context/AuthProvider";
import DailyDevLogo from "../../components/DailyDevLogo/DailyDevLogo";
import onboardingGoogle from "../../images/onboardingGoogle.svg";
import onboardingGitHub from "../../images/onboardingGitHub.svg";
import onboardingApple from "../../images/onboardingApple.svg";
import onboardingFacebook from "../../images/onboardingFacebook.svg";
import OnboardingBtn from "../../components/onboarding/OnboardingBtn";
import { TbMail } from "react-icons/tb";
import { CiLock } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoEyeOffOutline } from "react-icons/io5";
import axios from "../../api/client";
import Footer from "../../components/onboarding/Footer";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const loginBtns = [
    {
      onboardingBtnIcon: onboardingFacebook,
      onboardingBtnText: "Facebook",
    },
    {
      onboardingBtnIcon: onboardingGoogle,
      onboardingBtnText: "Google",
    },
    {
      onboardingBtnIcon: onboardingGitHub,
      onboardingBtnText: "GitHub",
    },
    {
      onboardingBtnIcon: onboardingApple,
      onboardingBtnText: "Apple",
    },
  ];

  const { setIsAuth } = useContext(AuthContext);
  const emailRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setShowPassword(!showPassword);
  };
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("/auth/login", {
        email,
        password,
      });

      const token = response?.data?.token;
      localStorage.setItem("token", token);
      localStorage.setItem("username", response?.data?.user?.username);
      localStorage.setItem("reputation", response?.data?.user?.reputation);
      localStorage.setItem("email", response?.data?.user?.email);

      setIsAuth(true);
      setEmail("");
      setPassword("");
      if (response.data.token) {
        navigate("/myfeed");
      }
    } catch (err) {
      if (!err.response) {
        setErrMsg("No server response");
      } else if (err.response.status === 400) {
        setErrMsg("Missing email or password");
      } else if (err.response.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login failed");
      }
      errRef.current.focus();
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#0e1217] h-full pb-5 overflow-hidden">
      <DailyDevLogo size={10} />
      <div className="flex flex-col items-center justify-center mt-10  ">
        <p
          ref={errRef}
          className={errMsg ? "text-red-600 font-extrabold" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <h1 className="text-white font-bold text-xl">Log in</h1>
        <div className="flex flex-col gap-5 w-96 mt-4 btn-mobile">
          {loginBtns.map((btn) => (
            <OnboardingBtn
              className="btn-login-media"
              key={btn.onboardingBtnIcon}
              onboardingBtnIcon={btn.onboardingBtnIcon}
              onboardingBtnText={btn.onboardingBtnText}
            />
          ))}
        </div>
        <div className=" flex  full-line text-[#a8b3cf] items-center gap-3">
          <hr className="w-44 h-10 border-[#a8b3cf72]  mt-10 " />
          <p className="text-sm">Or </p>
          <hr className="w-44 h-10 border-[#a8b3cf72] mt-10 " />
        </div>
        <form className="w-96" onSubmit={handleSubmit}>
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
              ref={emailRef}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <label htmlFor="password"></label>
          <div
            id="mail"
            className="flex items-center mt-5 cursor-pointer gap-2 border-2 text-[#a8b3cf] hover:text-white bg-[#a8b3cf] bg-opacity-5  border-transparent border-opacity-0 rounded-lg h-12 pl-5 "
          >
            <CiLock className="bg-transparent text-[#a8b3cf] hover:text-white size-5 " />
            <input
              placeholder="Password"
              name="password"
              id="password"
              className="self-stretch text-ellipsis w-full bg-transparent focus:outline-none"
              required
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {showPassword ? (
              <MdOutlineRemoveRedEye
                onClick={handleClick}
                className="size-6 mr-4"
              />
            ) : (
              <IoEyeOffOutline className="size-6 mr-4" onClick={handleClick} />
            )}
          </div>
          <div className="flex justify-between mt-4">
            <Link to="/onboarding/send-code">
              <p className="text-[#a8b3cf] cursor-pointer">Forgot password?</p>
            </Link>
            <button
              disabled={loading}
              className="border-2 font-bold p-2 w-40 rounded-xl  bg-white   "
            >
              {!loading ? "Log in" : <Spinner />}
            </button>
          </div>
        </form>
        <hr className="w-96 h-10 border-[#a8b3cf72] mt-5 " />
        <p className=" text-[#a8b3cf]">
          Not a member yet?{" "}
          <a className="underline text-white" href="/onboarding/signup">
            Sign up
          </a>
        </p>
        <Footer />
      </div>
    </section>
  );
};

export default Login;
