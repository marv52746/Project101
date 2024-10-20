import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableComponent from "../../core/components/TableComponent";
import { getOrders } from "../../core/services/API/orders";

function OrderList() {
  const dispatch = useDispatch();

  // Get orders from the Redux store
  const { orders, loading, error } = useSelector((state) => state.orderList);

  // Transform orders to include fullname directly
  const transformedOrders = orders.map((order) => ({
    ...order,
    customerFullname: order.customer?.fullname || "N/A",
  }));

  // Define columns for the table
  const columns = [
    { key: "customerFullname", header: "Customer Name" },
    { key: "orderDate", header: "Order Date" },
    { key: "status", header: "Status" },
    { key: "totalAmount", header: "Total Amount" },
    { key: "items", header: "Items" },
  ];

  // Fetch orders when the component mounts
  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading orders...</p>}
      {error && <p>Error fetching orders: {error}</p>}
      {!loading && !error && (
        <TableComponent
          path={"orders"}
          columns={columns}
          initialData={transformedOrders} // Use transformed data directly
          title="Orders"
        />
      )}
    </div>
  );
}

export default OrderList;
