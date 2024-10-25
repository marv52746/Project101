import React from "react";
import { useSelector } from "react-redux";
import FormComponent from "../../core/components/FormComponent";
import { createProduct, editProduct } from "../../core/services/API/products";

function ProductForm() {
  const products = useSelector((state) => state.productList.products);

  // Transform orders to include fullname directly
  const transformedItems = products.map((item) => ({
    ...item,
    // orderDate: new Date(item.orderDate).toISOString().slice(0, 16),
    // customerFullname: item.customer?.fullname || "N/A",
  }));

  const columns = [
    { name: "name", label: "Product Name", type: "text" },
    { name: "description", label: "Description", type: "text" },
    { name: "price", label: "Price", type: "number" },
    { name: "category", label: "Category", type: "text" },
    { name: "isAvailable", label: "Available", type: "boolean" },
  ];

  return (
    <div>
      <FormComponent
        initialData={transformedItems}
        columns={columns}
        apiActions={{ create: createProduct, update: editProduct }}
        entityName="products"
      />
    </div>
  );
}

export default ProductForm;
