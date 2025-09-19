import React from "react";
import { Link } from "react-router-dom";

export default function Snacks(){
    const [snacks, setSnacks] = React.useState([])
    React.useEffect(() => {
        fetch("api/snacks")
        .then(res => res.json())
        .then(data => {
            //console.log(data.snacks)
            setSnacks(data.snacks)
        })
    }
    , [])

    const snackElements = snacks.map(snack => (
        <div key={snack.id} className="snack-tile">
            <Link to={`/snacks/${snack.id}`}>
                <img src={snack.imageUrl} alt="snack delight" />
                <div className="snack-info">
                    <h3>{snack.name}</h3>
                    <p>₱{snack.pricePhP}</p>
                    <i className={`snack-type ${snack.type} selected`}>{snack.type}</i>
                </div>
            </Link>

        </div>
    ))

    return (
        <div className="snack-list-container">
            <h1>Check out our tasty treats</h1>
            <div className="snack-list">
                {snackElements}
            </div>
        </div>
    )
}