import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableComponent from "../../core/components/TableComponent";
import { getOrders } from "../../core/services/API/orders";
import { useParams } from "react-router-dom";

function OrderList() {
  const dispatch = useDispatch();

  // Get orders from the Redux store
  const { orders, loading, error } = useSelector((state) => state.orderList);
  const { category } = useParams(); // Get category from URL parameters

  // Transform orders to include fullname directly
  const transformedItems = orders.map((order) => ({
    ...order,
    customerFullname: order.customer?.fullname || "N/A",
  }));

  // Filter item based on the category from the URL
  const filteredItems = category
    ? transformedItems.filter(
        (item) => item.status.toLowerCase() === category.toLowerCase()
      )
    : transformedItems;

  // Define columns for the table
  const columns = [
    { key: "customerFullname", header: "Customer Name" },
    { key: "status", header: "Status" },
    { key: "orderDate", header: "Order Date" },
    { key: "totalAmount", header: "Total Amount" },
    // { key: "items", header: "Items" },
  ];

  // Fetch orders when the component mounts

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch, category]);

  return (
    <div>
      {loading && <p>Loading orders...</p>}
      {error && <p>Error fetching orders: {error}</p>}
      {!loading && !error && (
        <TableComponent
          path={"orders"}
          columns={columns}
          initialData={filteredItems} // Use transformed data directly
          title="Orders"
          showNewButton={false}
        />
      )}
    </div>
  );
}

export default OrderList;
