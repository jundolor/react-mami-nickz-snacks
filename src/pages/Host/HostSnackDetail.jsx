import React from "react";
import { useParams  } from "react-router-dom";

export default function HostSnackDetail(){
    const params = useParams()
    return (
        <h1>Snack Param {params.id} goes here</h1>
    )
}