import React from "react";

const SelectInput = ({
  name,
  label,
  options,
  value,
  onChange,
  disabled,
  required,
}) => {
  return (
    <div className="dropdown-container">
      <select
        className="form-control"
        name={name}
        value={value || ""}
        disabled={disabled}
        onChange={onChange}
        required={required} // Add required attribute
      >
        <option value="">Select {label}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </option>
        ))}
      </select>
      <span className="dropdown-icon">▼</span>
    </div>
  );
};

export default SelectInput;
