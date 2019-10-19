import React from "react";
import "./style.css";

function Title(props, count) {
  return (
    <nav className="row" id="nav">
      <div className="col-md-4 col-left">
        <h2>Space-Click-Game</h2>
      </div>
      <div className="col-md-4 col-right">
        <h3>Score: {props.count}</h3>
      </div>
      <div className="col-md-4 col-right">
        <h3>High Score: {props.count}</h3>
      </div>
    </nav>

  );
}

export default Title;
