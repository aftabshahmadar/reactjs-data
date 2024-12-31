
import React, { useRef } from 'react'
import { Form,Button } from 'react-bootstrap'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import axios, { Axios } from 'axios';
export default function AddCategory() {
    const categoryInp = useRef("")
    const categoryDescInp = useRef("")
    const dateInp = useRef("")
    const handleSubmit = (e)=>{
        const category = categoryInp.current.value;
        const categoryDesc = categoryDescInp.current.value;
        const date = dateInp.current.value;
        // alert("hiii")
        e.preventDefault()

        if(!category) {
            alert("Enter category")
            categoryInp.current.focus()
        } else if(!categoryDesc) {
            alert("Enter category description")
            categoryDescInp.current.focus()
        } else if(!date) {
            alert("Select Date")
            dateInp.current.focus()
        } else {
            
            var categoryObj = {
                category:categoryInp.current.value,
                categoryDesc:categoryDescInp.current.value,
                dateInp:dateInp.current.value
            }
            axios.post(`http://localhost:8000/addcategory`, categoryObj)
            .then((res)=>res.data)
            console.log("category Added.")
            categoryInp.current.value = ""
            categoryDescInp.current.value = ""
            dateInp.current.value = ""
        }   
}
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
<h2 className="ms-3 p-4 mt-3">Add Category here</h2>
<hr className="border border-1 border-dark w-50 ms-5" align="left" />
{/* add category here */}
<Form onSubmit={handleSubmit} className='w-50 ms-5'>
<div className='form-group mt-3'>
    <input ref={categoryInp} type='text' placeholder='Enter category Name *' className='form-control' />
</div>

<div className='form-group mt-3'>
    <textarea ref={categoryDescInp} type='text' placeholder='Enter category Descriptions *' className='form-control'></textarea>
</div>

<div className='form-group mt-3'>
    <input ref={dateInp} type="date"  placeholder='Enter added date *' className='form-control' />
</div>


<div className='form-group mt-3'>
<input type="submit" value="AddCategory"   className='btn btn-lg btn-dark text-white' />
</div>



</Form>
</div>
</div>
</div>
</section>
</div>
)
}
