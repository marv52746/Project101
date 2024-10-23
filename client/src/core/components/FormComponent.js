import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const FormComponent = ({ initialData = [], columns }) => {
  const [formData, setFormData] = useState({});
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const view = queryParams.get("view");

  useEffect(() => {
    if (id !== null) {
      const item = initialData.find((user) => user._id === id);
      if (item) {
        setFormData(item);
      }
    }
  }, [id, initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">{view === "view" ? "View Item" : "Edit Item"}</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="row">
          {columns.map(({ name, label, type, options }) => (
            <div key={name} className="col-md-6 mb-3">
              <label className="form-label">{label}</label>
              {type === "select" ? (
                <div className="dropdown-container">
                  <select
                    className="form-control"
                    name={name}
                    value={formData[name] || ""}
                    readOnly={view === "view"} // Set readOnly based on view parameter
                    onChange={handleChange}
                  >
                    <option value="">Select {label}</option>
                    {options.map((option) => (
                      <option key={option} value={option}>
                        {option.charAt(0).toUpperCase() + option.slice(1)}
                      </option>
                    ))}
                  </select>
                  <span className="dropdown-icon">▼</span> {/* Dropdown icon */}
                </div>
              ) : (
                <input
                  type={type}
                  className="form-control"
                  name={name}
                  value={formData[name] || ""}
                  readOnly={view === "view"} // Set readOnly based on view parameter
                  onChange={handleChange}
                />
              )}
            </div>
          ))}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
