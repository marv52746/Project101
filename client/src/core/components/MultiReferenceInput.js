import React from "react";

const MultiReferenceInput = ({
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
      <label className="form-label">
        {label} {required && <span style={{ color: "red" }}>*</span>}
      </label>
      <select
        multiple
        className="form-control"
        name={name}
        value={value || []}
        onChange={onChange}
        disabled={disabled}
        required={required}
      >
        {options.map((option) => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
      <span className="dropdown-icon">▼</span>
    </div>
  );
};

export default MultiReferenceInput;
