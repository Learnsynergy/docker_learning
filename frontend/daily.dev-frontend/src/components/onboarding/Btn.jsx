import React from "react";
import Spinner from "../Spinner";

const Btn = ({ btnContent, loading, disabled }) => {
  return (
    <button
      disabled={disabled}
      className=" media-onboard-btn mt-7 justify-center rounded-xl border-transparent p-3 gap-1 bg-white w-full flex items-center"
    >
      <p className="font-bold "> {!loading ? btnContent : <Spinner />}</p>
    </button>
  );
};

export default Btn;
