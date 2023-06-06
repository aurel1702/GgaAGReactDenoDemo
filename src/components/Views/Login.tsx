import React, { useEffect, useState } from "react";
import "@supabase/supabase-js";
import {SupabaseClient} from "@supabase/supabase-js";
import {ThemeSupa} from "@supabase/auth-ui-shared";
import {Auth} from "@supabase/auth-ui-react";
import Snake from "../../games/Snake.tsx";
import {AppViews} from "../../App.tsx";

interface LoginProps {
    supabase:SupabaseClient
}
const LoginPage: React.FC<LoginProps> = ({supabase}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [session, setSession] = useState(null);
    const [user, setUser] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmitR = (e) => {
        e.preventDefault();
        registerUser(email, password);
    };

    const handleSubmitL = (e) => {
        e.preventDefault();
        signInWithEmail(email, password);
    };

    const registerUser = async (email, password) => {
        try {
            const { data, error } = await supabase.auth.signUp({
                email: email,
                password: password,
            })

            setSession(data.session);
            setUser(data.user);
        } catch (error) {
            console.error('Registration error:', error.message);
        }
    };

    const signInWithEmail = async (email,password) => {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            })

            setSession(data.session);
            setUser(data.user);
            console.log(data);
        } catch (error) {
            console.error('Registration error:', error.message);
        }
    }

    const signOut = async () => {
        const { error } = await supabase.auth.signOut()

    }

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
        });

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })

        return () => subscription.unsubscribe()
    }, [])


    if (!session) {
        return (
            <div>
                <h1>Register User</h1>
                <form onSubmit={handleSubmitR}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <button type="submit">Register</button>
                </form>

                <h1>Login User</h1>
                <form onSubmit={handleSubmitL}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    } else {
        return <div>
            <Snake></Snake>
            <button onClick={() => signOut()} type="submit">Signout</button>
        </div>;
    }
};

export default LoginPage;

/*

           <Auth
                supabaseClient={supabase}
                appearance={{ theme: ThemeSupa }}
                providers={['email']}
                theme="dark"
            />


        <div>
                <h1>Register User</h1>
                <form onSubmit={handleSubmitR}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <button type="submit">Register</button>
                </form>

                <h1>Login User</h1>
                <form onSubmit={handleSubmitL}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
 */