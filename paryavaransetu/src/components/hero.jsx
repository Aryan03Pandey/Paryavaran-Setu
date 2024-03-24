import React from "react";
import NavBar from "./navbar";
import HeroText from "./heroText";
import video3 from "../videos/video3.mp4"


function Hero(){

    return (
        <div className="Hero">
            <video id="vid" muted loop autoPlay>
                   <source src= { video3 }/>
            </video>
            <div className="hero-section">
                <NavBar />
            </div>
            <HeroText />
        </div>
        ) 
}

export default Hero;