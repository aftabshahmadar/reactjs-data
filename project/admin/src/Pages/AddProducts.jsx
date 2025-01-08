
// import React from 'react';

// export default function AddProducts() {
     
//     const [catdata, catsetData] = useState([]);
//     useEffect(() => {
//         axios
//           .get("http://localhost:3000/addcategory") 
//           .then((response) => {
//             catsetData(response.data);
//           })
//           .catch((error) => {
//             console.error("Error fetching categories:", error);
//           });
//       }, [catdata]);

//       const [subdata, subsetData] = useState([]);
//       useEffect(() => {
//           axios
//             .get("http://localhost:3000/addSubcategory") 
//             .then((response) => {
//               subsetData(response.data);
//             })
//             .catch((error) => {
//               console.error("Error fetching categories:", error);
//             });
//         }, [subdata]);

//     return (
//         <div style={{ maxWidth: '500px', margin: '50px auto' }}>
//           <select
//             id="categorySelect"
//             className="form-control"
//             value={selectedCategory}
//             onChange={(e) => setSelectedCategory(e.target.value)}
//             style={{
//               width: "100%",
//               padding: "15px",
//               fontSize: "16px",
//               borderRadius: "8px",
//               backgroundColor: "transparent",
//               border: "2px solid #ddd",
//               color: "white",
//             }}
//           >
//             <option value="">-- Select Subcategory --</option>
//             {subdata.map((item) => (
//               <option key={item.id} value={item.subdata} style={{ color: "#263043" }}>
//                 {item.subdata}
//               </option>
//             ))}
//           </select>
//             <form>
//                 {/* Category Name */}
//                 <div style={{ marginBottom: '25px' }}>
//                     <label
//                         htmlFor="categoryName"
//                         style={{
//                             display: 'block',
//                             marginBottom: '10px',
//                             fontWeight: 'bold',
//                             color: 'white',
//                             fontSize: '18px',
//                         }}
//                     >
//                         Category Name
//                     </label>
//                     <input
//                         type="text"
//                         id="categoryName"
//                         placeholder="Enter category name"
//                         style={{
//                             width: '100%',
//                             padding: '15px',
//                             fontSize: '16px',
//                             borderRadius: '8px',
//                             backgroundColor: 'transparent',
//                             border: '2px solid #ddd',
//                             color: 'white',
//                         }}
//                     />
//                 </div>
//                 {/* product name */}
                    
//                 <div style={{ marginBottom: '25px' }}>
//                     <label
//                         htmlFor="productName"
//                         style={{
//                             display: 'block',
//                             marginBottom: '10px',
//                             fontWeight: 'bold',
//                             color: 'white',
//                             fontSize: '18px',
//                         }}
//                     >
//                         Product Name
//                     </label>
//                     <input
//                         type="text"
//                         id="productName"
//                         placeholder="Enter product name"
//                         style={{
//                             width: '100%',
//                             padding: '15px',
//                             fontSize: '16px',
//                             borderRadius: '8px',
//                             backgroundColor: 'transparent',
//                             border: '2px solid #ddd',
//                             color: 'white',
//                         }}
//                     />
//                 </div>
                

//                 {/* product Description */}
//                 <div style={{ marginBottom: '25px' }}>
//                     <label
//                         htmlFor="productDescription"
//                         style={{
//                             display: 'block',
//                             marginBottom: '10px',
//                             fontWeight: 'bold',
//                             color: 'white',
//                             fontSize: '18px',
//                         }}
//                     >
//                         Product Description
//                     </label>
//                     <textarea 
//                         id="productDescription"
//                         rows="4"
//                         placeholder="Enter product description *"
//                         style={{
//                             width: '100%',
//                             padding: '15px',
//                             fontSize: '16px',
//                             borderRadius: '8px',
//                             backgroundColor: 'transparent',
//                             border: '2px solid #ddd',
//                             color: 'white',
//                         }}
//                     ></textarea>
//                 </div>
//                 {/* product URL */}

//                 <div style={{ marginBottom: '25px' }}>
//                     <label
//                         htmlFor="productURL"
//                         style={{
//                             display: 'block',
//                             marginBottom: '10px',
//                             fontWeight: 'bold',
//                             color: 'white',
//                             fontSize: '18px',
//                         }}
//                     >
//                         Product URL
//                     </label>
//                     <input
//                         type="text"
//                         id="categoryName"
//                         placeholder="Enter product URL"
//                         style={{
//                             width: '100%',
//                             padding: '15px',
//                             fontSize: '16px',
//                             borderRadius: '8px',
//                             backgroundColor: 'transparent',
//                             border: '2px solid #ddd',
//                             color: 'white',
//                         }}
//                     />
//                 </div>

