import React, {ReactNode, useEffect, useState} from "react";
import "@supabase/supabase-js";
import {SupabaseClient} from "@supabase/supabase-js";
import Snake from "../../games/snake/Snake.tsx";
import "./styles.css"
import TicTacToe from "../../games/tictactoe/TicTacToe.tsx";

interface LoginProps {
    supabase:SupabaseClient
}

export enum LoginViews {
    login = 1,
    register = -1
}
const LoginPage: React.FC<LoginProps> = ({supabase}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordValidate, setPasswordValidate] = useState('');
    const [session, setSession] = useState(null);
    const [user, setUser] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handlePasswordChangeVal = (e) => {
        setPasswordValidate(e.target.value);
    };

    const handleSubmitR = (e) => {
        e.preventDefault();
        if(password === passwordValidate){
            registerUser(email, password);
        }
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
            setPasswordValidate("");
            setUser("");
            setPassword("");
            setEmail("");
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
            setPasswordValidate("");
            setUser("");
            setPassword("");
            setEmail("");
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
            <>
                <head>
                    <title>Webleb</title>
                    <meta charSet="utf-8"></meta>
                        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
                        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v2.1.9/css/unicons.css"></link>
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"></link>
                        <link rel="stylesheet" href="./styles.css"></link>
                </head>
                <div>
                    <div className="section">
                        <div className="container">
                            <div className="row full-height justify-content-center">
                                <div className="col-12 text-center align-self-center py-5">
                                    <div className="section pb-5 pt-5 pt-sm-2 text-center">
                                        <div className="switch text-white">
                                            <h6 className="mb-0 pb-3"><span>Log In</span><span>Sign Up</span></h6>
                                        </div>
                                        <input className="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
                                        <label htmlFor="reg-log"></label>
                                        <div className="card-3d-wrap mx-auto">
                                            <div className="card-3d-wrapper">
                                                <div className="card-front">
                                                    <div className="center-wrap">
                                                        <div className="section text-center">
                                                            <form id="loginForm" onSubmit={handleSubmitL}>
                                                                <h2 className="mb-4 pb-5 text-white">Die AFFEN wollen DICH!!</h2>
                                                                <div className="form-group text-white">
                                                                    <input type="email" className="form-style"
                                                                           placeholder="Email" value={email}
                                                                           onChange={handleEmailChange}></input>
                                                                    <i className="input-icon uil uil-at"></i>
                                                                </div>
                                                                <div className="form-group mt-2 text-white">
                                                                    <input type="password" className="form-style"
                                                                           placeholder="Password" value={password}
                                                                           onChange={handlePasswordChange}></input>
                                                                    <i className="input-icon uil uil-lock-alt"></i>
                                                                </div>
                                                                <button className="btnA mt-4"><h3>Login</h3></button>
                                                                {/*<p className="mb-0 mt-4 text-center"><a href="" className="link">Forgot your password?</a></p>*/}
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-back">
                                                    <div className="center-wrap">
                                                        <div className="section text-center">
                                                            <form id="registerForm" onSubmit={handleSubmitR}>
                                                                <h2 className="mb-3 pb-5 text-white">KOMM RAN!</h2>
                                                                {/*<div className="form-group text-white">
                                                                <input   type="text" className="form-style"
                                                                         placeholder="Username"></input>
                                                                <i className="input-icon uil uil-user"></i>
                                                            </div>*/}
                                                                <div className="form-group mt-2 text-white">
                                                                    <input type="email" className="form-style"
                                                                           placeholder="Email" value={email}
                                                                           onChange={handleEmailChange}></input>
                                                                    <i className="input-icon uil uil-at"></i>
                                                                </div>
                                                                <div className="form-group mt-2 text-white">
                                                                    <input type="password" className="form-style"
                                                                           placeholder="Password" value={password}
                                                                           onChange={handlePasswordChange}></input>
                                                                    <i className="input-icon uil uil-lock-alt"></i>
                                                                </div>
                                                                <div className="form-group mt-2 text-white">
                                                                    <input type="password" className="form-style"
                                                                           placeholder="Nochmal" value={passwordValidate}
                                                                           onChange={handlePasswordChangeVal}></input>
                                                                    <i className="input-icon uil uil-lock-alt"></i>
                                                                </div>
                                                                <button className="btnA mt-4"><h3>Sign Up</h3></button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    else {
        return <div>
            <button className="btnA" onClick={() => signOut()} type="submit">Signout</button>
            <Snake></Snake>
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