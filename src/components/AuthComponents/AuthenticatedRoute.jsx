import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "../../contexts/Auth";

const AuthenticatedRoute = ({children})=>{
        const {isAuthenticated} = useContext(Auth)

        return isAuthenticated ? (
                
                        children
                
            ) : (
                <Navigate to="/login" />
            )
}

export default AuthenticatedRoute

