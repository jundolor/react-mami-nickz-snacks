import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";

export default function AuthRequired() {
    //const authenticated = false
    const authenticated = localStorage.getItem("loggedin")
    const location = useLocation()

    if(!authenticated) {
        return (
                    <Navigate 
                        to = '/login' 
                        state={{
                            message: "Please login first",
                            fromPage: location.pathname
                        }}
                        replace
                    />

                )
    }
    return <Outlet />
}