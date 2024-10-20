import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"; // Import useParams to access URL parameters
import TableComponent from "../../core/components/TableComponent";
import { getProducts } from "../../core/services/API/products"; // Adjust the import path as necessary

function ProductList() {
  const dispatch = useDispatch();
  const { category } = useParams(); // Get category from URL parameters

  // Get products from the Redux store
  const { products, loading, error } = useSelector(
    (state) => state.productList
  );

  const columns = [
    { key: "name", header: "Product Name" },
    { key: "description", header: "Description" },
    { key: "price", header: "Price" },
    { key: "category", header: "Category" },
    { key: "isAvailable", header: "Available" },
  ];

  // Fetch products when the component mounts
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch, category]);

  // Filter products based on the category from the URL
  const filteredProducts = category
    ? products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      )
    : products;

  return (
    <div>
      {loading && <p>Loading products...</p>}
      {error && <p>Error fetching products: {error}</p>}
      {!loading && !error && (
        <TableComponent
          path={"products"}
          columns={columns}
          initialData={filteredProducts || []} // Use filtered products
          title="Product Management"
        />
      )}
    </div>
  );
}

export default ProductList;
