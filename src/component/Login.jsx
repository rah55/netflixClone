import React, { useRef, useState } from "react";
import Header from "./Header";
import { formValidate } from "../utils/FormValidate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const[message,setMessage]=useState();
  const email = useRef();
  const password = useRef();

  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleForm = ()=>{
    let currentEmail = email.current.value;
    let currentPassword = password.current.value;
    console.log(currentPassword)
    let errorMessage= formValidate(currentEmail,currentPassword);
    console.log(errorMessage)
    setMessage(errorMessage);
  }

  

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/e49aba81-ee7c-4f19-baef-7c54bbab003e/web/IN-en-20260202-TRIFECTA-perspective_04f5de39-b518-493c-9a8d-6aef11af0457_medium.jpg"
          alt=""
        />
      </div>

      <form onSubmit={e=>e.preventDefault()} className="absolute text-white  bg-black  p-16 w-3/12 my-36 mx-auto left-0 right-0 bg-opacity-80 ">
        <h1 className="font-bold  text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            className="p-4 my-4 w-full bg-gray-800 rounded-md"
            type="text"
            placeholder="Full Name "
          />
        )}
        <input ref={email}
          className="p-4 my-4 w-full bg-gray-800 rounded-md"
          type="text"
          placeholder="Email Address "
        />
        <input ref={password}
          className="p-4 my-4 w-full bg-gray-800  rounded-md"
          type="password"
          placeholder="Password"
        />

        <p className="py-4 text-red-600 font-bold">{message}</p>
        <button onClick={handleForm}  className="bg-red-700 w-full p-4 my-4 rounded-lg" type="submit">
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
