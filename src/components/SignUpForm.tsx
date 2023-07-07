import React from 'react'
import {Link} from "react-router-dom"

export default function SignUpForm() {
  return (
     <form className="space-y-4 md:space-y-6 flex flex-col items-center" action="#">
        <div className='w-full'>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-secondary"></label>
            <input type="email" name="email" id="email" className="w-full py-4 outline-none bg-primary border-b border-secondary" placeholder="Email address" />
        </div>
        <div className='w-full'>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-secondary"></label>
            <input type="password" name="password" id="password" className="w-full py-4 outline-none bg-primary border-b border-secondary" placeholder="Password" />
        </div>
        <div className='w-full'>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-secondary"></label>
            <input type="password" name="password" id="password" className="w-full py-4 outline-none bg-primary border-b border-secondary" placeholder="Repeat Password" />
        </div>
        <button type="submit" className="w-full  py-4 text-center rounded-md text-white bg-danger hover:bg-primary-700 focus:ring-4 focus:outline-none ">Create an account</button>
        <p className="text-sm font-light text-white">
            Already have an account ? <Link to="/login" className="font-medium text-danger hover:underline">Login</Link>
        </p>
    </form>
  )
}
