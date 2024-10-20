import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableComponent from "../../core/components/TableComponent";
import { getSales } from "../../core/services/API/sale"; // Adjust the import path as necessary

function SalesList() {
  const dispatch = useDispatch();

  // Get sales from the Redux store
  const { sales, loading, error } = useSelector((state) => state.saleList); // Adjust according to your state shape

  // Transform sales to include fullname directly if necessary
  const transformedSales = sales.map((sale) => ({
    ...sale,
    customerFullname: sale.customer?.fullname || "N/A", // Fallback if fullname is missing
  }));

  // Define columns for the table
  const columns = [
    { key: "customerFullname", header: "Customer Name" },
    { key: "saleDate", header: "Sale Date" },
    { key: "totalAmount", header: "Total Amount" },
    { key: "products", header: "Number of Products" },
  ];

  // Fetch sales when the component mounts
  useEffect(() => {
    dispatch(getSales());
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading sales...</p>}
      {error && <p>Error fetching sales: {error}</p>}
      {!loading && !error && (
        <TableComponent
          path={"sales"}
          columns={columns}
          initialData={transformedSales} // Use transformed data directly
          title="Sales"
        />
      )}
    </div>
  );
}

export default SalesList;
