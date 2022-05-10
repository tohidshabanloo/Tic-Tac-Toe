import React from "react";
import "./Modal.css"

const Modal = ({winner,resetHandler}) =>{
    return(
        <div className={`modal`}>
            <h1> {winner}</h1>
            <button onClick={resetHandler}>Play Again</button>
        </div>
    )
}

export default Modal
