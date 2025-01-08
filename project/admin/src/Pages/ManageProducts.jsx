import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ManageProducts() {
  const [products, setProducts] = useState([]); // State to hold fetched products
  const [loading, setLoading] = useState(true); // Loading state
  const [editMode, setEditMode] = useState(false); // Toggle edit mode
  const [currentProduct, setCurrentProduct] = useState(null); // Product being edited
  const [updatedProduct, setUpdatedProduct] = useState({}); // Updated product details

  useEffect(() => {
    fetchProducts();
  }, []);

  // Fetch products from the API
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/addproducts");
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      Swal.fire("Error", "Failed to fetch product data. Please try again.", "error");
      setLoading(false);
    }
  };

  // Handle edit button click
  const handleEditClick = (product) => {
    setEditMode(true);
    setCurrentProduct(product);
    setUpdatedProduct({ ...product }); // Populate form with product details
  };

  // Handle input changes for updated product
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prev) => ({ ...prev, [name]: value }));
  };

  // Save updated product
  const saveProduct = async () => {
    try {
      await axios.put(`http://localhost:3000/addproducts/${currentProduct.id}`, updatedProduct);
      Swal.fire("Updated!", "The product has been updated successfully.", "success");
      fetchProducts(); // Refresh the product list
      setEditMode(false); // Exit edit mode
    } catch (error) {
      console.error("Error updating product:", error);
      Swal.fire("Error", "Failed to update the product. Please try again.", "error");
    }
  };

  // Delete product
  const deleteProduct = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:3000/addproducts/${id}`);
          Swal.fire("Deleted!", "The product has been deleted.", "success");
          setProducts((prev) => prev.filter((product) => product.id !== id)); // Update state
        } catch (error) {
          console.error("Error deleting product:", error);
          Swal.fire("Error", "Failed to delete the product. Please try again.", "error");
        }
      }
    });
  };

  return (
    <div style={{ maxWidth: "900px", margin: "50px auto" }}>
      <h2
        style={{
          textAlign: "center",
          fontSize: "28px",
          color: "white",
          marginBottom: "30px",
        }}
      >
        Manage Products
      </h2>

      {loading ? (
        <p className="text-center text-white">Loading data...</p>
      ) : products.length === 0 ? (
        <p className="text-center text-gray-400">No product data available.</p>
      ) : editMode ? (
        <div style={{ backgroundColor: "#1f2937", padding: "20px", borderRadius: "8px" }}>
          <h3 style={{ color: "white", textAlign: "center" }}>Edit Product</h3>
          <form>
            <div className="mb-3">
              <label className="form-label text-white">Name</label>
              <input
                type="text"
                className="form-control"
                name="productName"
                value={updatedProduct.productName}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label text-white">Old Price</label>
              <input
                type="number"
                className="form-control"
                name="oldPrice"
                value={updatedProduct.oldPrice}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label text-white">New Price</label>
              <input
                type="number"
                className="form-control"
                name="newPrice"
                value={updatedProduct.newPrice}
                onChange={handleInputChange}
              />
            </div>
            <button
              type="button"
              onClick={saveProduct}
              style={{
                padding: "8px 15px",
                fontSize: "14px",
                borderRadius: "8px",
                backgroundColor: "green",
                color: "white",
                border: "none",
                marginRight: "10px",
              }}
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => setEditMode(false)}
              style={{
                padding: "8px 15px",
                fontSize: "14px",
                borderRadius: "8px",
                backgroundColor: "#dc3545",
                color: "white",
                border: "none",
              }}
            >
              Cancel
            </button>
          </form>
        </div>
      ) : (
        <table className="table table-bordered table-hover table-responsive wide-table">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Old Price</th>
              <th>New Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id} className="bg-transparent">
                <td>{index + 1}</td>
                <td>{product.productName}</td>
                <td>₹{product.oldPrice}</td>
                <td>₹{product.newPrice}</td>
                <td>
                  <button
                    className="btn btn-sm"
                    onClick={() => handleEditClick(product)}
                    style={{
                      padding: "8px 15px",
                      fontSize: "14px",
                      borderRadius: "8px",
                      backgroundColor: "green",
                      color: "white",
                      border: "none",
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm ms-2"
                    onClick={() => deleteProduct(product.id)}
                    style={{
                      padding: "8px 15px",
                      fontSize: "14px",
                      borderRadius: "8px",
                      backgroundColor: "#dc3545",
                      color: "white",
                      border: "none",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
