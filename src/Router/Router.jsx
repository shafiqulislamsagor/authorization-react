import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LogIn from "../components/LogIn";
import Register from "../components/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
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