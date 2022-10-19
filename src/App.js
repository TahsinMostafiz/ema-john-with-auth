import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Main from './layouts/Main';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import { productsAndCartLoader } from './loaders/productsAndCartLoader';
import LogIn from './components/LogIn/LogIn';
import SignUp from './components/SignUp/SignUp';
import Shipping from './components/Shipping/Shipping';
import PrivetRoutes from './components/Routes/PrivetRoutes';


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path:'orders',
          loader: productsAndCartLoader,
          element: <Orders></Orders>
        },
        {
          path: 'inventory',
          element: <PrivetRoutes><Inventory></Inventory></PrivetRoutes>
        },
        {
          path: 'shipping',
          element: <PrivetRoutes><Shipping></Shipping></PrivetRoutes>
        },
        {
          path:'about',
          element:<About></About>
        },
        {
          path:'logIn',
          element:<LogIn></LogIn>
        },
        {
          path:'/signUp',
          element:<SignUp></SignUp>
        },
      ]
    },
    
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
