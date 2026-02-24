import React ,{ useEffect } from "react";
import { auth } from "../utils/firebase";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO_URL } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSlice";
import { clearMovieList } from "../utils/movieSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const gpt = useSelector((store) => store.gpt);
  const location = useLocation();
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
        
        // An error happened.n
      });
  };

  const handleSearch = ()=>{
    dispatch(toggleGptSearch(!gpt.gptOption));
    dispatch(clearMovieList());
    
  }

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
        if (location.pathname === "/") {
        navigate("/browse");
      }
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
  }, [location.pathname]);

  return (
    <div className="flex flex-col   md:flex-row justify-between absolute px-5 py-2 bg-gradient-to-b from-black z-10 w-full">
      <img
        className=" w-44 mx-auto md:mx-0"
        src={NETFLIX_LOGO_URL}
        alt="netflix logo "
      />
      {user && (
        <div className="flex justify-center md:justify-between items-center ">
        <p className="mx-2 text-xs md:text-lg border-b-2 font-bold text-red-700"> Welcome ! {user.displayName}</p>
        <button
          onClick={handleSearch}
          className="bg-purple-700 rounded h-8 md:h-10 px-2 mr-1 text-white"
        >
          {gpt?.showGptOption ? "Homepage": " Search"}
         
        </button>
        <button
          onClick={handleSignout}
          className="bg-red-700 rounded h-8 md:h-10 px-2 text-white"
        >
          Sign Out
        </button>
        </div>
      )}
    </div>
  );
};

export default Header;
