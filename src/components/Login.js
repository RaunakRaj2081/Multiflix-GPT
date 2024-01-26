import React, { useState } from 'react'
import Header from './Header';

const Login = () => {

  const [isSignIn , setIsSignIn] = useState(true);

  const toggleHandler = () => {
    setIsSignIn(!isSignIn);
  }
  return (
    <div>
      <Header />
      <div>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        className='absolute'
        alt = "Logo" />
      </div>
      <form 
      className="w-4/12 absolute p-14 bg-black my-20 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80" >
        
          <h1>
            {isSignIn ? "Sign In" : "Sign Up"}
            </h1>
          {!isSignIn && 
          <input type="text" placeholder='Full Name' className="p-4 my-4 w-full bg-gray-700 text-lg" />
          }
        <input type="text" placeholder='Email or password' className="p-4 my-4 w-full bg-gray-700 text-lg" />

        <input type="password" placeholder='password' className="p-4 my-4 w-full bg-gray-700 text-lg" />

        <button className='p-2 my-4 bg-red-700 w-full rounded-lg text-lg'>
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




