import React from "react";
import leftLoginPage from '../Images/leftLoginPage.png'
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="grid grid-cols-1 w-full h-screen sm:grid-cols-2 overflow-hidden">
      <div
        className=" sm:flex bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${leftLoginPage})` }}
      >
        {/* <img
          className=" w-full object-cover h-[100%]"
          src={leftLogin}
          alt="login"
        /> */}

        {/* <LeftLogin /> */}
      </div>

      <div className=" flex justify-center  items-center flex-col">
        <div className=" [@media(min-width:300px)]:w-[80%]  h-full  flex justify-center items-center flex-col">
          <p className="[@media(min-width:300px)]:text-center md:text-center sm:text-center text-black text-[1.9rem] font-medium">
            WelcomeBack!
          </p>
          <p className="[@media(min-width:300px)]:text-center md:text-center sm:text-center">
            Login to to your Dashboard
          </p>
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full mt-16">
              {errors.email && errors.email.type === "required" && (
                <p className="text-red-600">Email is required</p>
              )}

              {errors.email && errors.email.type === "pattern" && (
                <p className="text-red-600">Email is not valid</p>
              )}

              <input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Email is not valid.",
                  },
                })}
                className="  outline-none px-2 w-full text-[#000] h-[4rem] rounded-[13.697px] border-[#C4C4C4] border-[1.712px]"
              />
            </div>

            <div className="w-full py-[31px] mt-1">
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "checkLength" && (
                <p className="text-red-600">
                  Password must be a minimum of 8 characters
                </p>
              )}

              {errors.password?.type === "matchPattern" && (
                <p className="text-red-600">
                  Password should contain at least one uppercase letter, lowercase letter, digit
                   and special symbol
                </p>
              )}

              <input
                type="password"
                placeholder="password"
                {...register("password", {
                  required: true,
                  validate: {
                    checkLength: (value) => value.length >= 6,
                    matchPattern: (value) =>
                      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(
                        value
                      ),
                  },
                })}
                className="outline-none px-2 w-full text-[#000] h-[4rem] rounded-[13.697px] border-[#C4C4C4] border-[1.712px]"
              />
            </div>

            <div className="[@media(min-width:280px)]:gap-2 flex justify-between items-center w-full">
              <div className="flex items-center gap-x-2">
                <input type="checkbox" id="remember-me" className="" />

                <label htmlFor="remember-me">Remember me</label>
              </div>

              <div className="flex gap-[0.2px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="21"
                  viewBox="0 0 8 21"
                  fill="none"
                >
                  <path
                    d="M0.977383 17.4422H1.77996V11.6452H0.977383C0.534119 11.6452 0.174805 11.2859 0.174805 10.8427V8.92566C0.174805 8.4824 0.534119 8.12308 0.977383 8.12308H5.47182C5.91508 8.12308 6.2744 8.4824 6.2744 8.92566V17.4422H7.07697C7.52024 17.4422 7.87955 17.8015 7.87955 18.2448V20.1618C7.87955 20.605 7.52024 20.9643 7.07697 20.9643H0.977383C0.534119 20.9643 0.174805 20.605 0.174805 20.1618V18.2448C0.174805 17.8015 0.534119 17.4422 0.977383 17.4422ZM4.02718 0.418335C2.43145 0.418335 1.1379 1.71189 1.1379 3.30762C1.1379 4.90334 2.43145 6.1969 4.02718 6.1969C5.6229 6.1969 6.91646 4.90334 6.91646 3.30762C6.91646 1.71189 5.62286 0.418335 4.02718 0.418335Z"
                    fill="#55229E"
                  />
                </svg>
                <p>Forgot Password</p>
              </div>
            </div>

            <div className="rounded-[13.618px] border border-[#56229E] bg-[#55229E] w-full h-[70px] text-center pt-3 mt-3">
              <button className="">
                <p className="font-bold text-2xl font-sans text-white">Login</p>
              </button>
            </div>

            <div className="flex justify-between items-center w-full ">
              <div className="">
                <p className="text-[#C4C4C4]">Don't have an Account?</p>
              </div>

              <button className="">
                <a className="text-[#55229E] underline" href="/login">
                  signup
                </a>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
