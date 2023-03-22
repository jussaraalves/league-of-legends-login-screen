import React from "react";
import './Input.css'

const Input = (props) =>{
    return(
        <div className="campo-input">
            <input type="email" name="email" id="email" placeholder={props.placeholder.toUpperCase()}/>
        </div>
    )
}

export default Input;