import React from "react";
import "./style.css";

function DudeCard(props, handleIncrement) {
  return (

    <div className="container">
      <div className="card" id={props.id} onClick={props.handleIncrement}>
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>

      </div>
    </div>

  );
}

export default DudeCard;
