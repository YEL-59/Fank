import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Component/Home/Home/Home";
import Login from "../../Component/Login/Login";
import Apoinment from "../../Component/Appoinment/Appoinments/Apoinment";
import Signup from "../../Component/Signup/Signup";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'/appoinment',
                element:<Apoinment></Apoinment>
            }
        ]

    }
])
