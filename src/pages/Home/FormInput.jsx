import React from "react";

export default function FormInput({ id, type, label, placeholder, name }) {
  return (
    <div className={`wrapperFormInput ${id}`}>
      <div className="wrapperLabel">
        <label className="contactMeLabel" htmlFor={id}>
          {label}
        </label>
      </div>
      <input
        className="icontactMeInputs"
        required
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
}
