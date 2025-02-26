import React, { useState } from "react";
import "../../styles/Onboarding/Onboarding.css";
import { TbMail } from "react-icons/tb";
import onboardingGoogle from "../../images/onboardingGoogle.svg";
import onboardingGitHub from "../../images/onboardingGitHub.svg";
import OnboardingBtn from "../../components/onboarding/OnboardingBtn";
import LoginBtn from "../../components/onboarding/LoginBtn";
import { FaArrowRightLong } from "react-icons/fa6";
import Spinner from "../../components/Spinner";
import Footer from "../../components/onboarding/Footer";
import { Link, useNavigate } from "react-router-dom";
const Onboarding = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
    localStorage.setItem("email", email);
    navigate("/onboarding/signup");
  };
  const onboardingBtns = [
    {
      onboardingBtnIcon: onboardingGoogle,
      onboardingBtnText: "Google",
    },
    {
      onboardingBtnIcon: onboardingGitHub,
      onboardingBtnText: "GitHub",
    },
  ];

  return (
    <section className="container-onboarding h-full pt-3">
      <div className="onboarding-wrapper h-full ">
        <div className="header-onboarding">
          <div className="mt-4">
            <img
              src="https://cdn.prod.website-files.com/5e0a5d9d743608d0f3ea6753/5f1d8b1b9c7814aae6b69044_Daily%20Full%20logo.svg"
              width="160"
              alt="Daily Logo"
              className="logo-link"
            ></img>
          </div>
          <div className="flex gap-3 items-center">
            <p className="text-[#a8b3cf] already-using">
              Already using daily dev?
            </p>
            <Link to="/onboarding/login">
              <LoginBtn logInBtnContent={"Log in"} />
            </Link>
          </div>
        </div>

        <div className="paragraph mt-2">
          <h1 className="font-black  title-onboarding pb-1 bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 text-transparent ">
            Where developers suffer together
          </h1>
          <p className="text-white onboarding-p w-96 pb-5">
            We know how hard it is to be a developer. It doesn't have to be.
            Personalized news feed, dev community and search, much better than
            what's out there. Maybe ;)
          </p>
          <form action="connexion" onSubmit={handleSubmit}>
            <label htmlFor="name"></label>
            <div
              id="mail"
              className="flex input-onboarding items-center cursor-pointer gap-2 border-2 text-[#a8b3cf] hover:text-white w-96 bg-[#a8b3cf] bg-opacity-5  border-transparent border-opacity-0  rounded-lg h-12 pl-5 "
            >
              <TbMail className="bg-transparent text-[#a8b3cf] hover:text-white size-5 " />
              <input
                placeholder="Email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="self-stretch text-ellipsis w-full bg-transparent  focus:outline-none"
                required
                type="email"
              />
            </div>

            <button
              onClick={handleSignUp}
              disabled={loading}
              className=" media-onboard-btn mt-7 justify-center w-96 rounded-xl border-transparent p-3 gap-1 bg-white flex items-center"
            >
              <p className="font-bold ">
                {" "}
                {!loading ? "Sign up - Free Forever" : <Spinner />}
              </p>
              <FaArrowRightLong className="arrow" size={15} />
            </button>
            <div className=" flex text-[#a8b3cf] items-center gap-3">
              <hr className="w-32 line h-10 border-[#a8b3cf72]  mt-10 " />
              <p className="text-sm signup">Or sign up with</p>
              <hr className="w-32 line h-10 border-[#a8b3cf72] mt-10 " />
            </div>
            <div className="flex flex-col gap-5 w-96">
              {onboardingBtns.map((btn) => (
                <OnboardingBtn
                  key={btn.onboardingBtnIcon}
                  onboardingBtnIcon={btn.onboardingBtnIcon}
                  onboardingBtnText={btn.onboardingBtnText}
                />
              ))}
            </div>
            <p className="text-[#a8b3cf] text-xs  mt-3">
              By signing up I accept the{" "}
              <a className="underline font-bold" href="https://daily.dev/tos">
                Terms of Service
              </a>{" "}
              and the{" "}
              <a
                className="underline font-bold"
                href="https://daily.dev/privacy/applications-policy"
              >
                Privacy Policy
              </a>
              .
            </p>
          </form>
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default Onboarding;
