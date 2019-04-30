import React from "react";
import Nav from "./Components/Nav";
import TechBar from "./Components/TechBar";
import Wrapper from "./Components/Wrapper";
import "./App.css";

function App() {
    return (
        <Wrapper>
            <Nav />
            <img id="profile-pic" src="./img/profile-pic.png" alt="Josh-PFP" />
            <TechBar />
        </Wrapper>
    );
}
export default App;
