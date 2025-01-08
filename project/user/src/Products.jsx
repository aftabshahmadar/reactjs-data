// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import Navbar from './navbar';
// import Footer from './footer';
// import { useNavigate } from 'react-router-dom'

// export default function Products() {
//   const navigate = useNavigate()
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [categories, setCategories] = useState([]); // State to store categories
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const productsRef = useRef([]);

//   // Fetch categories from the API
//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/addcategory") // Fetch categories
//       .then((response) => {
//         setCategories(response.data); // Store categories in state
//       })
//       .catch((error) => console.error("Error fetching categories:", error));
//   }, []);

//   // Fetch products from the API
//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/addproducts") // Fetch products
//       .then((response) => {
//         productsRef.current = response.data;
//         setProducts(response.data);
//         setFilteredProducts(response.data); // Initially show all products
//       })
//       .catch((error) => console.error("Error fetching products:", error));
//   }, []);

//   // Handle category selection
//   const handleCategoryChange = (e) => {
//     const category = e.target.value;
//     setSelectedCategory(category);

//     if (category === "All") {
//       setFilteredProducts(products); // Show all products if "All" is selected
//     } else {
//       const filtered = products.filter(
//         (product) => product.category === category
//       );
//       setFilteredProducts(filtered); // Filter products by selected category
//     }
//   };

//   // Add to cart handler (you can extend this logic for cart management)
//   const handleViewProduct = (product) => {
//     console.log(product);
//     navigate("/product-details");

//     //
//   };

//   return (
//     <div className="container mt-10 mb-20">
//       {/* Category Selection Dropdown */}
//       <div className="mb-6 text-white">
//         <label htmlFor="category" className="text-lg font-semibold text-white mr-2">
//           Select Category:
//         </label>
//         <div></div>
//         <select
//           style={{ backgroundColor: "#08314A" }}
//           id="category"
//           value={selectedCategory}
//           onChange={handleCategoryChange}
//           className="p-2 rounded"
//         >
//           <option value="All">All</option>
//           {categories.map((category) => (
//             <option key={category.id} value={category.name}>
//               {category.name}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((product, index) => (
//             <div
//               key={index}
//               className="p-5 rounded text-white hover:scale-105 duration-300 flex flex-col"
//               style={{ backgroundColor: "#08314A" }}
//             >
//               {/* Product Image */}
//               {product.productURL && (
//                 <img
//                   src={product.productURL}
//                   alt={product.productName}
//                   className="rounded mb-4 w-full h-50 object-cover"
//                 />
//               )}

//               {/* Product Details */}
//               <div className="flex-grow">
//                 <h2 className="text-lg font-bold truncate">{product.productName}</h2>
//                 <p className="text-sm mt-2 text-gray-300 line-clamp-3">
//                   {product.productDescription}
//                 </p>
//               </div>

//               {/* Add to Cart Button */}
//               <div className="mt-4">
//                 <button
//                   onClick={() => handleViewProduct(product)} // Trigger Add to Cart
//                   className="px-4 py-2 bg-blue-500 w-100 text-white font-semibold rounded hover:bg-blue-600"
//                   style={{backgroundColor: "#145376"}}
//                 >
//                   View product
//                 </button>
//               </div>

