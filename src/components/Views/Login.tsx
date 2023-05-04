import React, { useEffect, useState } from "react";
import "@supabase/supabase-js";
import {SupabaseClient} from "@supabase/supabase-js";

interface LoginProps {
    supabase:SupabaseClient;
}
const LoginPage: React.FC<LoginProps> = ({supabase}) => {
    const [email, setEmail] = useState('');

    const handleLogin = async (email) => {
        try {
            // signIn is not a funcion
            const { error } = await supabase.auth.signIn({ email });
            if (error) throw error;
            alert('Check your email for the login link!');
        } catch (error) {
            alert(error.error_description || error.message);
        }
    };

    return (
        <div className='container mx-auto grid place-content-center min-h-screen'>
            <p className='mb-4'>Sign in via magic link with your email below</p>
            <input
                className='mb-4 border-2 border-gray-500 rounded-xl p-4 w-full'
                type='email'
                placeholder='Your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button
                onClick={(e) => {
                    e.preventDefault();
                    handleLogin(email);
                }}
                className='w-full mt-4 p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300'
            >
                <span>Send magic link</span>
            </button>
        </div>
    );
}

export default LoginPage;