import React, { useRef, useState } from "react";
import Header from "./Header";
import { formValidate } from "../utils/FormValidate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const [message, setMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleForm = () => {
    let currentEmail = email.current.value;
    let currentPassword = password.current.value;

    let errorMessage = formValidate(currentEmail, currentPassword);
    setMessage(errorMessage);
    if (errorMessage) return;

    if (!isSignIn) {
      //signup logic

      createUserWithEmailAndPassword(auth, currentEmail, currentPassword)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName: fullName.current.value,
            // photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              const { displayName, email, uid } = auth.currentUser;
              dispatch(
                addUser({
                  displayName: displayName,
                  email: email,
                  uid: uid,
                }),
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
              const errorCode = error.code;
              const errorMessage = error.message;
              setMessage(errorCode + " " + errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(errorCode + " " + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(auth, currentEmail, currentPassword)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BG_IMG}
          alt=""
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute text-white  bg-black  p-16 w-3/12 my-36 mx-auto left-0 right-0 bg-opacity-80 "
      >
        <h1 className="font-bold  text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={fullName}
            className="p-4 my-4 w-full bg-gray-800 rounded-md"
            type="text"
            placeholder="Full Name "
          />
        )}
        <input
          ref={email}
          className="p-4 my-4 w-full bg-gray-800 rounded-md"
          type="text"
          placeholder="Email Address "
        />
        <input
          ref={password}
          className="p-4 my-4 w-full bg-gray-800  rounded-md"
          type="password"
          placeholder="Password"
        />

        <p className="py-4 text-red-600 font-bold">{message}</p>
        <button
          onClick={handleForm}
          className="bg-red-700 w-full p-4 my-4 rounded-lg"
          type="submit"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4 cursor-pointer" onClick={handleSignIn}>
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already a existing user?  Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
