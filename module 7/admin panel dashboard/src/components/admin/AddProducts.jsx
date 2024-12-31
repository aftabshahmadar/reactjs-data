import React from 'react'
import { Form,Button } from 'react-bootstrap'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
export default function AddProducts() {
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
<h2 className="ms-3 p-4 mt-3">Add Products here</h2>
<hr className="border border-1 border-dark w-50 ms-5" align="left" />
{/* add category here */}
<Form className='w-50 ms-5'>


<div className='form-group mt-3'>
    <select  placeholder='Enter Category Name *' className='form-control'>
      <option value="">-select Category-</option>
    </select>
</div>


<div className='form-group mt-3'>
    <select  placeholder='Enter Category Name *' className='form-control'>
      <option value="">-select SubCategory-</option>
    </select>
</div>
<div className='form-group mt-3'>
    <input type='text' placeholder='Enter Product Name *' className='form-control' />
</div>

<div className='form-group mt-3'>
    <input type='text' placeholder='Enter Product photo url *' className='form-control' />
</div>


<div className='form-group mt-3'>
    <input type='text' placeholder='Enter Product Old Price *' className='form-control' />
</div>

<div className='form-group mt-3'>
    <input type='text' placeholder='Enter Product New Price *' className='form-control' />
</div>



<div className='form-group mt-3'>
    <input type='number' placeholder='Enter Product qty *' className='form-control' />
</div>

<div className='form-group mt-3'>
    <textarea type='text' placeholder='Enter Product Descriptions *' className='form-control'></textarea>
</div>

<div className='form-group mt-3'>
    <input type="date"  placeholder='Enter added date *' className='form-control' />
</div>


<div className='form-group mt-3'>
<input type="submit" value="AddProducts"   className='btn btn-lg btn-dark text-white' />
</div>



</Form>
</div>
</div>
</div>
</section>
</div>
)
}