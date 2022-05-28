import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer';
import Dashboard from './Pages/Dashboard/Dashboard';
import Blogs from './Pages/Blogs/Blogs';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import MyProfile from './Pages/Dashboard/MyProfile';
import MyOrders from './Pages/Dashboard/MyOrders';
import Review from './Pages/Dashboard/Review';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import Manage from './Pages/Dashboard/Manage';
import AddProduct from './Pages/Dashboard/AddProduct';

function App() {
  return (
    <div className='bg-base-200'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
          <Route path='/dashboard/myprofile' element={<MyProfile></MyProfile>}></Route>
          <Route path='/dashboard/myorders' element={<MyOrders></MyOrders>}></Route>
          <Route path='/dashboard/addreview' element={<Review></Review>}></Route>
          <Route path='/dashboard/manageallorders' element={<ManageOrders></ManageOrders>}></Route>
          <Route path='/dashboard/addproduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='/dashboard/manageproduct' element={<Manage></Manage>}></Route>
        </Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
