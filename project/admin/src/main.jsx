import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Sidebar from "./sidebar";
import App from "./App";
import AddCategory from "./Pages/AddCategory";
import AddProducts from "./Pages/AddProducts";
import ManageProducts from "./Pages/ManageProducts";
import AddSubCategory from "./Pages/AddSubCategory";
import ManageSubCategory from "./Pages/ManageSubCategory";
import ManageContacts from "./Pages/ManageContacts";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./style.css"; // Ensure the correct path

const MainApp = () => {
  return (
    <Router>
      <div className="app-container">
        {/* <Sidebar /> */}
        <main>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/add-category" element={<AddCategory />} />
            <Route path="/add-products" element={<AddProducts />} />
            <Route path="/manage-products" element={<ManageProducts />} />
            <Route path="/add-subcategories" element={<AddSubCategory />} />
            <Route path="/manage-subcategories" element={<ManageSubCategory />} />
            <Route path="/manage-contacts" element={<ManageContacts />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MainApp />); // Change the render method to render MainApp
