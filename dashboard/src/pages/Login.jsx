import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:3002/login",
                {
                    email: email,
                    password: password
                },
                {
                    withCredentials: true
                }
            );

            if (response.data.success) {
                alert("Login successful!");
                navigate("/");
            } else {
                alert(response.data.message);
            }

        } catch (error) {
            console.log(error);
            alert("Login failed");
        }
    };

    return (
    <div className="auth-container">

        <div className="auth-box">

            <h2>Login</h2>

            <form onSubmit={handleLogin}>

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
                        placeholder="Enter your password"
                    />
                </div>

                <button type="submit" className="auth-button">
                    Login
                </button>

            </form>

            <div className="auth-link">
                Don't have an account? <a href="/signup">Sign up</a>
            </div>

        </div>

    </div>
);
}

export default Login;