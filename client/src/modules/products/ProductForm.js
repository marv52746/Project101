import React from "react";
import { useSelector } from "react-redux";
import FormComponent from "../../core/components/FormComponent";
import {
  createProduct,
  editProduct,
  getProducts,
  removeProduct,
} from "../../core/services/API/products";

function ProductForm() {
  const products = useSelector((state) => state.productList.products);

  // Transform orders to include fullname directly
  const transformedItems = products.map((item) => ({
    ...item,
    // orderDate: new Date(item.orderDate).toISOString().slice(0, 16),
    // customerFullname: item.customer?.fullname || "N/A",
  }));

  const columns = [
    { name: "name", label: "Product Name", type: "text", required: true },
    { name: "description", label: "Description", type: "text", required: true },
    { name: "price", label: "Price", type: "number", required: true },
    {
      name: "category",
      label: "Category",
      type: "select",
      options: ["Bread", "Pastry", "Cakes", "Cookies"],
      required: true,
    },
    {
      name: "isAvailable",
      label: "Available",
      type: "select",
      options: ["true", "false"],
      required: true,
    },
  ];

  return (
    <div>
      <FormComponent
        initialData={transformedItems}
        columns={columns}
        apiActions={{
          create: createProduct,
          update: editProduct,
          delete: removeProduct,
          getAll: getProducts,
        }}
        entityName="products"
      />
    </div>
  );
}

export default ProductForm;
