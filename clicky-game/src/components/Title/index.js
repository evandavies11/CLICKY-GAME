import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbar">{props.children}</nav>
    </div>
  );
}

export default Title;
