import {useEffect, useState} from "react";
import {createClient} from "@supabase/supabase-js";

const supabase = createClient("http://localhost:8000/", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ewogICAgInJvbGUiOiAiYW5vbiIsCiAgICAiaXNzIjogInN1cGFiYXNlIiwKICAgICJpYXQiOiAxNjgyMjg3MjAwLAogICAgImV4cCI6IDE4NDAxNDAwMDAKfQ.srs0zQzoqjCJzpjtYmII5Jx35UaR8nZOqSVfV92YB7M");

function App() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        getCountries();
    }, []);

    async function getCountries() {
        const {data} = await supabase.from("countries").select();
        setCountries(data);
    }

    return (
        <ul>
            {countries.map((country) => (
                <li key={country.name}>{country.name}</li>
            ))}
        </ul>
    );
}

export default App;