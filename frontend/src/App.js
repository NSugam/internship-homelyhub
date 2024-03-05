import './App.css';
import Main from './Components/Home/Main';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import PropertyList from './Components/Home/PropertyList';
import PropertyDetails from './Components/PropertyDetails/PropertyDetails';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Main />} exact >
        <Route id='home' index element={<PropertyList />} exact />
        <Route path="propertylist/:id" id='PropertyDetails' element={<PropertyDetails />} exact />
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
