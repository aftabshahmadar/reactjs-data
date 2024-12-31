import React from 'react'
import { Form,Button } from 'react-bootstrap'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
export default function AddSubCategory() {
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
<h2 className="ms-3 p-4 mt-3">Add SubCategory here</h2>
<hr className="border border-1 border-dark w-50 ms-5" align="left" />
{/* add category here */}
<Form className='w-50 ms-5'>

<div className='form-group mt-3'>
    <select  placeholder='Enter Category Name *' className='form-control'>
      <option value="">-select Category-</option>
    </select>
</div>
<div className='form-group mt-3'>
    <input type='text' placeholder='Enter Subcategory Name *' className='form-control' />
</div>

<div className='form-group mt-3'>
    <textarea type='text' placeholder='Enter Subcategory Descriptions *' className='form-control'></textarea>
</div>

<div className='form-group mt-3'>
    <input type="date"  placeholder='Enter added date *' className='form-control' />
</div>


<div className='form-group mt-3'>
<input type="submit" value="AddSubCategory"   className='btn btn-lg btn-dark text-white' />
</div>



</Form>
</div>
</div>
</div>
</section>
</div>
)
}s