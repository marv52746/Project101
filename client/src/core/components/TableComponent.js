import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TableComponent = ({
  path = "",
  columns = [],
  initialData = [],
  title = "Item List",
}) => {
  const [items, setItems] = useState(initialData || []);

  const themeName = useSelector((state) => state.theme.themeName);

  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
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
          <h3
            className="table-title "
            style={{
              margin: "0",
            }}
          >
            {title}
          </h3>
          <Link to={`/${path}/form?view=new`}>
            <button className="btn btn-sm">New</button>
          </Link>
        </div>

        <table className="table table-striped table-bordered">
          <thead className="table-head">
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
                      className="btn btn-sm"
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
    </div>
  );
};

export default TableComponent;
