import React from "react";
import { useState } from "react";
import './Input.css';

const Input = ({label, type}) =>{ 
    const [isActive, setIsActive] = useState(false); 
    const [value, setValue] = useState('');

    function handleTextChange(text) {
        setValue(text);
      
        if (text !== '') {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
    }

    return(
        <div className="campo-input">
            <input type={type} name="user" id="user" className="input" value={value}
            onChange={(e) => handleTextChange(e.target.value)}/>
            <label className={ isActive ? "Active user-label" : "user-label"}>{label}</label>
        </div>
    )
}

export default Input;