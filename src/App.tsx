import React, {useEffect, useState} from "react";
import {createClient, SupabaseClient} from "@supabase/supabase-js";
import CountryList from "./components/Views/Countries.tsx";
import Login from "./components/Views/Login.tsx";
import LoginPage from "./components/Views/Login.tsx";

const supabase : SupabaseClient = createClient("http://localhost:8000/", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ewogICAgInJvbGUiOiAiYW5vbiIsCiAgICAiaXNzIjogInN1cGFiYXNlIiwKICAgICJpYXQiOiAxNjgyMjg3MjAwLAogICAgImV4cCI6IDE4NDAxNDAwMDAKfQ.srs0zQzoqjCJzpjtYmII5Jx35UaR8nZOqSVfV92YB7M");

function App() {


    return (
        <div>
            <LoginPage supabase={supabase}></LoginPage>
            <CountryList supabase={supabase}></CountryList>
        </div>
    );
}

export default App;