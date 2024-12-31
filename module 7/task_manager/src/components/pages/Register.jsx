import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import account from '../../task1.png'
import Header from '../Header'
import { useUserAuth } from '../../Context/UserAuthContext'
import { Alert } from 'bootstrap/dist/js/bootstrap.min'

export default function Register() {
 const [email, setEmail] = useState("");
 const [error, setError] = useState("");
 const [password, setPassword] = useState("");
 const { signUp } = useUserAuth();
 let navigate = useNavigate();
        
 const handleSubmit = async (e) => {
 e.preventDefault();
 setError("");
 try {
 await signUp(email, password);
 navigate("/login");
 } catch (err) {
 setError(err.message);
 }
 };
        

  return (
   <>  
   <div  className='task-dashboard w-50 mx-auto bg-white'>
   <Header />
    <div className='task-content p-5 mt-5'>
    <div className='row'>
        <div className='col-md-5'> 
        <img src={account} alt='task' className='img-fluid w-75 mt-5' />
        
        </div>
        <div className='col-md-7'> 
        <h3>Register Here</h3>
        <hr className='w-25' /> 
        {error && <div className='alert alert-danger'>{error}</div>}
        <form onSubmit={handleSubmit}>
            {/* <div className='form-group mt-2'>
                <input type='text' placeholder='Name *' className='form-control' />
            </div>
             */}
            <div className='form-group mt-2'>
                <input type='text' placeholder='Email *' onChange={(e) => setEmail(e.target.value)} className='form-control' />
            </div>
            
            <div className='form-group mt-2'>
                <input type='password' placeholder='Password *' onChange={(e) => setPassword(e.target.value)} className='form-control' />
            </div>
            
            {/* <div className='form-group mt-2'>
                <input type='password' placeholder='Confirmed Name *' className='form-control' />
            </div>

            
            <div className='form-group mt-2'>
                <input type='text' placeholder='Phone *' className='form-control' />
            </div>

            
            <div className='form-group mt-2'>
                <textarea placeholder='Address *' className='form-control'></textarea>
            </div>
             */}
            <div className='form-group mt-2'>
                <input type='submit' className='btn btn-md btn-primary text-white' /> 
                <input type='reset' className='btn btn-md btn-danger text-white ms-3' />
            </div>

            <div className='form-group mt-2'>
            <b>Already have an account ? <Link to="/login">Login here</Link></b>    
            </div>


        </form>
        </div>
    </div>
     
  
    </div>
    </div>
    </>

  )
}
