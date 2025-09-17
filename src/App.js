import {lazy} from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import AboutUs from './components/Aboutus';
import Layout from './components/layout';
import CardContainer from './components/CardContainer'
import Contactus from './components/Contactus';
import ResMenu from './components/ResMenu';
import DishPage from './components/DishPage';
import Cart from './components/Cart';
// import Grocery from './components/Grocery';

const Grocery = lazy(() => import("./components/Grocery"))


export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <CardContainer />
      },
      {
        path: "/about",
        element: <AboutUs />
      },
       {
        path: "/contact",
        element: <Contactus/>
      },
      {
        path: "/groceries",
        element: <Grocery/>
      },
      {
        path: "/restaurants/:resId",
        element: <ResMenu/>
      },
      {
        path: "/dishpage/:collectionId",
        element: <DishPage/>
      },
      {
        path:"/cart",
        element: <Cart/>
      }
    ]
  }
]);

