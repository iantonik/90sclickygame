import React from "react";

function Card(props) {
    return (
        <div className="title_card" onClick= {()=>{props.check_answer(props.id)}}>
            <img className="pic-card" src={props.src} alt=""></img>
        </div>
    );
}

export default Card;