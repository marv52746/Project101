import React from "react";
import { useSelector } from "react-redux";
import FormComponent from "../../core/components/FormComponent"; // Adjust path as needed

const CustomerForm = () => {
  const customer = useSelector((state) => state.customerList.customers); // Adjust according to your Redux state structure
  const columns = ["fullname", "email", "phone_number", "address"];
  return (
    <div>
      <FormComponent initialData={customer} columns={columns} />
    </div>
  );
};

export default CustomerForm;
