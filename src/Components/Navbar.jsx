import React from 'react'
// import Navbar from "Components";
import './Navbar.css' ;

const Navbar = (props) => {
  return (
    <>
    <div>
        <nav>
            <ul>
                <li>Home {props.color}</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    </div>
    </>
  )
}

export default Navbar
