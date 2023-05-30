import React, { useEffect, useState } from "react";
import "@supabase/supabase-js";
import {SupabaseClient} from "@supabase/supabase-js";

interface LoginProps {
    supabase:SupabaseClient;
}
const LoginPage: React.FC<LoginProps> = ({supabase}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        registerUser(email, password);
    };

    const registerUser = async (email, password) => {
        try {
            const { user, error } = await supabase.auth.signUp({
                email: email,
                password: password,
            });

            if (error) {
                throw error;
            }

            // Registration successful
            console.log('User registered:', user);
        } catch (error) {
            console.error('Registration error:', error.message);
        }
    };



    const loginUser = async (email:string, password:string) => {
        const { user, error } = await supabase.auth.signIn({ email, password });
        if (error) {
            // Handle login error
        } else {
            // User logged in successfully
        }
    };


    return (
        <div>
            <h1>Register User</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
                <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                <button type="submit">Register</button>
            </form>
        </div>
    );

}

export default LoginPage;