import { useState } from "react";
import { Link } from 'react-router-dom';

function Signup() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {



        setUsername('');
        setPassword('');
    };


    return (
        <div className='flex flex-col gap-4 justify-center items-center w-full'>

            <input

                className="bg-[#404254] w-5/6 h-12 text-Accent border border-[#50526b] rounded-xl px-4 outline-none focus:border-sWhite transition-colors"
                placeholder="Enter your Name" aria-label="Name" type="text" value={name} onChange={handleUsernameChange} id="name" />

            <input

                className="bg-[#404254] w-5/6 h-12 text-Accent border border-[#50526b] rounded-xl px-4 outline-none focus:border-sWhite transition-colors"
                placeholder="Enter your Username" aria-label="Username" type="text" value={username} onChange={handleUsernameChange} id="username" />
            <input className="bg-[#404254] w-5/6 h-12 text-Accent border border-[#50526b] rounded-xl px-4 outline-none focus:border-sWhite transition-colors" placeholder="Enter your Password" aria-label="Password" type="password" value={password} onChange={handlePasswordChange} id="password" />

            <button
                className="bg-Accent py-2 px-6 rounded-md w-40 text-lg font-medium hover:bg-violet-600 transition-colors"
                onClick={handleLogin} // Handle login on button click
            >
                Sign Up
            </button>
        </div>
    )
}

export default Signup