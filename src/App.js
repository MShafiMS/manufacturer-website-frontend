import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Add from './Pages/Dashboard/Add';
import AddProduct from './Pages/Dashboard/AddProduct';
import Dashboard from './Pages/Dashboard/Dashboard';
import Manage from './Pages/Dashboard/Manage';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyPortfolio from './Pages/Dashboard/MyPortfolio/MyPortfolio';
import MyProfile from './Pages/Dashboard/MyProfile';
import Review from './Pages/Dashboard/Review';
import Users from './Pages/Dashboard/Users';
import Home from './Pages/Home/Home';
import Shop from './Pages/Home/Shop';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import Navbar from './Pages/Navbar/Navbar';
import NotFound from './Pages/NotFound/NotFound';
import Payment from './Pages/Payment/Payment';
import Purchase from './Pages/Purchase/Purchase';
import Footer from './Pages/Shared/Footer';
import SignUp from './Pages/SignUp/SignUp';
function App() {
  const [theme, setTheme] = useState(false);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    setTheme(JSON.parse(window.localStorage.getItem("theme")));
  }, []);
  const handleThemeChange = () => {
    setTheme(!theme);
    window.localStorage.setItem("theme", !theme);
  };

  return (
    <div data-theme={theme && "my_dark"} className='min-h-screen'>
      <Navbar  handleThemeChange={handleThemeChange} theme={theme}></Navbar>
      <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/products/:purchaseId' element={<RequireAuth>
          <Purchase></Purchase>
        </RequireAuth>}></Route>
        <Route path='/payment/:id' element={<RequireAuth><Payment></Payment></RequireAuth>}></Route>
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
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
