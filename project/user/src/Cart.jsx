import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch the data from the API
    axios.get('http://localhost:5000/cart')
      .then(response => {
        console.log(response.data); // Log response to check if productImage exists
        setCartItems(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the cart data!', error);
      });
  }, []);

  // Function to handle deleting an item
  const handleDelete = (productId) => {
    axios.delete(`http://localhost:5000/cart/${productId}`)
      .then(() => {
        // Remove the deleted item from the state without needing to refetch data
        setCartItems(cartItems.filter(item => item.id !== productId));
      })
      .catch(error => {
        console.error('There was an error deleting the item!', error);
      });
  };

  // Calculate the total amount by summing the subtotals of all cart items
  const totalAmount = cartItems.reduce((total, item) => total + item.subtotal, 0);
  const Orderplaced =()=>{
    Swal.fire("Thank your for Choosing us!")
    axios.delete(`http://localhost:5000/cart
    // `)
    .then(() => {
      // Remove the deleted item from the state without needing to refetch data
      setCartItems([]);
    })
    .catch(error => {
      console.error('There was an error deleting the item!', error);
    });
  }
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4 text-gray-300">Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center text-gray-300"
        style={{marginBottom:"30%"}}>
          Your cart is empty.
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
          
            <thead>
              <tr>
                <th>Image</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img
                      src={item.productURL}
                      alt={item.productName}
                      className="img-fluid"
                      style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                    />
                  </td>
                  <td>{item.productName}</td>
                  <td>{item.quantity}</td>
                  <td>{item.subtotal}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {/* Row for Total Amount in the "Subtotal" column */}
              <tr>
                <td colSpan="3" className="text-right"><strong>Total:</strong></td>
                <td colSpan="2"><strong>₹{totalAmount}</strong></td>
              </tr>
            </tbody>
          </table>
          
          {/* Place Order Button */}
          <div className="d-flex justify-content-end mt-3"
          style={{marginBottom:"10%"}}>
            <button
            style={{ backgroundColor: "#08314A" }}
             onClick={Orderplaced}
              className="btn btn text-white"
              disabled={cartItems.length === 0} // Disable if the cart is empty
            >
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
