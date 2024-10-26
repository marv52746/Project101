import React from "react";

const FormDetail = ({ items = [] }) => {
  const transformItem = items.map((product) => ({
    ...product,
    productName: product.product?.name || "N/A",
    productPrice: parseFloat(product.product?.price) || 0, // Ensure it's a number
    quantity: product.quantity || 0, // Handle quantity
  }));

  return (
    <div className="p-4">
      <h5>Order Details</h5>
      {transformItem.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {transformItem.map((item, index) => (
              <tr key={item.product.id || index}>
                <td>{item.productName}</td>
                <td>{item.quantity}</td>
                <td>{item.productPrice.toFixed(2)}</td>
                <td>{(item.productPrice * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No items to display.</p> // Handle empty state
      )}
    </div>
  );
};

export default FormDetail;
