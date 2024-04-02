import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Auth from "../Firebase/firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const ContextCreate = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [Loading , setLoading] = useState(true)
    const CreateUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(Auth, email, password)
    }
    const SignInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(Auth, email, password)
    }
    const logOut = () =>{
        true
        return signOut(Auth)
    }
    useEffect(() => {
        const unSubcribe = onAuthStateChanged(Auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        });
        return ()=>{
            unSubcribe()
        }
    }, [])
    // console.log(user);
    const object = { user, CreateUser, SignInUser,logOut,Loading }
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