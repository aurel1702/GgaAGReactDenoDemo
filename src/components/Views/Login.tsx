import React, { useEffect, useState } from "react";
import "@supabase/supabase-js";
import {SupabaseClient} from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

interface LoginProps {
    supabase:SupabaseClient;
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email,password);
        registerUser(email, password);
    };

    const registerUser = async (email, password) => {
        try {
            const { user, error } = await supabase.auth.signUp({
                email: email,
                password: password,
            })

            // Registration successful
            console.log('User registered:', user.id);
            setUser(user);
        } catch (error) {
            console.error('Registration error:', error.message);
        }
    };

    async function signInWithEmail() {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })
    }

    async function signOut() {
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
                <form onSubmit={handleSubmit}>
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
            </div>
        );
    } else {
        return <div>Logged in!</div>;
    }
};

export default LoginPage;

/*
<Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            providers={['google']}
            theme="dark"
        />
 */