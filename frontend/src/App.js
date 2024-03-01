import './App.css';
import Main from './Components/Home/Main';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import PropertyList from './Components/Home/PropertyList';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Main />} exact >
      <Route path='/' element={<PropertyList />} exact />
      </Route>
    )
  )

  return (
    <div className='app'>
    <RouterProvider router={router}/>

    </div>
  );
}

export default App;