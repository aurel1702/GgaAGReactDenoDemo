import React, {ReactNode, useEffect, useState} from "react";
import {createClient, SupabaseClient} from "@supabase/supabase-js";
import LogReg from "../views/logReg/logReg.tsx";
import LoginPage from "./components/Views/Login.tsx";
import Snake from "./games/snake/Snake.tsx";
import Monkebar from "./views/Navbar/monkebar.tsx";
import MainPage from "./views/mainPage/mainPage.tsx";


const supabase : SupabaseClient = createClient("https://smewgcfcgqedpxuusafe.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtZXdnY2ZjZ3FlZHB4dXVzYWZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU0NDE3MzEsImV4cCI6MjAwMTAxNzczMX0.lZLru7Qhw_1LG2C2Sf-5DeuPkNkxoV-sqZX0KbBjPwU");

export enum AppViews {
    logReg,
    mainPage
}
function App () {
    const [selectedView, setSelectedView] = useState<AppViews>(AppViews.mainPage);


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
        <div>

            {renderSelectedView()}
        </div>
    );
}

export default App;