import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminSidebar() {
  return (
      <div className="admin-sidebar bg-dark col-md-3 m-0 p-3">
        <ul className="sidebar-link m-0 p-0">
          <li>
            <Link to="/admin-login/dashboard">
              <img
                src="https://icon-library.com/images/admin-login-icon/admin-login-icon-11.jpg"
                className="img-fluid w-50 "
              />
            </Link>
          </li>
          <li>
            <Link to="#">
              <span className="bi bi-person" /> Manage Customers
            </Link>
          </li>
          <li className="dropdown">
            <Link className="dropdown-toggle" data-bs-toggle="dropdown" href="#">
              <span className="bi bi-cart" /> Add Category
            </Link>
            <ul className="dropdown-menu bg-white text-dark">
              <li>
                <Link to="/admin-login/addcategory">
                  <span className="bi bi-cart" /> Add Category
                </Link>
              </li>
              <li>
                <Link to="/admin-login/managecategory">
                  <span className="bi bi-cart" /> Manage Category
                </Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <Link className="dropdown-toggle" data-bs-toggle="dropdown" href="#">
              <span className="bi bi-cart" /> Add SubCategory
            </Link>
            <ul className="dropdown-menu bg-white text-dark">
              <li>
                <Link to="/admin-login/addsubcategory">
                  <span className="bi bi-cart" /> Add SubCategory
                </Link>
              </li>
              <li>
                <Link to="/admin-login/managesubcategory">
                  <span className="bi bi-cart" /> Manage SubCategory
                </Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a className="dropdown-toggle" data-bs-toggle="dropdown" href="/admin-login/addproducts">
              <span className="bi bi-cart" /> Add Products
            </a>
            <ul className="dropdown-menu bg-white text-dark">
              <li>
                <Link to="/admin-login/addproducts">
                  <span className="bi bi-cart" /> Add Products
                </Link>
              </li>
              <li>
                <Link to="/admin-login/manageproducts">
                  <span className="bi bi-cart" /> Manage Products
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/admin-login/manageorders">
              <span className="bi bi-bell" /> Manage Orders
            </Link>
          </li>
          <li>
            <Link to="/admin-login/managecontacts">
              <span className="bi bi-phone" /> Manage Contacts
            </Link>
          </li>
          <li>
            <Link to="/admin-login/managereviews">
              <span className="bi bi-command" /> Manage Reviews
            </Link>
          </li>
          {/* <li><Link to="#" class="btn btn-sm btn-danger text-white" onclick="return confirm('Are you sure to Logout ?')"><span class="bi bi-power"></span> Logout ?</a></li> */}
          <li>
            <Link
              href="#"
              className="btn btn-sm btn-danger text-white"
              data-bs-toggle="modal"
              data-bs-target="#lg"
            >
              <span className="bi bi-power" /> Logout ?
            </Link>
          </li>
        </ul>
      </div>
       
  )
}