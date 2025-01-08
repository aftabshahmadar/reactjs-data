// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios"; // Ensure axios is imported

// export default function ManageSubCategory() {
//   const [data, setData] = useState([]); // Initialize with an empty array

//   useEffect(() => {
//     // Fetch data from the API
//     axios
//       .get("http://localhost:3000/addcategory")
//       .then((response) => {
//         setData(response.data); // Update state with the fetched data
//       })
//       .catch((error) => {
//         console.error("Error fetching categories:", error); // Handle any errors
//       });
//   }, []);

//    // Create refs for the form fields
//    const SubcategoryNameRef = useRef();
//    const SubcategoryDescriptionRef = useRef();
//    const SubcategoryDateRef = useRef();

//    // Handle form submission
//    const handleSubmit = async (e) => {
//        e.preventDefault();

//        // Get the values from refs
//        const SubcategoryName = SubcategoryNameRef.current.value;
//        const SubcategoryDescription = SubcategoryDescriptionRef.current.value;
//        const SubcategoryDate = SubcategoryDateRef.current.value;

//        // Construct the data object
//        const data = {
//            name: SubcategoryName,
//            description: SubcategoryDescription,
//            date: SubcategoryDate,
//        };

//        try {
//            // Send data to the API
//            const response = await axios.post(`http://localhost:3000/addSubcategory`, data);
//            Swal.fire("SubCategory added.");
//            console.log('Response:', response.data);
//        } catch (error) {
//            console.error('Error adding Subcategory:', error);
//            Swal.fire("There was an error adding the Subcategory.");
//        }

//        // Clear the form fields
//        SubcategoryNameRef.current.value = "";
//        SubcategoryDescriptionRef.current.value = "";
//        SubcategoryDateRef.current.value = "";

//    };

//   return (
//     <div style={{ maxWidth: "500px", margin: "50px auto" }}>
//       <h2
//         style={{
//           textAlign: "center",
//           fontSize: "28px",
//           color: "white",
//           marginBottom: "30px",
//         }}
//       >
//         Add Product SubCategory
//       </h2>
//       <form onSubmit={handleSubmit}>
//         {/* Select Field */}
//         <div style={{ marginBottom: "25px" }}>
//           <label
//             htmlFor="categorySelect"
//             style={{
//               display: "block",
//               marginBottom: "10px",
//               fontWeight: "bold",
//               color: "white",
//               fontSize: "18px",
//             }}
//           >
//             Category
//           </label>
//           <select
//   id="categorySelect"
//   className="form-control"
//   value={selectedCategory}
//   onChange={handleCategoryChange}
//   style={{
//     width: "100%",
//     padding: "15px",
//     fontSize: "16px",
//     borderRadius: "8px",
//     backgroundColor: "transparent",
//     border: "2px solid #ddd",
//     color: "white",
//   }}
// >
//             <option value="">-- Select category --</option>
//             {data.map((item) => (
//               <option style={{
//                 color: "#263043"
//               }}key={item.id} value={item.name}>
//                 {item.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Category Name */}
//         <div style={{ marginBottom: "25px" }}>
//           <label
//             htmlFor="SubcategoryName"
//             style={{
//               display: "block",
//               marginBottom: "10px",
//               fontWeight: "bold",
//               color: "white",
//               fontSize: "18px",
//             }}
//           >
//             SubCategory Name
//           </label>
//           <input
//             ref={SubcategoryNameRef}
//             type="text"
//             id="SubcategoryName"
//             placeholder="Enter subcategory name"
//             style={{
//               width: "100%",
//               padding: "15px",
//               fontSize: "16px",
//               borderRadius: "8px",
//               backgroundColor: "transparent",
//               border: "2px solid #ddd",
//               color: "white",
//             }}
//           />
//         </div>

//         {/* Category Description */}
//         <div style={{ marginBottom: "25px" }}>
//           <label
//             htmlFor="categoryDescription"
//             style={{
//               display: "block",
//               marginBottom: "10px",
//               fontWeight: "bold",
//               color: "white",
//               fontSize: "18px",
//             }}
//           >
//             Description
//           </label>
//           <textarea
//             ref={SubcategoryDescriptionRef}
//             id="categoryDescription"
//             rows="4"
//             placeholder="Enter subcategory description"
//             style={{
//               width: "100%",
//               padding: "15px",
//               fontSize: "16px",
//               borderRadius: "8px",
//               backgroundColor: "transparent",
//               border: "2px solid #ddd",
//               color: "white",
//             }}
//           ></textarea>
//         </div>

