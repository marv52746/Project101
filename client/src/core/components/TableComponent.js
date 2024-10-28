import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ConfirmationModal from "./ConfirmationModal";

const TableComponent = ({
  path = "",
  columns = [],
  initialData = [],
  title = "Item List",
  actions = true,
  showView = true,
  showEdit = true,
  showDelete = false,
  showNewButton = true,
  itemsPerPage = 10,
}) => {
  const [items, setItems] = useState(initialData || []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

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

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

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
          <h4 className="table-title" style={{ margin: "0" }}>
            {title}
          </h4>
          {showNewButton && (
            <Link to={`/${path}/form?view=new`}>
              <button className="btn btn-sm new-btn">Create New</button>
            </Link>
          )}
        </div>
        <div className="table-wrapper">
          <table className="table table-striped table-bordered">
            <thead className="table-head">
              <tr>
                <th style={{ width: "50px" }}>#</th>
                {columns.map((col) => (
                  <th key={col.key}>{col.header}</th>
                ))}
                {actions && <th style={{ width: "150px" }}>Action</th>}
              </tr>
            </thead>
            <tbody>
              {currentItems.length > 0 ? (
                currentItems.map((item, index) => (
                  <tr key={startIndex + index}>
                    <td>{startIndex + index + 1}</td>
                    {columns.map((col) => (
                      <td key={col.key} style={{ padding: "0.5rem" }}>
                        {col.key === "status" ? (
                          <span style={getStatusStyle(item[col.key])}>
                            {item[col.key].charAt(0).toUpperCase() +
                              item[col.key].slice(1)}
                          </span>
                        ) : (
                          item[col.key]
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
                            onClick={() =>
                              openConfirmationModal(startIndex + index)
                            }
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
                    colSpan={actions ? columns.length + 2 : columns.length + 1}
                    className="text-center"
                  >
                    No items found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination and Total Records Count in One Row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "1rem 0",
          }}
        >
          <div style={{ fontSize: "0.875rem" }}>
            Total Records: {items.length}
          </div>
          <div
            className="pagination"
            style={{ display: "flex", alignItems: "center" }}
          >
            <button
              className="btn btn-sm"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span style={{ margin: "0 0.5rem", fontSize: "0.875rem" }}>
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="btn btn-sm"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              <span>Next</span>
            </button>
          </div>
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
