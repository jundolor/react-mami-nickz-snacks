import React from "react"
import { Link, useSearchParams } from "react-router-dom"
import { getSnacks } from "../../api"

export default function Snacks() {
    const [snackParams, setSnackParams] = useSearchParams()
    const [snacks, setSnacks] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    const snackFilter = snackParams.get("type")

    React.useEffect(() => {
        async function loadSnacks() {
            setLoading(true)
            try {
                const data = await getSnacks()
                setSnacks(data) // safe default
            } catch (err) {
                console.log('ERROR')//this 
                setError(err)
                //setSnacks([]) // keep state consistent
            } finally {
                setLoading(false)
            }
        }

        loadSnacks()
    }, [])

    // --- Loading state ---
    if (loading) {
        return <h1 aria-live="polite">Loading...</h1>
    }

    // --- Error state ---
    if (error) {
        console.log(error)
        const errObj = JSON.parse(error.message)
        console.log(errObj)
        return (
            <div className="error-container">
                <h1 aria-live="assertive">There was an error 😢</h1>
                <p>{errObj.message}</p>
            </div>
        )
    }

    // --- Success state ---
    const displayedSnacks = snackFilter
        ? snacks.filter(snack => snack.type === snackFilter)
        : snacks

    const snackElements = displayedSnacks.map(snack => (
        <div key={snack.id} className="snack-tile">
            <Link 
                to={snack.id} 
                state={{
                    search: `?${snackParams.toString()}`,
                    type: snackFilter
                }}
            >
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
        setSnackParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    return (
        <div className="snack-list-container">
            <h1>Check out our tasty treats!</h1>

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
                {snackFilter && (
                    <button 
                        className="snack-type clear-filters" 
                        onClick={() => handleFilterChange("type", null)}
                    >
                        Clear
                    </button>
                )}
            </div>

            <div className="snack-list">
                {snackElements}
            </div>
        </div>
    )
}
