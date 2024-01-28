import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { auth } from '../utils/firebase';
import {  createUserWithEmailAndPassword , signInWithEmailAndPassword , updateProfile} from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { USER_AVATAR } from '../utils/constants';

const Login = () => {

  const [isSignIn , setIsSignIn] = useState(true);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const toggleHandler = () => {
    setIsSignIn(!isSignIn);
  }

  const clickHandler = () => {
      // validate the email and password
     // console.log(email.current.value);
      //console.log(password.current.value);
      const message = checkValidData(email.current.value , password.current.value);
      console.log(message);
      setErrorMessage(message);

      if(message) return;

      if(!isSignIn) {
        // Sign Up Logic
        
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value ,
     photoURL: USER_AVATAR,
    }).then(() => {
      // Profile updated!
      const {uid , email , displayName, photoURL} = auth.currentUser;
      dispatch(
        addUser({
          uid : uid ,
           email : email , 
           displayName : displayName , 
           photoURL : photoURL}));
     
    }).catch((error) => {
      // An error occurred
      setErrorMessage(error.message);
    });
  
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    setErrorMessage(errorCode + " - " + errorMessage);
  });
      }
      else {
        // Sign In Logic
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + " - " + errorMessage);

  });
      }
  }
  return (
    <div>
      <Header />
      <div>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        className='absolute'
        alt = "Logo" />
      </div>
      <form onSubmit={(e) => e.preventDefault()}
      className="w-4/12 absolute p-14 bg-black my-20 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80" >
        
          <h1>
            {isSignIn ? "Sign In" : "Sign Up"}
            </h1>
          {!isSignIn && 
          <input ref = {name} type="text" placeholder='Full Name' className="p-4 my-4 w-full bg-gray-700 text-lg" />
          }
        <input ref={email}
        type="text" placeholder='Email or password' className="p-4 my-4 w-full bg-gray-700 text-lg" />

        <input ref={password}
        type="password" placeholder='password' className="p-4 my-4 w-full bg-gray-700 text-lg" />

        <p className='text-red-500 font-bold text-lg'>{errorMessage}</p>

        <button className='p-2 my-4 bg-red-700 w-full rounded-lg text-lg'
        onClick={clickHandler}
        >
             {isSignIn ? "Sign In" : "Sign Up"}
          </button>
        <p onClick={toggleHandler} className='cursor-pointer text-base mt-3 ml-4 text-gray-300'>
        {isSignIn ? "New to Netflix ? Sign Up Now." : "Already a member ? Sign In Now."}
          </p>
      </form>
    </div>
  )
}

export default Login;




