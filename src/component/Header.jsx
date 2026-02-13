import React ,{ useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO_URL } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
        console.log(error);
        // An error happened.n
      });
  };

  useEffect(() => {
   const unsubscribed= onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, password, displayName } = user;

        dispatch(
          addUser({
            uid: uid,
            email: email,
            password: password,
            displayName: displayName,
          }),
        );
        // ...
        navigate("/browse");
      } else {
        dispatch(removeUser());

        // User is signed out
        navigate("/");
        // ...
      }
    });

    return ()=>{
      unsubscribed()
    }
  }, []);

  return (
    <div className=" flex justify-between items-center absolute px-5 py-2 bg-gradient-to-b from-black z-10 w-full">
      <img
        className="w-44 "
        src={NETFLIX_LOGO_URL}
        alt="netflix logo "
      />
      {user && (
        <div className="flex justify-between items-center ">
        <p className="mx-2 border-b-2 font-bold text-red-700"> Welcome ! {user.displayName}</p>
        <button
          onClick={handleSignout}
          className="bg-red-700 rounded h-10 px-2 text-white"
        >
          Sign Out
        </button>
        </div>
      )}
    </div>
  );
};

export default Header;
