import React from "react";
import { Link } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
import { getHostSnacks } from "../../api";

export default function Dashboard() {
    const [snacks, setSnacks] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
        setLoading(true)
        getHostSnacks()
            .then(data => setSnacks(data))
            .catch(err => setError(JSON.parse(err)))
            .finally(() => setLoading(false))
    }, [])

    function renderSnackElements(snacks){
        const hostSnackEls = snacks.map((snack) => (
            <div className="host-snack-single" key={snack.id}>
                <img src={snack.imageUrl} alt={snack.name} />
                <div className="host-snack-info">
                    <h3>{snack.name}</h3>
                    <p>₱ {snack.pricePhP}</p>
                </div>
                <Link to={`snacks/${snack.id}`}>View</Link>
            </div>
        ))

        return (
            <div className="host-snacks-list">
                <section>
                    {hostSnackEls}
                </section>
            </div>
        )
    }

    if (error) {
        return <h1>Error: {error.message}</h1>
    }

    return (
        <>
            <section className="host-dashboard-earnings">
                <div className="info">
                    <h1>Welcome!</h1>
                    <p>Income last <span>30 days</span></p>
                    <h2>₱ 150,000</h2>
                </div>
                <Link to="income">Details</Link>
            </section>
            <section className="host-dashboard-reviews">
                <h2>Review Score</h2>
                <BsStarFill className="star" />
                <p><span>5.0</span>/5</p>
                <Link to="reviews">Details</Link>
            </section>
            <section className="host-dashboard-snacks">
                <div className="top">
                    <h2>Your listed snacks</h2>
                    <Link to="snacks">View all</Link>
                </div>
                {
                    loading && !snacks ?
                    <h1>Loading...</h1> :
                    (
                        <>
                            {renderSnackElements(snacks)}
                        </>
                    )
                }
            </section>
        </>
    )
}