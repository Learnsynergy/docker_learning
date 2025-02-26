import React from "react";
const Input = ({
  inputIcon,
  inputIconOp,
  inputName,
  showPassword,
  password,
  setPassword,
}) => {
  return (
    <div>
      <label htmlFor="name"></label>
      <div
        id="mail"
        className="flex items-center cursor-pointer gap-2 border-2 text-[#a8b3cf] hover:text-white bg-[#a8b3cf] bg-opacity-5  border-transparent border-opacity-0 rounded-lg h-12 pl-5 "
      >
        <div className="bg-transparent text-[#a8b3cf] hover:text-white size-5 ">
          {inputIcon}
        </div>

        <input
          placeholder={inputName}
          name="password"
          id="email"
          className="self-stretch text-ellipsis w-full bg-transparent  focus:outline-none"
          required
          value={password}
          type={showPassword ? "text" : "password"}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="size-6 mr-4">{inputIconOp}</div>
      </div>
    </div>
  );
};

export default Input;
