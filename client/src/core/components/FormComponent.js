import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"; // Import useDispatch

const FormComponent = ({
  initialData = [],
  columns,
  apiActions,
  entityName,
}) => {
  const [formData, setFormData] = useState({});
  const location = useLocation();
  const dispatch = useDispatch(); // Get the dispatch function
  const navigate = useNavigate(); // Initialize navigate

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (view === "new") {
        await dispatch(apiActions.create(formData)); // Create new entity
      } else if (view === "edit") {
        await dispatch(apiActions.update(id, formData)); // Update existing entity
      }
      navigate(`/${entityName}`); // Redirect based on entity type
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">
        {view === "view"
          ? "View Item"
          : view === "edit"
          ? "Edit Item"
          : "New Item"}
      </h2>
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
