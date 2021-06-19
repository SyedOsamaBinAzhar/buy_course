//import libraries
import { useEffect,useState } from 'react'
import React from 'react'
import {Link} from "react-router-dom"
//importing files
import "./Navbar.css"

// importing components
import Icon from '../../NotReusable/Icon';

const Navbar = () => {

    var [navItems,setNavItems] = useState(["Home","About","Contact","Courses"]);

    return (
        <div className="navbar">
            <Icon/>
            {/* <Link to="/"></Link> */}
            <ul className="listContainer">
                {/* <li>HOme</li>
                <li>HOme</li>
                <li>HOme</li>
                <li>HOme</li> */}
                {
                    navItems.map(navItem => {
                        return (
                            <li className="navItem">{navItem}</li>
                        )
                    })
                }


            </ul>
        </div>
    )
}

export default Navbar
