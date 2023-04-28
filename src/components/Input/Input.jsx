import React, { useState } from "react";
import { IoIosEyeOff, IoIosEye } from "react-icons/io";
import "./Input.css";

const Input = ({
  label,
  name,
  value,
  isActive,
  handleTextChange,
  handleOnBlur,
  hasButton,
  isPassword,
}) => {
  const [hidePass, setHidePass] = useState(true);

  const handleTogglePassword = (event) => {
    event.preventDefault();
    setHidePass(!hidePass);
  };

  return (
    <>
      <div className="campo-input">
        <input
          type={isPassword ? (hidePass ? "password" : "text") : "text"}
          name={name}
          className="input"
          value={value || ""}
          onChange={handleTextChange}
          onBlur={handleOnBlur}
        />
        {hasButton && (
          <button
            className="input-button-eye"
            onClick={handleTogglePassword}
          >
            {hidePass ? (
              <IoIosEyeOff size={18} />
            ) : (
              <IoIosEye size={18} />
            )}
          </button>
        )}
        <label className={isActive ? "Active user-label" : "user-label"}>
          {label}
        </label>
      </div>
    </>
  );
};

export default Input;