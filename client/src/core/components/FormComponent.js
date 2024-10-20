import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const FormComponent = ({ initialData, columns }) => {
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
        {columns.map((key) => (
          <div key={key} className="mb-3">
            <label className="form-label">
              {key.charAt(0).toUpperCase() + key.slice(1)}:
            </label>
            <input
              type="text"
              className="form-control"
              name={key}
              value={formData[key] || ""}
              readOnly={view === "view"} // Set readOnly based on view parameter
              onChange={handleChange}
            />
          </div>
        ))}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

// Default props
FormComponent.defaultProps = {
  initialData: [],
};

export default FormComponent;
