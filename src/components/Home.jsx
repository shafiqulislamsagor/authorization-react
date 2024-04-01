import { useContext } from "react";
import { ContextCreate } from "./AuthProvider";

const Home = () => {
    const authInfo = useContext(ContextCreate)
    return (
        <div>
            <h2>This is Home: {authInfo.name}</h2>
        </div>
    );
};

export default Home;