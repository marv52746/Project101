import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import ConfirmationModal from "./ConfirmationModal";
import ReferenceInput from "./ReferenceInput";
import SelectInput from "./SelectInput";
import FormDetail from "./FormDetail";

const FormComponent = ({
  initialData = [],
  columns,
  apiActions,
  entityName,
}) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

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
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear error on change
  };

  const validateForm = () => {
    const newErrors = {};
    columns.forEach(({ name, required }) => {
      if (required && !formData[name]) {
        newErrors[name] = `${name} is required.`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return; // Only submit if valid

    try {
      if (view === "new") {
        await dispatch(apiActions.create(formData));
      } else if (view === "edit") {
        await dispatch(apiActions.update(id, formData));
      }
      navigate(`/${entityName}`);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleDeleteItem = async (itemId) => {
    try {
      await dispatch(apiActions.delete(itemId));
      await dispatch(apiActions.getAll()); // Fetch updated orders
      navigate(`/${entityName}`);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const openConfirmationModal = (index) => {
    setItemToDelete(index);
    setIsModalOpen(true);
  };

  const closeConfirmationModal = () => {
    setIsModalOpen(false);
    setItemToDelete(null);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between">
        <h4 className="mb-4 ">
          {view === "view"
            ? "View Item"
            : view === "edit"
            ? "Edit Item"
            : "New Item"}
        </h4>
        {entityName === "orders" && formData["status"] === "pending" && (
          <Link>
            <button className="btn btn-sm new-btn">Mark as Complete</button>
          </Link>
        )}
      </div>
      <form onSubmit={handleSubmit} className="form">
        <div className="row">
          {columns.map(({ name, label, type, options, required }) => (
            <React.Fragment key={name}>
              {type !== "form" ? (
                <div key={name} className="col-md-6 mb-3">
                  <label className="form-label">
                    {label}{" "}
                    {required && <span style={{ color: "red" }}>*</span>}
                  </label>
                  {type === "reference" ? (
                    <ReferenceInput
                      name={name}
                      label={label}
                      options={options}
                      value={formData[name]}
                      onChange={handleChange}
                      disabled={view === "view"}
                      required={required}
                    />
                  ) : type === "select" ? (
                    <SelectInput
                      name={name}
                      label={label}
                      options={options}
                      value={formData[name]}
                      onChange={handleChange}
                      disabled={view === "view"}
                      required={required}
                    />
                  ) : (
                    <input
                      type={type}
                      className={`form-control ${
                        errors[name] ? "is-invalid" : ""
                      }`}
                      name={name}
                      value={formData[name] || ""}
                      readOnly={view === "view"}
                      onChange={handleChange}
                      required={required} // Add required attribute
                    />
                  )}
                  {errors[name] && (
                    <div className="text-danger">{errors[name]}</div>
                  )}
                </div>
              ) : (
                <FormDetail items={formData[name]} />
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="d-flex">
          {(view === "edit" || view === "new") && (
            <button
              type="submit"
              className="btn btn-primary"
              style={{ marginRight: "1rem" }}
            >
              Submit
            </button>
          )}
          {view === "edit" && (
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => openConfirmationModal(id)}
            >
              Delete
            </button>
          )}
        </div>
      </form>

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={closeConfirmationModal}
        onConfirm={() => handleDeleteItem(itemToDelete)}
      />
    </div>
  );
};

export default FormComponent;
