import React from 'react'
import { Chart } from "react-google-charts";
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'


export default function AdminDashboard() {
  return (
    <div>
    {/*admin header reused  */}
   <AdminHeader /> 
  <section id="dashboard-content">
  <div className="container-fluid m-0 p-0">
  <div className="row">
  {/* sidebar */}
  <AdminSidebar />
  {/* dashboard content */}
  {/* admin dashboard content */}
  <div className="admin-dashboard col-md-9 p-3">
        <h2 className="ms-3 p-4 mt-3">Welcome to Admin dashboard</h2>
        <hr className="border border-1 border-dark w-50 ms-5" align="left" />
        <div className="row">
          <div className="col-md-3 ms-5 p-3 mt-2 bg-success">
            <p className="text-center fs-4">Total Customers</p>
            <p className="text-center">
              <button
                type="button"
                className="btn btn-sm btn-danger border border-0"
              >
                <span className="badge badge-danger start-0 top-0">
                  <i className="bi bi-person" />
                  100
                </span>
              </button>
            </p>
          </div>
          <div className="col-md-3 ms-5 p-3 mt-2 bg-danger">
            <p className="text-center fs-4">Total Subcategory</p>
            <p className="text-center">
              <button
                type="button"
                className="btn btn-sm btn-danger border border-0"
              >
                <span className="badge badge-danger start-0 top-0">
                  <i className="bi bi-person" />
                  100
                </span>
              </button>
            </p>
          </div>
          <div className="col-md-3 ms-5 p-3 mt-2 bg-primary">
            <p className="text-center fs-4">Total Orders</p>
            <p className="text-center">
              <button
                type="button"
                className="btn btn-sm btn-danger border border-0"
              >
                <span className="badge badge-danger start-0 top-0">
                  <i className="bi bi-person" />
                  100
                </span>
              </button>
            </p>
          </div>
          <div className="col-md-3 ms-5 p-3 mt-2 bg-success">
            <p className="text-center fs-4">Total Contacts</p>
            <p className="text-center">
              <button
                type="button"
                className="btn btn-sm btn-danger border border-0"
              >
                <span className="badge badge-danger start-0 top-0">
                  <i className="bi bi-person" />
                  100
                </span>
              </button>
            </p>
          </div>
          <div className="col-md-3 ms-5 p-3 mt-2 bg-danger">
            <p className="text-center fs-4">Total Category</p>
            <p className="text-center">
              <button
                type="button"
                className="btn btn-sm btn-danger border border-0"
              >
                <span className="badge badge-danger start-0 top-0">
                  <i className="bi bi-person" />
                  100
                </span>
              </button>
            </p>
          </div>
          <div className="col-md-3 ms-5 p-3 mt-2 bg-primary">
            <p className="text-center fs-4">Total Reviews</p>
            <p className="text-center">
              <button
                type="button"
                className="btn btn-sm btn-danger border border-0"
              >
                <span className="badge badge-danger start-0 top-0">
                  <i className="bi bi-person" />
                  100
                </span>
              </button>
            </p>
          </div>
        </div>
        <h2 className="ms-5 p-4 mt-3">Monthly growth</h2>
        <hr className="border border-1 border-dark w-25 ms-5" align="left" />
        <Chart
  chartType="ScatterChart"
  data={[["Age", "Weight"], [4, 5.5], [8, 12]]}
  width="100%"
  height="400px"
  legendToggle
/>
      </div>
 



   </div>
   </div>
   </section>
    </div>
  )
}