import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import {addUser , removeUser} from "../utils/userSlice";
import { useEffect } from 'react';
import { LOGO } from '../utils/constants';
import { toggleGptSearchview } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { changeLanguage } from '../utils/configSlice';


const Header = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  const handleClick =() => {
    dispatch(toggleGptSearchview());
  }

  useEffect(() => {

  const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid , email , displayName, photoURL} = user;
        dispatch(
          addUser({
            uid : uid ,
             email : email , 
             displayName : displayName , 
             photoURL : photoURL}));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
// unsubscribe when component unmounts
    return () => unsubscribe();
        },[]);

      const  handleLanguageChange = (e) => {
          dispatch(changeLanguage(e.target.value));
        }
  return (
    <div className='absolute px-16 py-4 w-screen bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44'
      src= {LOGO}
      alt='logo' />
     {
      user && 
      (<div className='flex p-2 ml-4'>
         {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
        <div> 
        <button onClick={handleClick}
        className=' px-4 mx-4 my-2 py-1 bg-purple-800 text-white rounded-lg'>
          {showGptSearch ? "Homepage" : "GPT Search"}
        </button>
        </div>
        <img className='w-10 h-10'
        src= {user?.photoURL}
        alt="userIcon" />
        <button onClick={handleSignOut}
        className='font-bold text-white ml-2 mb-3'>Sign Out</button>

      </div>)
     } 
      
    </div>
  )
}

export default Header;
