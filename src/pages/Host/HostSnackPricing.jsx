import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostSnackPricing(){
    const { currentSnack} = useOutletContext()
    return (
        <h3 className="host-snack-price">₱{currentSnack.pricePhP}</h3>
    )
}