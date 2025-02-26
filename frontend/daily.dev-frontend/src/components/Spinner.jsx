import React from "react";

const Spinner = () => {
  return (
    <div
      class="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-[#a8b3cf] rounded-full dark:text-[#a8b3cf]"
      role="status"
      aria-label="loading"
    ></div>
  );
};

export default Spinner;
