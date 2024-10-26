import React from "react";

const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h4>Confirm Deletion</h4>
        <p>Are you sure you want to delete this item?</p>
        <button className="btn-danger" onClick={onConfirm}>
          Yes, Delete
        </button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
