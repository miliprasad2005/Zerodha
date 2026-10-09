import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:3002/signup",
                {
                    username: username,
                    email: email,
                    password: password
                },
                {
                    withCredentials: true
                }
            );

            if (response.data.success) {
                alert("Signup successful!");

                navigate("/login");
            } else {
                alert(response.data.message);
            }

        } catch (error) {
            console.log(error);
            alert("Signup failed");
        }
    };

    return (
    <div className="auth-container">

        <div className="auth-box">

            <h2>Create Account</h2>

            <form onSubmit={handleSignup}>

                <div className="auth-group">
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username"
                    />
                </div>

                <div className="auth-group">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                    />
                </div>

                <div className="auth-group">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Create a password"
                    />
                </div>

                <button type="submit" className="auth-button">
                    Sign Up
                </button>

            </form>

            <div className="auth-link">
                Already have an account? <a href="/login">Login</a>
            </div>

        </div>

    </div>
);
}

export default Signup;