import React from "react";
import logo from "../assets/Netflix_Logo_PMS.png";

const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="img-wrapper py-2 px-30">
        <img src={logo} alt="logo" className="w-50" />
      </div>
      <div className="bg-black/80 p-5 w-3/12 text-white z-10 rounded mx-auto mt-10">
        <div className="text-3xl mb-10 font-bold">Sign In</div>
        <form>
          <input
            type="email"
            className="p-4 bg-gray-900 w-full rounded mb-8"
            placeholder="Email"
          />
          <input
            type="passsword"
            className="p-4 bg-gray-900 w-full rounded mb-10"
            placeholder="Password"
          />
          <button className="bg-red-700 text-white p-2 w-full rounded cursor-pointer hover:bg-red-800">
            Sign In
          </button>
          <p className="text-center mt-8">New to Netflix? Sign Up Now</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