//                 {/* Date */}
//                 <div style={{ marginBottom: '25px' }}>
//                     <label
//                         htmlFor="productDate"
//                         style={{
//                             display: 'block',
//                             marginBottom: '10px',
//                             fontWeight: 'bold',
//                             color: 'white',
//                             fontSize: '18px',
//                         }}
//                     >
//                         Date
//                     </label>
//                     <input
//                         type="date"
//                         id="productDate"
//                         style={{
//                             width: '100%',
//                             padding: '15px',
//                             fontSize: '16px',
//                             borderRadius: '8px',
//                             backgroundColor: 'transparent',
//                             border: '2px solid #ddd',
//                             color: 'white',
//                         }}
//                     />
//                 </div>
//                 {/* old price of product */}

//                 <div style={{ marginBottom: '25px' }}>
//                     <label
//                         htmlFor="oldprice"
//                         style={{
//                             display: 'block',
//                             marginBottom: '10px',
//                             fontWeight: 'bold',
//                             color: 'white',
//                             fontSize: '18px',
//                         }}
//                     >
//                         Old price
//                     </label>
//                     <input
//                         type="text"
//                         id="oldprice"
//                         placeholder="Enter product's old price *"
//                         style={{
//                             width: '100%',
//                             padding: '15px',
//                             fontSize: '16px',
//                             borderRadius: '8px',
//                             backgroundColor: 'transparent',
//                             border: '2px solid #ddd',
//                             color: 'white',
//                         }}
//                     />
//                 </div>

//                 {/* product's new price */}

//                 <div style={{ marginBottom: '25px' }}>
//                     <label
//                         htmlFor="newprice"
//                         style={{
//                             display: 'block',
//                             marginBottom: '10px',
//                             fontWeight: 'bold',
//                             color: 'white',
//                             fontSize: '18px',
//                         }}
//                     >
//                         New price
//                     </label>
//                     <input
//                         type="text"
//                         id="newprice"
//                         placeholder="Enter product's new price *"
//                         style={{
//                             width: '100%',
//                             padding: '15px',
//                             fontSize: '16px',
//                             borderRadius: '8px',
//                             backgroundColor: 'transparent',
//                             border: '2px solid #ddd',
//                             color: 'white',
//                         }}
//                     />
//                 </div>


//                 {/* Submit Button */}
//                 <div>
//                     <button
//                         type="submit"
//                         style={{
//                             width: '20%',
//                             padding: '15px',
//                             fontSize: '18px',
//                             backgroundColor: '#007bff',
//                             color: 'white',
//                             border: 'none',
//                             borderRadius: '8px',
//                             cursor: 'pointer',
//                             float: 'left'
//                         }}
//                         onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
//                         onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
//                     >
//                         Add
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// }

// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";

// export default function AddProducts() {
//   const [catdata, setCatData] = useState([]);
//   const [subdata, setSubData] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [selectedSubcategory, setSelectedSubcategory] = useState("");

//   // Refs for form fields
// //   const categoryNameRef = useRef();
//   const productNameRef = useRef();
//   const productDescriptionRef = useRef();
//   const productURLRef = useRef();
//   const productDateRef = useRef();
//   const oldPriceRef = useRef();
//   const newPriceRef = useRef();

//   // Fetch categories
//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/addcategory")
//       .then((response) => setCatData(response.data))
//       .catch((error) => console.error("Error fetching categories:", error));
//   }, []);

