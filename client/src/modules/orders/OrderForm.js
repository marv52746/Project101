import React from "react";
import { useSelector } from "react-redux";
import FormComponent from "../../core/components/FormComponent";
import {
  createOrder,
  editOrder,
  getOrders,
  removeOrder,
} from "../../core/services/API/orders";

function OrderForm() {
  const orders = useSelector((state) => state.orderList.orders);
  // const products = useSelector((state) => state.productList.products);

  // Transform orders to include fullname directly
  const transformedOrders = orders.map((order) => ({
    ...order,
    orderDate: new Date(order.orderDate).toISOString().slice(0, 16),
    customerFullname: order.customer?.fullname || "N/A",
  }));

  const columns = [
    { name: "customerFullname", label: "Full Name", type: "text" },
    { name: "orderDate", label: "Order Date", type: "datetime-local" },
    // {
    //   name: "products",
    //   label: "Products",
    //   type: "reference",
    //   options: products,
    // },
    {
      name: "status",
      label: "Status",
      type: "select",
      options: ["pending", "completed", "canceled"],
    }, // Updated to select with options
    { name: "totalAmount", label: "Total Amount", type: "number" },
    {
      name: "products",
      label: "Items",
      type: "form",
    },
  ];

  return (
    <div>
      <FormComponent
        initialData={transformedOrders}
        columns={columns}
        apiActions={{
          create: createOrder,
          update: editOrder,
          delete: removeOrder,
          getAll: getOrders,
        }}
        entityName="orders"
      />
    </div>
  );
}

export default OrderForm;
