import { createBrowserRouter} from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import MyProfile from "../pages/MyProfile";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PrivateRoute from "./PrivateRoute";
import ServiceDetails from "../pages/ServiceDetails";
import ForgetPass from "../pages/ForgetPass";
import Error from "../pages/Error";


export    const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement:<Error></Error>,
        children: [
            {
               index: true, 
               element: <Home/>,
            
             },
             {
                path:"/services",
                element: <Services />,
             },
             {
                path:"/myProfile",
                element: <PrivateRoute><MyProfile /></PrivateRoute>,
             },
             {
                path:"/login",
                element: <Login />,
             },
             {
                path:"/signup",
                element: <Signup />,
             },
             {
                path:"/details/:id",
                element: <PrivateRoute><ServiceDetails /></PrivateRoute>,
             },
             {
               path:'/forget/:email',
               element: <ForgetPass></ForgetPass>
             }

        ]
    }
            
]    
) ;

export default router;

