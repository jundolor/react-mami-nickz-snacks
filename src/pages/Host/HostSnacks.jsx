import React from "react";
import { Link } from "react-router-dom";

export default function HostSnacks(){
    const [snacks, setSnacks] = React.useState([])

    React.useEffect(() => {
        fetch("/api/host/snacks")
            .then(res => res.json())
            .then(data => setSnacks(data.snacks))
    }
    , [])

    const  hostSnacksEls = snacks.map(snack => (
        <Link
            to = {snack.id}
            key = {snack.id}
            className="host-snack-link-wrapper"
        >
            <div className="host-snack-single" key={snack.id}>
                <img src={snack.imageUrl} alt={`${snack.name}`} />
                <div className="host-snack-info">
                    <h3>{snack.name}</h3>
                    <p>₱{snack.pricePhP}</p>
                </div>
            </div>
        </Link>
    ))
    return (
        <section>
            <h1 className="host-snacks-title">Your listed snacks</h1>
            <div className="host-snack-list">
                {
                    snacks.length > 0 ? (
                        <section>
                            {hostSnacksEls}
                        </section>
                    ) : (
                        <h2>Loading...</h2>
                    )
                }
            </div>
        </section>
    )
}