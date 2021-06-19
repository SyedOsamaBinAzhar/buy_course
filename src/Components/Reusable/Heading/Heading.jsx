//importing libraries
import React from 'react'
import { useState,useEffect } from 'react'

//importing files
import "./Heading.css"

const Heading = ({text}) => {
    // console.log(text)
    var [heading,setHeading] = useState("")

    useEffect(() => {
        setHeading(text)
        return () => {
            
        }
    }, [])

    return (
        <div>
            <h1 className="fs-1">{heading}</h1>
        </div>
    )
}

export default Heading
