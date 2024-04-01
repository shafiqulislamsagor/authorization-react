import { createContext } from "react";
import PropTypes from 'prop-types';

export const ContextCreate = createContext(null)
const AuthProvider = ({children}) => {
    const object = {name:'sagor habiba'}
    return (
        <ContextCreate.Provider value={object}>
            {children}
        </ContextCreate.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children:PropTypes.node
}