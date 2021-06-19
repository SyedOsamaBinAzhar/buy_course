import React from 'react'

//importing images
import Logo from "../../images/logo.png"

//importing files
import "./Icon.css"
const Icon = () => {
    return (
        <div>
            <img className="logoIcon" src={Logo} alt="logogo" width="40px" />
        </div>
    )
}

export default Icon
