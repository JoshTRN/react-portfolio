import React from "react";
import Nav from './Components/Nav'
import TechBar from './Components/TechBar'
import "./App.css"

function App() {
    return (
        <div id="wrapper">
            <Nav />
            <img id="profile-pic" src="./img/profile-pic.png" alt="Josh-PFP"/>
            <TechBar />
        </div>
    );
}
export default App;
