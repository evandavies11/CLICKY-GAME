import React from "react";
import "./style.css";

function Title(props, count) {
  return (
    <nav className="row" id="nav">
      <div className="col-md-4 col-center">
        <h2>Space-Click-Game</h2>
      </div>
      <div className="col-md-4 col-left">
        <h3>Score: {props.count}</h3>
      </div>
      <div className="col-md-4 col-right">
        <h3>High Score: {props.count}</h3>
      </div>
      <div className="row">
        <div className="col-md-4 col-center">
          <p>Identify the Space Craft, Make Sure to Click Only Once</p>
        </div>
      </div>
    </nav >

  );
}

export default Title;
