import React, { useRef, useState } from "react";
import logo from "../assets/Netflix_Logo_PMS.png";
import { validateData } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/slices/userSlice";
import profileImg from "../assets/profile.png";
import { signInUser, signUpUser } from "../utils/authService";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = async () => {
    setLoader(true);
    try {
      const message = validateData(email.current.value, password.current.value);
      if (message) {
        setErrorMessage(message);
        return;
      }

      let user;
      if (!isSignInForm) {
        user = await signUpUser(
          name.current.value,
          email.current.value,
          password.current.value,
          profileImg,
        );
      } else {
        user = await signInUser(email.current.value, password.current.value);
      }

      dispatch(
        addUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        }),
      );
    } catch (error) {
      setErrorMessage(error.code + "-" + error.message);
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="image-wrapper">
      <div className="img-wrapper py-2 px-30">
        <img src={logo} alt="logo" className="w-50" />
      </div>
      <div className="bg-black/80 p-5 w-3/12 text-white z-10 rounded mx-auto mt-10">
        <div className="text-3xl mb-10 font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <fieldset disabled={loader}>
            {!isSignInForm && (
              <input
                ref={name}
                type="text"
                className="p-4 bg-gray-900 w-full rounded mb-8"
                placeholder="Full Name"
              />
            )}
            <input
              ref={email}
              type="email"
              className="p-4 bg-gray-900 w-full rounded mb-8"
              placeholder="Email"
            />
            <input
              ref={password}
              type="password"
              className="p-4 bg-gray-900 w-full rounded mb-10"
              placeholder="Password"
            />
            <div className="text-red-500 font-bold mb-5">{errorMessage}</div>
            <button
              className="bg-red-700 text-white p-2 w-full rounded cursor-pointer hover:bg-red-800 disabled:cursor-not-allowed"
              onClick={handleSubmit}
            >
              {loader ? "Loading..." : isSignInForm ? "Sign In" : "Sign Up"}
            </button>
          </fieldset>

          <div className="text-center mt-8">
            {isSignInForm ? "New to Netflix?" : "Already Registered?"}{" "}
            <a
              className="cursor-pointer underline"
              onClick={() => setIsSignInForm(!isSignInForm)}
            >
              {isSignInForm ? "Sign Up" : "Sign In"}
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
