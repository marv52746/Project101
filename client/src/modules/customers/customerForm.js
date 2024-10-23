import React from "react";
import { useSelector } from "react-redux";
import FormComponent from "../../core/components/FormComponent"; // Adjust path as needed

const CustomerForm = () => {
  const customer = useSelector((state) => state.customerList.customers); // Adjust according to your Redux state structure
  const columns = [
    { name: "fullname", label: "Full Name", type: "text" },
    { name: "email", label: "Email", type: "email" },
    { name: "phone_number", label: "Phone Number", type: "tel" },
    { name: "address", label: "Address", type: "text" },
  ];

  return (
    <div>
      <FormComponent initialData={customer} columns={columns} />
    </div>
  );
};

export default CustomerForm;
