import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [username, setUsername] = useState(''); // Track username input
    const [password, setPassword] = useState(''); // Track password input
    const navigate = useNavigate(); // Navigation hook

    // Handle input changes
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = async () => {
        // Check if both username and password are provided
        if (!username || !password) {
            alert('Please enter both username and password');
            return;
        }

        try {
            // Make POST request with the username and password as path variables
            const response = await axios.post(`http://localhost:8080/user/${username}/${password}`);

            if (response.data) {
                // Redirect based on the username and password
                if (username === "Auth@dev" && password === "sign@BH") {
                    navigate('/adminboard'); // Redirect to Admin Dashboard
                } else {
                    navigate('/jobsheet', { state: { username: username } }); // Redirect to regular user dashboard
                }
            } else {
                alert('Invalid credentials, please try again.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('An error occurred during login. Please try again later.');
        }

        // Reset input fields after attempting login
        setUsername('');
        setPassword('');
    };

    return (
        <div className='flex flex-col gap-4 justify-center items-center w-full'>
            <input
                className="bg-[#404254] w-5/6 h-12 text-Accent border border-[#50526b] rounded-xl px-4 outline-none focus:border-sWhite transition-colors"
                placeholder="Enter your Username"
                aria-label="Username"
                type="text"
                value={username}
                onChange={handleUsernameChange}
                id="username"
            />
            <input
                className="bg-[#404254] w-5/6 h-12 text-Accent border border-[#50526b] rounded-xl px-4 outline-none focus:border-sWhite transition-colors"
                placeholder="Enter your Password"
                aria-label="Password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                id="password"
            />
            <button
                className="bg-Accent py-2 px-6 rounded-md w-40 text-lg font-medium hover:bg-violet-600 transition-colors"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    );
}

export default Login;
