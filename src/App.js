import RequireAuth from './Pages/Login/RequireAuth';
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
import Purchase from './Pages/Purchase/Purchase';
import Add from './Pages/Dashboard/Add';
import MyPortfolio from './Pages/Dashboard/MyPortfolio/MyPortfolio';
import Users from './Pages/Dashboard/Users';
import NotFound from './Pages/NotFound/NotFound';
import Payment from './Pages/Payment/Payment';

function App() {
  return (
    <div className='bg-base-200'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/products/:purchaseId' element={<RequireAuth>
          <Purchase></Purchase>
        </RequireAuth>}></Route>
        <Route path='/payment/:paymentId' element={<RequireAuth><Payment></Payment></RequireAuth>}></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route path='/dashboard/myprofile' element={<RequireAuth><MyProfile></MyProfile></RequireAuth>}></Route>
          <Route path='update' element={<RequireAuth><Add></Add></RequireAuth>}></Route>
          <Route path='/dashboard/users' element={<RequireAuth><Users></Users></RequireAuth>}></Route>
          <Route path='/dashboard/myorders' element={<RequireAuth><MyOrders></MyOrders></RequireAuth>}></Route>
          <Route path='/dashboard/addreview' element={<RequireAuth><Review></Review></RequireAuth>}></Route>
          <Route path='/dashboard/manageallorders' element={<RequireAuth><ManageOrders></ManageOrders></RequireAuth>}></Route>
          <Route path='/dashboard/addproduct' element={<RequireAuth><AddProduct></AddProduct></RequireAuth>}></Route>
          <Route path='/dashboard/manageproduct' element={<RequireAuth>
            <Manage></Manage>
          </RequireAuth>}></Route>
        </Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
