import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LogIn from "../components/LogIn";
import Register from "../components/Register";
import Home from "../components/Home";

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
            }
        ]
    },
]);

export default router;