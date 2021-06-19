//importing libraries
import React from 'react'
import { useState } from 'react'

//importing files
import "./Heading.css"

const Heading = () => {
    var [heading,setHeading] = useState("Our Story")
    return (
        <div>
            <h1>{heading}</h1>
        </div>
    )
}

export default Heading
