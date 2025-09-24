import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostSnackInfo() {

    const { currentSnack } = useOutletContext()
    return (
        <section className="host-snack-detail-info">
            <h4>Name: <span>{currentSnack.name}</span></h4>
            <h4>Category: <span>{currentSnack.type}</span></h4>
            <h4>Description: <span>{currentSnack.description}</span></h4>
            <h4>Visibility: <span>Public</span></h4>
        </section>
    )
}