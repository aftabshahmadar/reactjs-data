import React, { useRef } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function AddCategoryForm() {
    // Create refs for the form fields
    const categoryNameRef = useRef();
    const categoryDescriptionRef = useRef();
    const categoryDateRef = useRef();

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Get the values from refs
        const categoryName = categoryNameRef.current.value;
        const categoryDescription = categoryDescriptionRef.current.value;
        const categoryDate = categoryDateRef.current.value;

        // Construct the data object
        const data = {
            name: categoryName,
            description: categoryDescription,
            date: categoryDate,
        };

        try {
            // Send data to the API
            const response = await axios.post(`http://localhost:3000/addcategory`, data);
            Swal.fire("Category added.");
            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error adding category:', error);
            Swal.fire("There was an error adding the category.");
        }

        // Clear the form fields
        categoryNameRef.current.value = "";
        categoryDescriptionRef.current.value = "";
        categoryDateRef.current.value = "";
       
    };

    return (
        <div style={{ maxWidth: '500px', margin: '50px auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: '28px', color: 'white', marginBottom: '30px' }}>
                Add Product Category
            </h2>
            <form onSubmit={handleSubmit}>
                {/* Category Name */}
                <div style={{ marginBottom: '25px' }}>
                    <label
                        htmlFor="categoryName"
                        style={{
                            display: 'block',
                            marginBottom: '10px',
                            fontWeight: 'bold',
                            color: 'white',
                            fontSize: '18px',
                        }}
                    >
                        Category Name
                    </label>
                    <input
                        type="text"
                        id="categoryName"
                        placeholder="Enter category name"
                        ref={categoryNameRef}
                        style={{
                            width: '100%',
                            padding: '15px',
                            fontSize: '16px',
                            borderRadius: '8px',
                            backgroundColor: 'transparent',
                            border: '2px solid #ddd',
                            color: 'white',
                        }}
                    />
                </div>

                {/* Category Description */}
                <div style={{ marginBottom: '25px' }}>
                    <label
                        htmlFor="categoryDescription"
                        style={{
                            display: 'block',
                            marginBottom: '10px',
                            fontWeight: 'bold',
                            color: 'white',
                            fontSize: '18px',
                        }}
                    >
                        Category Description
                    </label>
                    <textarea
                        id="categoryDescription"
                        rows="4"
                        placeholder="Enter category description"
                        ref={categoryDescriptionRef}
                        style={{
                            width: '100%',
                            padding: '15px',
                            fontSize: '16px',
                            borderRadius: '8px',
                            backgroundColor: 'transparent',
                            border: '2px solid #ddd',
                            color: 'white',
                        }}
                    ></textarea>
                </div>

                {/* Date */}
                <div style={{ marginBottom: '25px' }}>
                    <label
                        htmlFor="categoryDate"
                        style={{
                            display: 'block',
                            marginBottom: '10px',
                            fontWeight: 'bold',
                            color: 'white',
                            fontSize: '18px',
                        }}
                    >
                        Date
                    </label>
                    <input
                        type="date"
                        id="categoryDate"
                        ref={categoryDateRef}
                        style={{
                            width: '100%',
                            padding: '15px',
                            fontSize: '16px',
                            borderRadius: '8px',
                            backgroundColor: 'transparent',
                            border: '2px solid #ddd',
                            color: 'white',
                        }}
                    />
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        style={{
                            width: '20%',
                            padding: '15px',
                            fontSize: '18px',
                            backgroundColor: '#007bff',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            float: 'left',
                        }}
                        onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
                        onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
}
