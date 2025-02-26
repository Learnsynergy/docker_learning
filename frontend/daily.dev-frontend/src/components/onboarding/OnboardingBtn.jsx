import React from "react";

const OnboardingBtn = ({ onboardingBtnText, onboardingBtnIcon }) => {
  return (
    <div>
      <button className=" media-onboard-btn  justify-center rounded-xl border-transparent p-3 gap-1 bg-white w-full flex items-center">
        <img className="size-6" src={onboardingBtnIcon} alt="media" />
        <p className="text-black font-bold">{onboardingBtnText}</p>
      </button>
    </div>
  );
};

export default OnboardingBtn;
