import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './index.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
// e-shopper customer panel
import Layout from './Layout'
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import Cart from './components/Cart';
import PageNotFound from './components/PageNotFound';

// e-shopper admin panel
import './assets/admin/css/style.css'
import AdminLogin from './components/admin/AdminLogin';
import AdminDashboard from './components/admin/AdminDashboard';
import AddCategory from './components/admin/AddCategory';
import ManageCategory from './components/admin/ManageCategory';
import AddSubCategory from './components/admin/AddSubCategory';
import ManageSubCategory from './components/admin/ManageSubCategory';
import AddProducts from './components/admin/AddProducts';
import ManageProducts from './components/admin/ManageProducts';
import ManageContacts from './components/admin/ManageContacts';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/create-account' element={<Register />} />
        <Route path='/view-cart' element={<Cart />} />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/admin-login' element={<AdminLogin />} />
        <Route path='/admin-login/dashboard' element={<AdminDashboard />} />
        <Route path='/admin-login/addcategory' element={<AddCategory />} />
        <Route path='/admin-login/managecategory' element={<ManageCategory />} />
        <Route path='/admin-login/addsubcategory' element={<AddSubCategory />} />
        <Route path='/admin-login/managesubcategory' element={<ManageSubCategory />} />
        <Route path='/admin-login/addproducts' element={<AddProducts />} />
        <Route path='/admin-login/ManageProducts' element={<ManageProducts />} />
        <Route path='/admin-login/managecontacts' element={<ManageContacts />} />
      </Routes>
    </Router>
  </StrictMode>,
)