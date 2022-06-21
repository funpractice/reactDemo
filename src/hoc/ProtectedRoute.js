import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";


const ProtectedRoute = ({children}) => {
    const rootState = useSelector(state=>state.rootReducer);

if(rootState?.isAuthenticated){
    return children
}else{
    return <Navigate to="/" replace />;
}
}

export default ProtectedRoute