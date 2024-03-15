import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import PropertyDetails from './Components/PropertyDetails/PropertyDetails';
import PropertyList from './Components/Home/PropertyList';
import { Flip, ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux'
import { currentUser } from './Store/User/user-action';
import { userActions } from './Store/User/user-slice';
import Signup from './Components/User/Signup';
import Profile from './Components/User/Profile';
import 'react-toastify/dist/ReactToastify.css'
import Main from './Components/Home/Main';
import Login from './Components/User/Login';
import { useEffect } from 'react';
import './App.css';
import EditProfile from "./Components/User/EditProfile";
import UpdatePassword from "./Components/User/UpdatePassword";
import ForgotPassword from "./Components/User/ForgotPassword";
import ResetPassword from "./Components/User/ResetPassword";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js'
import Payment from "./Components/Payment/Payment";


function App() {
  const stripePromise = loadStripe
  ('')

  const dispatch = useDispatch()
  const { errors } = useSelector((state) => state.user)
  useEffect(() => {
    if (errors) {
      dispatch(userActions.clearError())
    }
    dispatch(currentUser())
  }, [errors, dispatch])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Main />} exact >
        <Route id='home' index element={<PropertyList />} exact />
        <Route id='PropertyDetails' path="propertylist/:id" element={<PropertyDetails />} exact />
        <Route id='login' path="login" element={<Login />} exact />
        <Route id='signup' path="signup" element={<Signup />} exact />
        <Route id='profile' path="profile" element={<Profile />} exact />
        <Route id='editprofile' path="editprofile" element={<EditProfile />} exact />
        <Route id='updatepassword' path="user/updatepassword" element={<UpdatePassword />} exact />
        <Route id='forgotpassword' path="user/forgotPassword" element={<ForgotPassword />} exact />
        <Route id='resetpassword' path="user/resetPassword/:token" element={<ResetPassword />} exact />
        <Route id='payment' path="payment/:propertyId" element={
          <Elements stripe={stripePromise}>
            <Payment />
          </Elements>} exact />
      </Route>
    )
  );
  return (
    <div className='app'>
      <RouterProvider router={router} />
      <ToastContainer position='bottom-center' autoClose={3000} draggable={true} transition={Flip} />

    </div>
  );
}

export default App;
