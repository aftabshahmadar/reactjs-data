import React from "react";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon_header" /> SHOP
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/">Dashboard</Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/add-category">Add Category</Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/add-products">Add Products</Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/manage-products">Manage Products</Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/add-subcategories">Add SubCategories</Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/manage-subcategories">Manage SubCategories</Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/manage-contacts">Manage Contacts</Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
