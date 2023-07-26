import { SyntheticEvent, useState } from "react"
import {Link} from "react-router-dom"
import userStore from "../store"
import { register } from "../api/api"

export default function SignUpForm() {

    const [user, accessToken] = userStore(state => [state.user, state.accessToken])

    const [email, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [passwordRepeated, setPasswordRepeated] = useState<string>("")

    async function handleSubmit(event: SyntheticEvent){
        event.preventDefault()
        if(password == passwordRepeated){
            const response = await register(email, password)
            console.log(response.data)
        }
    }
    return (
        <form className="space-y-4 md:space-y-6 flex flex-col items-center" onSubmit={handleSubmit}>
            <div className='w-full'>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-secondary"></label>
                <input type="email" name="email" id="email" className="w-full py-4 outline-none bg-primary border-b border-secondary text-white" placeholder="Email address" value={email} onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className='w-full'>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-secondary"></label>
                <input type="password" name="password" id="password" className="w-full py-4 outline-none bg-primary border-b border-secondary text-white" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className='w-full'>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-secondary"></label>
                <input type="password" name="password" id="passwordRepeated" className="w-full py-4 outline-none bg-primary border-b border-secondary text-white" placeholder="Repeat Password" value={passwordRepeated} onChange={(e) => setPasswordRepeated(e.target.value)} />
            </div>
            <button type="submit" className="w-full  py-4 text-center rounded-md text-white bg-danger hover:bg-primary-700 focus:ring-4 focus:outline-none ">Create an account</button>
            <p className="text-sm font-light text-white">
                Already have an account ? <Link to="/login" className="font-medium text-danger hover:underline">Login</Link>
            </p>
        </form>
    )
}
