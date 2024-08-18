import React from "react";
import {city, username} from "../data/user";

function Home() {
    const h1Style = {
        color: 'firebrick'
    }
    return (
        <div id="home">
            <h1 style={h1Style}>
                {username} is a Web Developer from {city}
            </h1>
        </div>
    );
}

export default Home;