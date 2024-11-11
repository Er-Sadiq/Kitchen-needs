import { useState } from "react";
import { Link } from 'react-router-dom';
import Login from "./Login";
import Signup from "./Signup";

function LoginForm() {
    const [isLogin, setIsLogin] = useState(true); // Changed to a more descriptive state name

    return (
        <div className="bg-MidNight max-w-lg w-full md:w-4/6 p-8 rounded-3xl shadow-xl flex flex-col items-center gap-5 text-fontColor border-2 border-slate-100">
            <div className="bg-slate-50 w-full py-4 flex flex-row rounded-2xl justify-center items-center">
                <button 
                    className="text-2xl font-semibold mr-2 hover:underline" 
                    onClick={() => setIsLogin(true)} // Correct usage of setState
                >
                    Login
                </button>
                
                <button 
                    className="text-2xl font-semibold hover:underline" 
                    onClick={() => setIsLogin(false)} // Correct usage of setState
                >| Sign Up Here </button>
            </div>

           <div className='w-full h-56  flex justify-center'> {isLogin ? <Login /> : <Signup />} </div>
                <Link className="  text-Accent cursor-pointer hover:text-white" to='/jobsheet'>Forgot Password</Link> 
            
        </div>
    );
}

export default LoginForm;
