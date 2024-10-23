import React from "react";
import { useSelector } from "react-redux";
import FormComponent from "../../core/components/FormComponent";

function OrderForm() {
  const orders = useSelector((state) => state.orderList.orders);

  // Transform orders to include fullname directly
  const transformedOrders = orders.map((order) => ({
    ...order,
    orderDate: new Date(order.orderDate).toISOString().slice(0, 16),
    customerFullname: order.customer?.fullname || "N/A",
  }));

  const columns = [
    { name: "customerFullname", label: "Full Name", type: "text" },
    { name: "orderDate", label: "Order Date", type: "datetime-local" },
    { name: "products", label: "Products", type: "text" },
    {
      name: "status",
      label: "Status",
      type: "select",
      options: ["pending", "completed", "canceled"],
    }, // Updated to select with options
    { name: "totalAmount", label: "Total Amount", type: "number" },
  ];

  return (
    <div>
      <FormComponent initialData={transformedOrders} columns={columns} />
    </div>
  );
}

export default OrderForm;
