import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function AuthRequired() {
    //const authenticated = false
    const authenticated = localStorage.getItem("loggedin")

    if(!authenticated) {
        return (
                    <Navigate 
                        to = '/login' 
                        state={{message: "Please login first"}}
                        replace
                    />

                )
    }
    return <Outlet />
}