//   // Fetch subcategories
//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/addSubcategory")
//       .then((response) => setSubData(response.data))
//       .catch((error) => console.error("Error fetching subcategories:", error));
//   }, []);

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const payload = {
//       category: selectedCategory,
//       subcategory: selectedSubcategory,
//     //   categoryName: categoryNameRef.current.value,
//       productName: productNameRef.current.value,
//       productDescription: productDescriptionRef.current.value,
//       productURL: productURLRef.current.value,
//       productDate: productDateRef.current.value,
//       oldPrice: oldPriceRef.current.value,
//       newPrice: newPriceRef.current.value,
//     };

//     axios
//       .post("http://localhost:3000/addproducts", payload)
//       .then((response) => {
//         console.log("Product added successfully:", response.data);
//         alert("Product added successfully!");

//         // Reset fields after success
//       setSelectedCategory("");
//       setSelectedSubcategory("");
//       productNameRef.current.value = "";
//       productDescriptionRef.current.value = "";
//       productURLRef.current.value = "";
//       productDateRef.current.value = "";
//       oldPriceRef.current.value = "";
//       newPriceRef.current.value = "";
//       })
//       .catch((error) => {
//         console.error("Error adding product:", error);
//         alert("Failed to add product.");
//       });
//   };


//   return (
//     <div style={{ maxWidth: "500px", margin: "50px auto" }}>
//       <form onSubmit={handleSubmit}>
//         {/* Category Select */}
//         <div style={{ marginBottom: "25px" }}>
//           <label htmlFor="categorySelect" style={labelStyle}>
//             Select Category
//           </label>
//           <select
//             id="categorySelect"
//             value={selectedCategory}
//             onChange={(e) => setSelectedCategory(e.target.value)}
//             style={selectStyle}
//           >
//             <option value="">-- Select Category --</option>
//             {catdata.map((item) => (
//               <option key={item.id} value={item.name} style={{ color: "#263043" }}>
//                 {item.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Subcategory Select */}
//         <div style={{ marginBottom: "25px" }}>
//           <label htmlFor="subcategorySelect" style={labelStyle}>
//             Select Subcategory
//           </label>
//           <select
//             id="subcategorySelect"
//             value={selectedSubcategory}
//             onChange={(e) => setSelectedSubcategory(e.target.value)}
//             style={selectStyle}
//           >
//             <option value="">-- Select Subcategory --</option>
//             {subdata.map((item) => (
//               <option key={item.id} value={item.name} style={{ color: "#263043" }}>
//                 {item.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Category Name
//         <InputField label="Category Name" ref={categoryNameRef} placeholder="Enter category name" /> */}

//         {/* Product Name */}
//         <InputField label="Product Name" ref={productNameRef} placeholder="Enter product name" />

//         {/* Product Description */}
//         <TextAreaField
//           label="Product Description"
//           ref={productDescriptionRef}
//           placeholder="Enter product description"
//         />

//         {/* Product URL */}
//         <InputField label="Product URL" ref={productURLRef} placeholder="Enter product URL" />

//         {/* Date */}
//         <InputField label="Date" ref={productDateRef} type="date" />

//         {/* Old Price */}
//         <InputField label="Old Price" ref={oldPriceRef} placeholder="Enter old price" />

//         {/* New Price */}
//         <InputField label="New Price" ref={newPriceRef} placeholder="Enter new price" />

//         {/* Submit Button */}
//         <div>
//           <button type="submit" style={buttonStyle}>
//             Add Product
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// // Reusable InputField Component
// const InputField = React.forwardRef(({ label, placeholder, type = "text" }, ref) => (
//   <div style={{ marginBottom: "25px" }}>
//     <label style={labelStyle}>{label}</label>
//     <input
//       type={type}
//       placeholder={placeholder}
//       ref={ref}
//       style={{
//         width: "100%",
//         padding: "15px",
//         fontSize: "16px",
//         borderRadius: "8px",
//         backgroundColor: "transparent",
//         border: "2px solid #ddd",
//         color: "white",
//       }}
//     />
//   </div>
// ));

// // Reusable TextAreaField Component
// const TextAreaField = React.forwardRef(({ label, placeholder }, ref) => (
//   <div style={{ marginBottom: "25px" }}>
//     <label style={labelStyle}>{label}</label>
//     <textarea
//       rows="4"
//       placeholder={placeholder}
//       ref={ref}
//       style={{
//         width: "100%",
//         padding: "15px",
//         fontSize: "16px",
//         borderRadius: "8px",
//         backgroundColor: "transparent",
//         border: "2px solid #ddd",
//         color: "white",
//       }}
//     />
//   </div>
// ));

// // Styles
// const labelStyle = {
//   display: "block",
//   marginBottom: "10px",
//   fontWeight: "bold",
//   color: "white",
//   fontSize: "18px",
// };

// const selectStyle = {
//   width: "100%",
//   padding: "15px",
//   fontSize: "16px",
//   borderRadius: "8px",
//   backgroundColor: "transparent",
//   border: "2px solid #ddd",
//   color: "white",
// };

// const buttonStyle = {
//   width: "20%",
//   padding: "15px",
//   fontSize: "18px",
//   backgroundColor: "#007bff",
//   color: "white",
//   border: "none",
//   borderRadius: "8px",
//   cursor: "pointer",
// };

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function AddProducts() {
  const [catdata, setCatData] = useState([]);
  const [subdata, setSubData] = useState([]);
  const [filteredSubdata, setFilteredSubData] = useState([]); // For filtered subcategories
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  // Refs for form fields
  const productNameRef = useRef();
  const productDescriptionRef = useRef();
  const productURLRef = useRef();
  const productDateRef = useRef();
  const oldPriceRef = useRef();
  const newPriceRef = useRef();

  // Fetch categories
  useEffect(() => {
    axios
      .get("http://localhost:3000/addcategory")
      .then((response) => setCatData(response.data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  // Fetch subcategories
  useEffect(() => {
    axios
      .get("http://localhost:3000/addSubcategory")
      .then((response) => setSubData(response.data))
      .catch((error) => console.error("Error fetching subcategories:", error));
  }, []);

  // Filter subcategories when category changes
  useEffect(() => {
    if (selectedCategory) {
      const filtered = subdata.filter(
        (item) => item.category === selectedCategory // Assuming subcategories have a "category" field
      );
      setFilteredSubData(filtered);
    } else {
      setFilteredSubData([]); // Reset if no category is selected
    }
  }, [selectedCategory, subdata]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      category: selectedCategory,
      subcategory: selectedSubcategory,
      productName: productNameRef.current.value,
      productDescription: productDescriptionRef.current.value,
      productURL: productURLRef.current.value,
      productDate: productDateRef.current.value,
      oldPrice: oldPriceRef.current.value,
      newPrice: newPriceRef.current.value,
    };

    axios
      .post("http://localhost:3000/addproducts", payload)
      .then((response) => {
        console.log("Product added successfully:", response.data);
        alert("Product added successfully!");

        // Reset fields after success
        setSelectedCategory("");
        setSelectedSubcategory("");
        productNameRef.current.value = "";
        productDescriptionRef.current.value = "";
        productURLRef.current.value = "";
        productDateRef.current.value = "";
        oldPriceRef.current.value = "";
        newPriceRef.current.value = "";
      })
      .catch((error) => {
        console.error("Error adding product:", error);
        alert("Failed to add product.");
      });
  };

  return (
    <div style={{ maxWidth: "500px", margin: "50px auto" }}>
      <form onSubmit={handleSubmit}>
        {/* Category Select */}
        <div style={{ marginBottom: "25px" }}>
          <label htmlFor="categorySelect" style={labelStyle}>
            Select Category
          </label>
          <select
            id="categorySelect"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={selectStyle}
          >
            <option value="">-- Select Category --</option>
            {catdata.map((item) => (
              <option key={item.id} value={item.name} style={{ color: "#263043" }}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        {/* Subcategory Select */}
        <div style={{ marginBottom: "25px" }}>
          <label htmlFor="subcategorySelect" style={labelStyle}>
            Select Subcategory
          </label>
          <select
            id="subcategorySelect"
            value={selectedSubcategory}
            onChange={(e) => setSelectedSubcategory(e.target.value)}
            style={selectStyle}
          >
            <option value="">-- Select Subcategory --</option>
            {filteredSubdata.map((item) => (
              <option key={item.id} value={item.name} style={{ color: "#263043" }}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        {/* Product Name */}
        <InputField label="Product Name" ref={productNameRef} placeholder="Enter product name" />

        {/* Product Description */}
        <TextAreaField
          label="Product Description"
          ref={productDescriptionRef}
          placeholder="Enter product description"
        />

        {/* Product URL */}
        <InputField label="Product URL" ref={productURLRef} placeholder="Enter product URL" />

        {/* Date */}
        <InputField label="Date" ref={productDateRef} type="date" />

        {/* Old Price */}
        <InputField label="Old Price" ref={oldPriceRef} placeholder="Enter old price" />

        {/* New Price */}
        <InputField label="New Price" ref={newPriceRef} placeholder="Enter new price" />

        {/* Submit Button */}
        <div>
          <button type="submit" style={buttonStyle}>
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}

// Reusable InputField Component
const InputField = React.forwardRef(({ label, placeholder, type = "text" }, ref) => (
  <div style={{ marginBottom: "25px" }}>
    <label style={labelStyle}>{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      ref={ref}
      style={{
        width: "100%",
        padding: "15px",
        fontSize: "16px",
        borderRadius: "8px",
        backgroundColor: "transparent",
        border: "2px solid #ddd",
        color: "white",
      }}
    />
  </div>
));

// Reusable TextAreaField Component
const TextAreaField = React.forwardRef(({ label, placeholder }, ref) => (
  <div style={{ marginBottom: "25px" }}>
    <label style={labelStyle}>{label}</label>
    <textarea
      rows="4"
      placeholder={placeholder}
      ref={ref}
      style={{
        width: "100%",
        padding: "15px",
        fontSize: "16px",
        borderRadius: "8px",
        backgroundColor: "transparent",
        border: "2px solid #ddd",
        color: "white",
      }}
    />
  </div>
));

// Styles
const labelStyle = {
  display: "block",
  marginBottom: "10px",
  fontWeight: "bold",
  color: "white",
  fontSize: "18px",
};

const selectStyle = {
  width: "100%",
  padding: "15px",
  fontSize: "16px",
  borderRadius: "8px",
  backgroundColor: "transparent",
  border: "2px solid #ddd",
  color: "white",
};

const buttonStyle = {
  width: "20%",
  padding: "15px",
  fontSize: "18px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};
