import { useContext } from "react";
import { ContextCreate } from "./AuthProvider";

const Home = () => {
    const authInfo = useContext(ContextCreate)
    const { user } = authInfo
    // console.log(user);
    return (
        <div>
            {
                user && <div>
                    <h2>This is Home</h2>
                    <h2>Email: {user?.email}</h2>
                    <h2>Uid: {user?.uid}</h2>
                </div>
            }
        </div>
    );
};

export default Home;