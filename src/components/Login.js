import React, { useState } from 'react'
import Header from './Header';

const Login = () => {

    const [isSignInFrom, setIsSignInForm] = useState(true);
    const toggleSignInFrom = () => {
        setIsSignInForm(!isSignInFrom);
    };

    return (
        <div>
            <Header/>
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/NZ-en-20250210-TRIFECTA-perspective_b03bd4a0-1ce6-446b-be96-ab54ab4e9331_medium.jpg"
                alt="logo" />
            </div>
            <from className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <h1 className='font-bold text-3xl py-4 px-2'>{isSignInFrom ? "Sign In" : "Sign Up"}</h1>
                {!isSignInFrom && <input type="text" placeholder="Full Name" className='p-4 my-4 w-full bg-gray-500'/>}
                <input type="text" placeholder="Email Address " className='p-4 my-4 w-full bg-gray-500'/> 
                <input type="password" placeholder="Password" className='p-4 my-4 w-full bg-gray-500'/>
                <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInFrom ? "Sign In" : "Sign Up"}</button>
                <p className='py-4 cursor-pointer' onClick={toggleSignInFrom}>{isSignInFrom ? "New to Netflix? Sign Up Now" : "Already a User? Sign Ip Now"}</p>
            </from>
        </div>
    )
}

export default Login;