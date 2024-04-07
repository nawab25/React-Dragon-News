import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../ContextProvider/ContextProvider';
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if (loading) {
        return <span className="loading loading-infinity loading-lg"></span>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={location.pathname}></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
};

export default PrivateRoute;