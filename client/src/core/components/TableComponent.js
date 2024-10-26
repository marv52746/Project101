import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ConfirmationModal from "./ConfirmationModal";

const TableComponent = ({
  path = "",
  columns = [],
  initialData = [],
  title = "Item List",
  actions = true, // Default to true
  showView = true, // Default to true
  showEdit = true, // Default to true
  showDelete = false, // Default to false
  showNewButton = true, // New prop to control the visibility of the New button
}) => {
  const [items, setItems] = useState(initialData || []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const themeName = useSelector((state) => state.theme.themeName);

  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
    closeConfirmationModal();
  };

  const openConfirmationModal = (index) => {
    setItemToDelete(index);
    setIsModalOpen(true);
  };

  const closeConfirmationModal = () => {
    setIsModalOpen(false);
    setItemToDelete(null);
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "completed":
        return {
          border: "2px solid green",
          padding: "5px",
          borderRadius: "4px",
          color: "green",
        };
      case "pending":
        return {
          border: "2px solid orange",
          padding: "5px",
          borderRadius: "4px",
          color: "orange",
        };
      case "canceled":
        return {
          border: "2px solid red",
          padding: "5px",
          borderRadius: "4px",
          color: "red",
        };
      default:
        return {};
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <div className={`table-container ${themeName}`}>
        <div
          className="mb-3"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginRight: "1rem",
          }}
        >
          <h3 className="table-title" style={{ margin: "0" }}>
            {title}
          </h3>
          {showNewButton && (
            <Link to={`/${path}/form?view=new`}>
              <button className="btn btn-sm">New</button>
            </Link>
          )}
        </div>
        <div className="table-wrapper">
          <table className="table table-striped table-bordered">
            <thead className="table-head">
              <tr>
                {columns.map((col) => (
                  <th key={col.key}>{col.header}</th>
                ))}
                {actions && <th>Action</th>}
              </tr>
            </thead>
            <tbody>
              {items.length > 0 ? (
                items.map((item, index) => (
                  <tr key={index}>
                    {columns.map((col) => (
                      <td key={col.key}>
                        {col.key === "status" ? ( // Check if the column is Status
                          <span style={getStatusStyle(item[col.key])}>
                            {item[col.key].charAt(0).toUpperCase() +
                              item[col.key].slice(1)}
                          </span>
                        ) : (
                          item[col.key] // Display other columns normally
                        )}
                      </td>
                    ))}
                    {actions && (
                      <td>
                        {showView && (
                          <Link to={`/${path}/form?id=${item._id}&view=view`}>
                            <button className="btn btn-info btn-sm me-1">
                              View
                            </button>
                          </Link>
                        )}
                        {showEdit && (
                          <Link to={`/${path}/form?id=${item._id}&view=edit`}>
                            <button className="btn btn-warning btn-sm me-1">
                              Edit
                            </button>
                          </Link>
                        )}
                        {showDelete && (
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => openConfirmationModal(index)}
                          >
                            Delete
                          </button>
                        )}
                      </td>
                    )}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={actions ? columns.length + 1 : columns.length}
                    className="text-center"
                  >
                    No items found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={closeConfirmationModal}
        onConfirm={() => {
          handleDeleteItem(itemToDelete);
        }}
      />
    </div>
  );
};

export default TableComponent;