//         {/* Date */}
//         <div style={{ marginBottom: "25px" }}>
//           <label
//             htmlFor="categoryDate"
//             style={{
//               display: "block",
//               marginBottom: "10px",
//               fontWeight: "bold",
//               color: "white",
//               fontSize: "18px",
//             }}
//           >
//             Date
//           </label>
//           <input
//             ref={SubcategoryDate}
//             type="date"
//             id="categoryDate"
//             style={{
//               width: "100%",
//               padding: "15px",
//               fontSize: "16px",
//               borderRadius: "8px",
//               backgroundColor: "transparent",
//               border: "2px solid #ddd",
//               color: "white",
//             }}
//           />
//         </div>

//         {/* Submit Button */}
//         <div>
//           <button
//             type="submit"
//             style={{
//               width: "20%",
//               padding: "15px",
//               fontSize: "18px",
//               backgroundColor: "#007bff",
//               color: "white",
//               border: "none",
//               borderRadius: "8px",
//               cursor: "pointer",
//             }}
//             onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
//             onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
//           >
//             Add
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
// }
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function AddSubCategory() {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const SubcategoryNameRef = useRef();
  const SubcategoryDescriptionRef = useRef();
  const SubcategoryDateRef = useRef();

  useEffect(() => {
    axios
      .get("http://localhost:3000/addcategory") 
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get the values from refs
    const SubcategoryName = SubcategoryNameRef.current.value;
    const SubcategoryDescription = SubcategoryDescriptionRef.current.value;
    const SubcategoryDate = SubcategoryDateRef.current.value;

    if (!selectedCategory || !SubcategoryName || !SubcategoryDescription || !SubcategoryDate) {
      Swal.fire("Please fill in all fields.");
      return;
    }

    // Construct the data object
    const subCategoryData = {
      category: selectedCategory,
      name: SubcategoryName,
      description: SubcategoryDescription,
      date: SubcategoryDate,
    };

    try {
      // Send data to the API
      const response = await axios.post(
        "http://localhost:3000/addSubcategory", // Replace with your API endpoint
        subCategoryData
      );
      Swal.fire("SubCategory added successfully!");
      console.log("Response:", response.data);

      // Clear the form fields
      setSelectedCategory("");
      SubcategoryNameRef.current.value = "";
      SubcategoryDescriptionRef.current.value = "";
      SubcategoryDateRef.current.value = "";
    } catch (error) {
      console.error("Error adding Subcategory:", error);
      Swal.fire("There was an error adding the SubCategory.");
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "50px auto" }}>
      <h2
        style={{
          textAlign: "center",
          fontSize: "28px",
          color: "white",
          marginBottom: "30px",
        }}
      >
        Add Product SubCategory
      </h2>
      <form onSubmit={handleSubmit}>
        {/* Category Dropdown */}
        <div style={{ marginBottom: "25px" }}>
          <label
            htmlFor="categorySelect"
            style={{
              display: "block",
              marginBottom: "10px",
              fontWeight: "bold",
              color: "white",
              fontSize: "18px",
            }}
          >
            Category
          </label>
          <select
            id="categorySelect"
            className="form-control"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{
              width: "100%",
              padding: "15px",
              fontSize: "16px",
              borderRadius: "8px",
              backgroundColor: "transparent",
              border: "2px solid #ddd",
              color: "white",
            }}
          >
            <option value="">-- Select category --</option>
            {data.map((item) => (
              <option key={item.id} value={item.name} style={{ color: "#263043" }}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        {/* SubCategory Name */}
        <div style={{ marginBottom: "25px" }}>
          <label
            htmlFor="SubcategoryName"
            style={{
              display: "block",
              marginBottom: "10px",
              fontWeight: "bold",
              color: "white",
              fontSize: "18px",
            }}
          >
            SubCategory Name
          </label>
          <input
            ref={SubcategoryNameRef}
            type="text"
            id="SubcategoryName"
            placeholder="Enter subcategory name"
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

        {/* SubCategory Description */}
        <div style={{ marginBottom: "25px" }}>
          <label
            htmlFor="categoryDescription"
            style={{
              display: "block",
              marginBottom: "10px",
              fontWeight: "bold",
              color: "white",
              fontSize: "18px",
            }}
          >
            Description
          </label>
          <textarea
            ref={SubcategoryDescriptionRef}
            id="categoryDescription"
            rows="4"
            placeholder="Enter subcategory description"
            style={{
              width: "100%",
              padding: "15px",
              fontSize: "16px",
              borderRadius: "8px",
              backgroundColor: "transparent",
              border: "2px solid #ddd",
              color: "white",
            }}
          ></textarea>
        </div>

        {/* Date */}
        <div style={{ marginBottom: "25px" }}>
          <label
            htmlFor="categoryDate"
            style={{
              display: "block",
              marginBottom: "10px",
              fontWeight: "bold",
              color: "white",
              fontSize: "18px",
            }}
          >
            Date
          </label>
          <input
            ref={SubcategoryDateRef}
            type="date"
            id="categoryDate"
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

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            style={{
              width: "20%",
              padding: "15px",
              fontSize: "18px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
