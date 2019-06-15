import React from "react";

function Jumbo(){
    return(
        <>
        <div className="card bg-dark text-white">
            <img className="head card-img" src="https://ak1.picdn.net/shutterstock/videos/1016011171/thumb/1.jpg"  alt=""/>
            <div className="card-img-overlay centered box">
                <h1 className="text_head" style={{paddingTop: "50px"}}>The Clicky Game!</h1>
                <h5 className="text_head">Directions: Click any unique image. Choosing a previous
                    image will result in a Game Over.
                </h5>
            </div>
        </div>
        </>
    );
}

export default Jumbo;