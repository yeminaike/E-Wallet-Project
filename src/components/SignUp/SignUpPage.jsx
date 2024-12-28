"use client";

import React from "react";
import SignUpText from "./SignUpText";

export default function SignUpPage() {
  return (
    <div className="">
      <div className="flex">
        <div
          className="hidden md:flex w-full  justify-center items-center bg-center bg-cover bg-no-repeat min-h-screen md:relative md:basis-1/2"
          style={{ backgroundImage: "url('/images/sign.svg')" }}
        ></div>

        <div className="w-full flex items-center justify-center md:basis-1/2">

        <SignUpText/>
          
        </div>


      </div>

     
    </div>
  );
}
