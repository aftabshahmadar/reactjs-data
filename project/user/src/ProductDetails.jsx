import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import dummy1 from './assets/images/dummy1.png';
import Swal from "sweetalert2";

export default function ProductDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const { product } = location.state || {};

  const [quantity, setQuantity] = useState(1);
  const [addedToCartMessage, setAddedToCartMessage] = useState(""); // State for message
  const [cartItems, setCartItems] = useState([]); // State for cart items

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const formatNumber = (number) => {
    return parseFloat(number.replace(/,/g, ''));
  };

  const gobacktoshopping = () => {
    navigate("/products");
  };

  const subPrice = formatNumber(product.newPrice) * quantity;

  // Fetch the updated cart data
  const fetchCartItems = async () => {
    try {
      const response = await axios.get("http://localhost:5000/cart");
      setCartItems(response.data);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  // Call the function to fetch the cart when the component mounts
  useEffect(() => {
    fetchCartItems();
  }, []);

  const addToCart = async () => {
    try {
      const cartItem = {
        id: product.id, // Use product's unique ID
        productName: product.productName,
        productURL: product.productURL,
        quantity: parseInt(quantity, 10),
        subtotal: subPrice,
      };
  
      await axios.post("http://localhost:5000/cart", cartItem);
  
      // Set the message and hide it after 3 seconds
      setAddedToCartMessage("Product added to cart successfully!");
      setTimeout(() => {
        setAddedToCartMessage(""); // Clear message after 3 seconds
      }, 3000);
  
      // Optimistically update the cart state without needing to fetch again
      setCartItems((prevItems) => [...prevItems, cartItem]);
    } catch (error) {
      console.error("Error adding product to cart:", error);
      Swal.fire("Failed to add product to cart.");
    }
  };
  

  if (!product) {
    return <p>No product data available.</p>;
  }

  return (
    <div className="p-5 text-gray-300 text-left">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {product.productURL && (
          <div className="w-full mb-4 col-span-1">
            <img
              src={product.productURL}
              alt={product.productName}
              className="rounded w-full h-auto object-cover"
            />
          </div>
        )}

        <div className="flex-grow text-left col-span-2 lg:col-span-1">
          <h2 className="text-lg font-bold break-words">{product.productName}</h2>
          <div
            className="mt-2 text-sm text-gray-300"
            style={{
              maxHeight: "120px",
              overflowY: "auto",
              scrollbarWidth: "none",
            }}
          >
            <p>{product.productDescription}</p>
          </div>
          <div className="mt-2 flex items-center space-x-3">
            <p className="text-sm font-semibold text-gray-400 line-through text-left">
              ₹{product.oldPrice}
            </p>
            <p className="text-lg font-semibold text-green-500 text-left">
              ₹{product.newPrice}
            </p>
          </div>
          <div className="mt-2 flex items-center">
            <label htmlFor="quantity" className="mr-2 text-sm text-gray-300">
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={quantity}
              min="1"
              onChange={handleQuantityChange}
              className="w-16 px-2 py-1 border rounded-md text-gray-700"
              style={{ backgroundColor: "transparent", color: "white", border: "none" }}
            />
          </div>
          <div className="mt-2 text-sm text-gray-300">
            <p className="font-semibold">
              Subtotal: ₹{subPrice.toLocaleString()}
            </p>
          </div>

          {/* Display success message after adding to cart */}
          {addedToCartMessage && (
            <div className="mt-3 text-sm text-green-500 font-semibold">
              {addedToCartMessage}
            </div>
          )}

          <div className="mt-4" style={{ display: "flex", width: "100%", gap: "10px" }}>
            <button
              onClick={addToCart}
              className="px-4 py-2 bg-blue-500 w-100 text-white font-semibold rounded hover:bg-blue-600"
              style={{ backgroundColor: "#145376" }}
            >
              Add to cart
            </button>
            <button
              onClick={gobacktoshopping}
              className="px-4 py-2 bg-blue-500 w-100 text-white font-semibold rounded hover:bg-blue-600"
              style={{ backgroundColor: "#145376" }}
            >
              Back to shopping
            </button>
          </div>
        </div>

        <div className="w-full col-span-1 flex justify-center items-center">
          <img
            src={dummy1}
            alt="Demo"
            className="rounded w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}
