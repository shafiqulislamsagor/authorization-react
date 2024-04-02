import { useContext } from "react";
import { ContextCreate } from "./AuthProvider";

const Home = () => {
    const authInfo = useContext(ContextCreate)
    console.log(authInfo.user);
    return (
        <div>
            <h2>This is Home: </h2>
        </div>
    );
};

export default Home;