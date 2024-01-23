import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard/Dashboard";
import AddHouse from "../Layout/Dashboard/AddHouse/AddHouse";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:"/login",
            element: <Login></Login>
        },
        {
            path:"/signUp",
            element: <SignUp></SignUp>
        },
        {
          path:"/dashboard",
          element: <Dashboard></Dashboard>,
          children:[
            {
              path:"/dashboard/addHouse",
              element: <AddHouse></AddHouse>
            }
          ]
        }


    ]
  },
]);

export default router;
