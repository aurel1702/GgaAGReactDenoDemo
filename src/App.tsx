import React, {ReactNode, useEffect, useState} from "react";
import {createClient, SupabaseClient} from "@supabase/supabase-js";
import CountryList from "./components/Views/Countries.tsx";
import Login from "./components/Views/Login.tsx";
import LoginPage from "./components/Views/Login.tsx";
import logReg from "../views/logReg/logReg.tsx";
import LogReg from "../views/logReg/logReg.tsx";
import MainPage from "../views/mainPage/mainPage.tsx";
import mainPage from "../views/mainPage/mainPage.tsx";

const supabase : SupabaseClient = createClient("http://192.168.216.48:8000/", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ewogICAgInJvbGUiOiAiYW5vbiIsCiAgICAiaXNzIjogInN1cGFiYXNlIiwKICAgICJpYXQiOiAxNjgyMjg3MjAwLAogICAgImV4cCI6IDE4NDAxNDAwMDAKfQ.srs0zQzoqjCJzpjtYmII5Jx35UaR8nZOqSVfV92YB7M");

export enum AppViews {
    logReg,
    mainPage
}
function App() {
    const [selectedView, setSelectedView] = useState<AppViews>(AppViews.mainPage);

    const renderSelectedView = ():ReactNode => {
        switch(selectedView){
            case AppViews.logReg:
                return (
                    <LogReg/>

                )
            case AppViews.mainPage:
                return (
                    <MainPage/>
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