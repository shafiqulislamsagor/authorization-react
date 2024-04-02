import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LogIn from "../components/LogIn";
import Register from "../components/Register";
import Home from "../components/Home";
import PrivetRoutes from "../Routes/PrivetRoutes";
import OrderList from "../components/OrderList";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/login',
                element:<LogIn/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/orders',
                element:<PrivetRoutes><OrderList/></PrivetRoutes>
            }
        ]
    },
]);

export default router;