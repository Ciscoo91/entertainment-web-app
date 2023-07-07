import SignUpForm from "../components/SignUpForm";
import logo from "../assets/logo.svg"

const SignUp = () => {
    return ( 
       <section className="bg-dark h-screen">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <span className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-8 h-8 mr-2" src={logo} alt="logo" />
                </span>
                <div className="w-full bg-primary rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
                        <h1 className="text-xl leading-tight tracking-tight text-gray-900 md:text-2xl text-white">
                            Sign Up
                        </h1>
                        <SignUpForm />
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default SignUp;