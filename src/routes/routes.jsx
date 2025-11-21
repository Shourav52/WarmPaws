import { createBrowserRouter} from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import MyProfile from "../pages/MyProfile";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Signup from "../pages/Signup";



export    const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
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
                element: <MyProfile />,
             },
             {
                path:"/login",
                element: <Login />,
             },
             {
                path:"/signup",
                element: <Signup />,
             },

        ]
    }
            
]    
) ;

export default router;

