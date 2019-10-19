import React from "react";
import "./style.css";

function DudeCard(props, handleIncrement) {
  return (

    <div className="card" id={props.id} onClick={props.handleIncrement}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">

      </div>

    </div>

  );
}

export default DudeCard;
