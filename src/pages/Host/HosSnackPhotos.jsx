import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostSnackPhotos(){
    const { currentSnack } = useOutletContext()
    return (
        <img src={currentSnack.imageUrl} alt={currentSnack.name} className="host-span-detail-image" />
    )
}