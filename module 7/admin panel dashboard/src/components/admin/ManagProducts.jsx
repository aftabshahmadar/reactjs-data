
import React from 'react'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import { Table,Button } from 'react-bootstrap'
export default function ManageProducts() {
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
<h2 className="ms-3 p-4 mt-3">Manage All Category here</h2>
<hr className="border border-1 border-dark w-50 ms-5" align="left" />
{/* manage category here */}
<Table className='table table-responsive'>
    <thead>
        <tr>
            <th>#Id</th>
            <th>CategoryName</th>
            <th>Descriptions</th>
            <th>Added Date</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1001</td>
            <td>Electronics</td>
            <td>Good for  gadgets</td>
            <td>16-09-2024</td>
            <td><Button className='btn btn-danger btn-sm'><span className='bi bi-trash text-white'></span></Button>
            | <Button className='btn btn-primary btn-sm'><span className='bi bi-pencil text-white'></span></Button>
            
            </td>
        </tr>
    </tbody>
</Table>



</div>
</div>
</div>
</section>
</div>
)
}
