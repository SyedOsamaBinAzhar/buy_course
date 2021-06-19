import React from 'react'

//importing Images
import HeroImage from "../../images/heromain.jpg"

//importing Files
import "./HeroSection.css"

const HeroSection = () => {
    return (
        <div>
            <img className="heroImageStyling" src={HeroImage}/>
        </div>
    )
}

export default HeroSection
