import { SyntheticEvent, useState } from "react"
import {Link, Navigate, useNavigate} from "react-router-dom"
import { login } from "../api/api"
import userStore from "../store"

export default function LoginForm() {

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [error, setError] = useState<string|null>(null)
  const [authenticate] = userStore(state => [state.authenticate])
  const navigate = useNavigate()

  async function handleSubmit(event: SyntheticEvent){
    event.preventDefault()
    try{
      const {data} = await login(email, password)
      authenticate(data.user, data.accessToken)
      navigate("/")
    }catch(error: any){
      setError(error)
    }
  }

  return (
    <form className="space-y-4 md:space-y-6 flex flex-col items-center" onSubmit={handleSubmit}>
        <div className='w-full'>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-secondary"></label>
            <input type="email" name="email" id="email" className="w-full py-4 outline-none bg-primary border-b border-secondary text-white" placeholder="Email address"  onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className='w-full'>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-secondary"></label>
            <input type="password" name="password" id="password" className="w-full py-4 outline-none bg-primary border-b border-secondary text-white" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="w-full  py-4 text-center rounded-md text-white bg-danger hover:bg-primary-700 focus:ring-4 focus:outline-none ">Login to your account</button>
        <p className="text-sm font-light text-white">
            Don’t have an account yet? <Link to="sign-up" className="font-medium text-danger hover:underline">Sign up</Link>
        </p>
    </form>
  )
}
