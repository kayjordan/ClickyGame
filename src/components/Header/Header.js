
import React from "react";
import "./Header.css";

const Header = props => (
    <div className="header">
        <ul>
       
            <a href="html-image-hyperlink.php"><img src="../../../assets/images/banner.jpg" /></a>
            <h3>Click all the pictures without clikcing anyone more than once. </h3>
            <h4 id="score">Score: {props.score} </h4>  
        </ul>
        
    </div>
)

export default Header;
