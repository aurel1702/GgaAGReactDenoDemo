import React, {ReactNode, useState} from "react";
import {createClient, SupabaseClient} from "@supabase/supabase-js";
import LoginPage from "./views/logReg/LoginPage.tsx";
import Snake from "./games/snake/Snake.tsx";
import Monkebar from "./views/Navbar/monkebar.tsx";
import MainPage from "./views/mainPage/mainPage.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"


const supabase : SupabaseClient = createClient("https://smewgcfcgqedpxuusafe.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtZXdnY2ZjZ3FlZHB4dXVzYWZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU0NDE3MzEsImV4cCI6MjAwMTAxNzczMX0.lZLru7Qhw_1LG2C2Sf-5DeuPkNkxoV-sqZX0KbBjPwU");
export enum AppViews {
    logReg,
    mainPage
}
function App () {
    const [selectedView, setSelectedView] = useState<AppViews>(AppViews.logReg);

    const renderSelectedView = ():ReactNode => {
        switch(selectedView){
            case AppViews.logReg:
                return (
                    <LoginPage supabase={supabase}/>
                )
            case AppViews.mainPage:
                return (
                    <>
                        {/*<Monkebar/>*/}
                        {/*<MainPage/>*/}
                        {<Snake/>}
                    </>
                )
        }
    }

    return (
        <>
            {/*<MainPage/>*/}
            {renderSelectedView()}
        </>
    );
}

export default App;