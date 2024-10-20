import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const TableComponent = ({ path, columns, initialData, title }) => {
  const [items, setItems] = useState(initialData || []);

  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">{title}</h2>

      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            {columns.map((col) => (
              <th key={col.key}>{col.header}</th>
            ))}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.length > 0 ? (
            items.map((item, index) => (
              <tr key={index}>
                {columns.map((col) => (
                  <td key={col.key}>{item[col.key]}</td>
                ))}
                <td>
                  <Link to={`/${path}/form?id=${item._id}&view=view`}>
                    <button className="btn btn-info btn-sm me-1">View</button>
                  </Link>
                  <Link to={`/${path}/form?id=${item._id}&view=edit`}>
                    <button className="btn btn-warning btn-sm me-1">
                      Edit
                    </button>
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDeleteItem(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length + 1} className="text-center">
                No items found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

// Default props
TableComponent.defaultProps = {
  columns: [],
  initialData: [],
  path: "",
  title: "Item List", // Default title
};

export default TableComponent;
