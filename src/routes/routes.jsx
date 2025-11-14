import { createBrowserRouter} from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import MyProfile from "../pages/MyProfile";
import Services from "../pages/Services";


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

        ]
    }
            
]    
) ;

export default router;

