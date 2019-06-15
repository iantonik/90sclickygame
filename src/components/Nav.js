import React from "react";

function Nav(props){
    return(
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <h4 className="nav-link" style={{color: "white"}}>Clicky Game</h4>
            </li>
            <li className="nav-item" >
                <h4 className="nav-link" style={{color: "white"}}>{props.message}</h4>
            </li>
            <li className="nav-item">
                <h4 className="nav-link" style={{color: "white"}}>Current Score {props.current} | High Score {props.high}</h4>
            </li>
        </ul>
    );
}

export default Nav;