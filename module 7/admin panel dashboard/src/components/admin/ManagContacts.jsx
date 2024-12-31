import React,{useState,useEffect} from 'react'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import { Table,Button } from 'react-bootstrap'
import axios from 'axios';
import { ExportData } from './ExportData';
export default function ManageContacts() {
// manage all contact us data in admin panel
const[data,setData]=useState([]);
// create a file name 
const fileName = "contactsdata"; // here enter filename for your excel file

useEffect(()=>{

axios.get(`http://localhost:8000/contact-us`).then((response)=>{
setData(response.data);
})

},[data]);

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
<h2 className="ms-3 p-4 mt-3">Manage All Contacts Us Form Data here  <ExportData apiData={data} fileName={fileName} /></h2>
<hr className="border border-1 border-dark w-50 ms-5" align="left" />
{/* manage category here */}
<Table className='table table-responsive'>
<thead>
<tr>
<th>#Id</th>
<th>Name</th>
<th>Email</th>
<th>Phone</th>
<th>Subjects</th>
<th>Messages</th>
<th>Action</th>
</tr>
</thead>
<tbody>

{/* fetch all data of api  */}
{data && data.map((item)=>{
return (
<>
<tr>
<td>{item.id}</td>
<td>{item.name}</td>
<td>{item.email}</td>
<td>{item.phone}</td>
<td>{item.subject}</td>
<td>{item.message}</td>
<td><div style={{width:"200px"}}><Button className='btn btn-danger btn-sm'><span className='bi bi-trash text-white'></span></Button>
| <Button className='btn btn-primary btn-sm' title="click to whatsapp Me"><span className='bi bi-whatsapp text-white'></span></Button>
</div>
</td>
</tr>
</>
)}   
)

}

</tbody>
</Table>

</div>
</div>
</div>
</section>
</div>
)
}