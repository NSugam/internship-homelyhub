import './App.css';
import Main from './Components/Home/Main';
import Login from './Components/User/Login';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import PropertyList from './Components/Home/PropertyList';
import PropertyDetails from './Components/PropertyDetails/PropertyDetails';
import { Flip, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { currentUser } from './Store/User/user-action';
import { userActions } from './Store/User/user-slice';


function App() {

  const dispatch = useDispatch()
  const {errors} = useSelector((state)=> state.user)
  useEffect(()=> {
    if(errors){
      dispatch(userActions.clearError())
    }
    dispatch(currentUser())
  },[errors,dispatch])

    const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Main />} exact >
        <Route id='home' index element={<PropertyList />} exact />
        <Route path="propertylist/:id" id='PropertyDetails' element={<PropertyDetails />} exact />
        <Route path="login" id='login' element={<Login />} exact />
      </Route>
    )
  );
  return (
    <div className='app'>
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
