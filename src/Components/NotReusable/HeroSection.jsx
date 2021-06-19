import React from 'react'

//importing Images
import HeroImage from "../../images/heromain.jpg"

//importing Files
import "./HeroSection.css"
import Heading from "../Reusable/Heading/Heading"

const HeroSection = () => {
    return (
        <div className="flex flex-col">
            <img className="heroImageStyling" src={HeroImage}/>
        </div>
    )
}

export default HeroSection
