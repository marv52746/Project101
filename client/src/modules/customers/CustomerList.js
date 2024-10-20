import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableComponent from "../../core/components/TableComponent";
import { getCustomers } from "../../core/services/API/customers"; // Adjust the import path as necessary

function CustomerList() {
  const dispatch = useDispatch();

  // Get customers from the Redux store
  const { customers, loading, error } = useSelector(
    (state) => state.customerList
  ); // Adjust according to your state shape

  // Define columns for the table
  const columns = [
    { key: "fullname", header: "Full Name" },
    { key: "email", header: "Email" },
    { key: "phone_number", header: "Phone Number" },
    { key: "address", header: "Address" },
  ];

  // Fetch customers when the component mounts
  useEffect(() => {
    dispatch(getCustomers());
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading customers...</p>}
      {error && <p>Error fetching customers: {error}</p>}
      {!loading && !error && (
        <TableComponent
          path={"customers"}
          columns={columns}
          initialData={customers || []} // Pass fetched customers as initial data
          title="Customer Management"
        />
      )}
    </div>
  );
}

export default CustomerList;
