import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div>
      <div className="card" style={{overflow:"hidden"}}>
        <img
          src="https://cdn.windowsreport.com/wp-content/uploads/2022/02/dual-monitor-2.jpg"
          alt="Dual monitor Image"
          width={280}
          style={{border: "2px solid #0045"}}
        />
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
