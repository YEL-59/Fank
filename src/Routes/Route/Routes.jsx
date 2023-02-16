import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Component/Home/Home/Home";
import Login from "../../Component/Login/Login";
import Apoinment from "../../Component/Appoinment/Appoinments/Apoinment";

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
                path:'/appoinment',
                element:<Apoinment></Apoinment>
            }
        ]

    }
])
