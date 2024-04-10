import React from "react";
import google from "../assets/google-icon.svg";
const Form = () => {
  return (
    <div className="bg-white px-10 py-10  rounded-3xl ">
      <h1 className="text-4xl font-semibold">Welcome Back</h1>
      <p className=" font-medium text-lg text-gray-500 mt-4">
        Welcome back! Please enter your details.
      </p>
      <div className=" mt-6">
        <div>
          <label className=" text-lg font-medium">Email </label>
          <input
            className=" w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent"
            placeholder="Enter your email"
          />
        </div>
        <div className="mt-2.5">
          <label className="  text-lg font-medium">Password </label>
          <input
            className=" w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent"
            placeholder="Enter your password"
            type="password"
          />
        </div>
        <div className="mt-6 flex justify-between items-center">
          <div>
            <input id="remember" type="checkbox" />
            <label className="ml-2 font-medium text-base" htmlFor="remember">
              Remember for 30 days
            </label>
          </div>
          <button className=" font-medium text-base text-violet-500">
            Forget password
          </button>
        </div>
        <div className="mt-6 flex flex-col gap-y-4">
          <button className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 bg-violet-500 text-white rounded-xl text-lg font-bold">
            Sign in
          </button>
          <button className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-xl border-2 border-gray-100 flex item-center justify-center gap-2">
            <img className="w-[24px] h-[24px]" src={google} alt="/" />
            Sign in with Google
          </button>
        </div>
        <div className="mt-6 flex justify-center items-center">
          <p className=" font-medium text-base">Don't have an account?</p>
          <button className=" text-violet-500 text-base font-medium ml-2">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
