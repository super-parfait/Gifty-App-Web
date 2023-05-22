import React, { useContext } from "react";
// import { Navigate, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Auth from "../../contexts/Auth";

const AuthenticatedRoute = ({children})=>{
        const {isAuthenticated} = useContext(Auth)


        console.log(isAuthenticated)
        // isAuthenticated.then(value=> {
        //     if(value===true){
        //         return children
        //     }else{
        //         <Navigate to="/login" />
        //     }
        // })

        

        return isAuthenticated ? (
                        children
            ) : (
                <Navigate to="/login" />
            )
}

export default AuthenticatedRoute

