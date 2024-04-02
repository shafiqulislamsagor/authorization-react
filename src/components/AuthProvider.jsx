import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Auth from "../Firebase/firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

export const ContextCreate = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const CreateUser = (email, password) => {
        return createUserWithEmailAndPassword(Auth, email, password)
    }
    const SignInUser = (email, password) => {
        return signInWithEmailAndPassword(Auth, email, password)
    }
    useEffect(() => {
        const unSubcribe = onAuthStateChanged(Auth, (currentUser) => {
            setUser(currentUser)
        });
        return ()=>{
            unSubcribe()
        }
    }, [])
    console.log(user);
    const object = { user, CreateUser, SignInUser }
    return (
        <ContextCreate.Provider value={object}>
            {children}
        </ContextCreate.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}