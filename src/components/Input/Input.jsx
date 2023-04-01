import React from "react";
import './Input.css';

const Input = ({label, type, name, value, isActive, handleTextChange, handleOnBlur}) =>{ 
    
    return(
    
        <div className="campo-input">
            <input 
              type={type} 
              name={name}  
              className="input" 
              value={value || ""}
              onChange={handleTextChange}
              onBlur={handleOnBlur}
              />
            <label className={ isActive ? "Active user-label" : "user-label"}>{label}</label>
        </div>
    )
}

export default Input;