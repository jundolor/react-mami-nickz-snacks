//import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Snacks(){
    const [snackParams, setSnackParams] = useSearchParams()
    const [snacks, setSnacks] = React.useState([])

    const snackFilter = snackParams.get("type")
    console.log(snackParams.toString())
    React.useEffect(() => {
        fetch("api/snacks")
        .then(res => res.json())
        .then(data => {
            //console.log(data.snacks)
            setSnacks(data.snacks)
        })
    }
    , [])

    const displayedSnacks = snackFilter? snacks.filter(snack => snack.type === snackFilter) : snacks
    console.log(displayedSnacks)

    const snackElements = displayedSnacks.map(snack => (
        <div key={snack.id} className="snack-tile">
            <Link to={snack.id} state={{search: `?${snackParams.toString()}` }}>
                <img src={snack.imageUrl} alt="snack delight" />
                <div className="snack-info">
                    <h3>{snack.name}</h3>
                    <p>₱{snack.pricePhP}</p>
                    <i className={`snack-type ${snack.type} selected`}>{snack.type}</i>
                </div>
            </Link>

        </div>
    ))

    function handleFilterChange(key, value) {
        console.log(key, value)
        setSnackParams(prevParams => {
            if(value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }
    /*
    <Link to="?type=street-food" className="snack-type street-food">Street Food</Link>
                <Link to="?type=fruit" className="snack-type fruit">Fruits</Link>
                <Link to="?type=snack-meal" className="snack-type snack-meal">Snack Meal</Link>
                <Link to="." className="snack-type clear-filters">Clear</Link>
    */
    return (
        <div className="snack-list-container">
            <h1>Check out our tasty treats</h1>
            <div className="snack-list-filter-buttons">
                <button 
                    className={`snack-type street-food ${snackFilter === "street-food" ? "selected" : ""}`} 
                    onClick={() => handleFilterChange("type", "street-food")}
                >
                    Street Food
                </button>
                <button 
                    className={`snack-type fruit ${snackFilter === "fruit" ? "selected" : ""}`} 
                    onClick={() => handleFilterChange("type", "fruit")}
                >
                    Fruits
                </button>
                <button 
                    className={`snack-type snack-meal ${snackFilter === "snack-meal" ? "selected" : ""}`} 
                    onClick={() => handleFilterChange("type", "snack-meal")}
                >
                    Snack Meal
                </button>
                {
                    snackFilter && 
                    <button 
                        className="snack-type clear-filters" 
                        onClick={() => handleFilterChange("type", null)}
                    >
                        Clear
                    </button>
                }
                
            </div>
            <div className="snack-list">
                {snackElements}
            </div>
        </div>
    )
}