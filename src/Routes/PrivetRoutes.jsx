import { useContext } from "react";
import { ContextCreate } from "../components/AuthProvider";
import { PropTypes } from 'prop-types';
import { Link } from "react-router-dom";

const PrivetRoutes = ({ children }) => {
    const { user ,Loading} = useContext(ContextCreate)
    // console.log(user);
    if(Loading){
        return <div className="flex justify-center"><span className="loading loading-bars loading-lg "></span></div>
    }
    if (user) {
        return children
    }
    return (
        <div className="flex justify-center">
            <div>
                <h2>Please Log-In Your Accounts</h2>
                <Link to='/login' className="flex justify-center mt-4"><button className="btn btn-primary ">LogIn</button></Link>
            </div>
        </div>
    )
};

export default PrivetRoutes;

PrivetRoutes.propTypes = {
    children: PropTypes.node
}
