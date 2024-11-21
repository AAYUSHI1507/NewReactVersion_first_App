import React,{useEffect} from "react";
// import Navbar from "Components";
import "./Navbar.css";

const Navbar = (props) => {
  
  useEffect(() => {
    alert("I am running because the color changed");
  }, [props.color]);

  
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
  );
};

export default Navbar;