//               {/* Price Section */}
//               <div className="mt-4 flex items-center space-x-3">
//                 <p className="text-sm font-semibold text-gray-400 line-through">
//                   ₹{product.oldPrice}
//                 </p>
//                 <p className="text-lg font-semibold text-green-500">
//                   ₹{product.newPrice}
//                 </p>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-center col-span-3 text-gray-400">
//             No products available in this category.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [offerProducts, setOfferProducts] = useState([]); // State for products with 50% off
  const [loading, setLoading] = useState(true); // Loading state to show loading message while fetching
  const productsRef = useRef([]);

  // Fetch categories from the API
  useEffect(() => {
    axios
      .get("http://localhost:3000/addcategory")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  // Fetch products from the API
  useEffect(() => {
    setLoading(true); // Start loading
    axios
      .get("http://localhost:3000/addproducts")
      .then((response) => {
        productsRef.current = response.data;
        setProducts(response.data);
        setFilteredProducts(response.data); // Make sure this sets both products and filtered products correctly
        // Filter products with 50% off
        const offers = response.data.filter(
          (product) => product.newPrice <= product.oldPrice / 2
        );
        setOfferProducts(offers);
      })
      .catch((error) => console.error("Error fetching products:", error))
      .finally(() => setLoading(false)); // Set loading to false once data is fetched
  }, []);

  // Handle category selection
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);

    if (category === "All") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
  };

  // View product handler
  const handleViewProduct = (product) => {
    navigate("/product-details", { state: { product } });
  };

  return (
    <div className="container mt-10 mb-20" data-aos="fade-up">
      <div>
        <hr className="text-gray-300" />
        <h1 className="text-center text-gray-300">
          Get upto 50% OFF on your desired products!
        </h1>
      </div>

      {/* Display Offer Products */}
      {offerProducts.length > 0 && (
        <div className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerProducts.map((product, index) => (
              <div
                key={index}
                className="p-5 rounded text-white hover:scale-105 duration-300 flex flex-col"
                style={{ backgroundColor: "#08314A" }}
              >
                {product.productURL && (
                  <img
                    src={product.productURL}
                    alt={product.productName}
                    className="rounded mb-4 w-full h-50 object-cover"
                  />
                )}
                <div className="flex-grow">
                  <h2 className="text-lg font-bold truncate">
                    {product.productName}
                  </h2>
                  <p className="text-sm mt-2 text-gray-300 line-clamp-3">
                    {product.productDescription}
                  </p>
                </div>
                <div className="mt-4">
                  <button
                    onClick={() => handleViewProduct(product)}
                    className="px-4 py-2 bg-blue-500 w-100 text-white font-semibold rounded hover:bg-blue-600"
                    style={{ backgroundColor: "#145376" }}
                  >
                    View Product
                  </button>
                </div>
                <div className="mt-4 flex items-center space-x-3">
                  <p className="text-sm font-semibold text-gray-400 line-through">
                    ₹{product.oldPrice}
                  </p>
                  <p className="text-lg font-semibold text-green-500">
                    ₹{product.newPrice}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Category Selection Dropdown */}
      <hr className="text-gray-300" />
      <h3 className="text-gray-100">Explore Our Exclusive Product Collection</h3>
      <p className="text-gray-200">
        Discover a wide range of high-quality products, designed to cater to
        your unique needs. From everyday essentials to premium items, we have
        something for everyone. Our products are curated with precision,
        ensuring you get the best value for your money. Whether you're looking
        for the latest trends, top-notch functionality, or unbeatable deals, you
        can trust our collection to deliver. Browse through our categories,
        compare prices, and find the perfect product that fits your lifestyle.
        Shop now and enjoy the best of quality, affordability, and style all in
        one place.
      </p>

      <div className="mb-6 text-white mt-5">
        <label
          htmlFor="category"
          className="text-lg font-semibold text-white mr-2"
        >
          Select Category of products:
        </label>
        <select
          style={{ backgroundColor: "#08314A" }}
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="p-2 rounded"
        >
          <option value="All">All</option>
          {categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* Product Grid */}
      {loading ? (
        <div className="text-center text-white">Loading products...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="p-5 rounded text-white hover:scale-105 duration-300 flex flex-col"
                style={{ backgroundColor: "#08314A" }}
              >
                {product.productURL && (
                  <img
                    src={product.productURL}
                    alt={product.productName}
                    className="rounded mb-4 w-full h-50 object-cover"
                  />
                )}
                <div className="flex-grow">
                  <h2 className="text-lg font-bold truncate">
                    {product.productName}
                  </h2>
                  <p className="text-sm mt-2 text-gray-300 line-clamp-3">
                    {product.productDescription}
                  </p>
                </div>
                <div className="mt-4">
                  <button
                    onClick={() => handleViewProduct(product)}
                    className="px-4 py-2 bg-blue-500 w-100 text-white font-semibold rounded hover:bg-blue-600"
                    style={{ backgroundColor: "#145376" }}
                  >
                    View Product
                  </button>
                </div>
                <div className="mt-4 flex items-center space-x-3">
                  <p className="text-sm font-semibold text-gray-400 line-through">
                    ₹{product.oldPrice}
                  </p>
                  <p className="text-lg font-semibold text-green-500">
                    ₹{product.newPrice}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-3 text-gray-400">
              No products available in this category.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
