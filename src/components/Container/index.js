
import React from "react";
import "./Container.css";

// STATELESS
const Container = props => 
    <main className="container">
        {/* passing in other components through children in Game.js */}
        {props.children}
    </main>;

export default Container;