import React, { useState } from "react";
import leftSignUp from "../Images/leftSignUp.png";

const Signup = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="grid grid-cols-1 w-full h-screen sm:grid-cols-2 overflow-hidden ">
      <div
        className=" sm:flex bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${leftSignUp})` }}
      >
        {/* <img
          className=" w-full object-cover h-[100%]"
          src={leftLogin}
          alt="login"
        /> */}

        {/* <LeftLogin /> */}
      </div>

      <div className="flex justify-center items-center">
        <div className="w-full flex justify-center items-center flex-col">
          <p className="text-center text-black font-medium text-[1.7rem]">
            WelcomeBack!
          </p>

          <p className="text-center">
            Sign up by entering the information below
          </p>

          <div className="w-full mt-5 flex justify-center items-center">
            <input
              type="text"
              placeholder="FirstName"
              className="w-[32rem] h-[4rem] outline-none px-2 text-[#000] rounded-[12.089px] border-[#C4C4C4] border-[1.712px]"
            />
          </div>

          <div className="w-full mt-10 flex justify-center items-center">
            <input
              type="text"
              placeholder="LastName:"
              className="w-[32rem] h-[4rem] outline-none px-2 text-[#000] rounded-[12.089px] border-[#C4C4C4] border-[1.712px]"
            />
          </div>

          <div className="w-full mt-10 flex justify-center items-center">
            <input
              type="email"
              placeholder="Email"
              className="w-[32rem] h-[4rem] outline-none px-2 text-[#000] rounded-[12.089px] border-[#C4C4C4] border-[1.712px]"
            />
          </div>

          <div className="w-full mt-10 flex justify-center items-center gap-8 relative">
           
            <input
              type={passwordShown ? "text" : "password"}
              placeholder="Password"
              className="w-[32rem] h-[4rem] outline-none px-2 text-[#000] rounded-[12.089px] border-[#C4C4C4] border-[1.712px]"

             
            />
             <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="37"
              viewBox="0 0 42 37"
              fill="none"
              className="absolute  top-1/2 transform -translate-y-1/2 cursor-pointer"
            >
              <g
                clip-path="url(#a)"
                stroke="#D3D3D3"
                stroke-width="3.022"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M24.492 21.961a5.084 5.084 0 0 1-1.64 1.05c-.62.248-1.29.381-1.969.392a5.57 5.57 0 0 1-1.982-.329 5.135 5.135 0 0 1-1.681-.998 4.53 4.53 0 0 1-1.113-1.507 4.125 4.125 0 0 1-.367-1.778c.012-.609.16-1.209.437-1.765a4.579 4.579 0 0 1 1.171-1.471m13.58 12.178c-2.88 1.97-6.387 3.06-10.008 3.113-11.794 0-18.534-12.088-18.534-12.088 2.096-3.503 5.003-6.563 8.526-8.976l20.016 17.951Zm-13.546-20.7a17.059 17.059 0 0 1 3.538-.363c11.794 0 18.534 12.088 18.534 12.088a28.004 28.004 0 0 1-3.64 4.82L17.382 7.032ZM2.386 2.137l37.068 33.242" />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M.701.626h40.437V36.89H.701z" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
