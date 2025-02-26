import React from "react";
import { TbMail } from "react-icons/tb";

const Mail = ({ email, setEmail }) => {
  return (
    <div>
      <label htmlFor="name"></label>
      <div
        id="mail"
        className="w-96 flex items-center cursor-pointer gap-2 border-2 text-[#a8b3cf] hover:text-white bg-[#a8b3cf] bg-opacity-5  border-transparent border-opacity-0 rounded-lg h-12 pl-5 "
      >
        <TbMail className="bg-transparent text-[#a8b3cf] hover:text-white size-5 " />
        <input
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="self-stretch text-ellipsis w-full bg-transparent  focus:outline-none"
          readOnly
          type="email"
          placeholder="Email"
        />
      </div>
    </div>
  );
};

export default Mail;
