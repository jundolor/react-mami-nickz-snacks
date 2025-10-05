import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { getSnack } from "../../api";

export default function SnackDetail(){
    const [snack, setSnack] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const { id } = useParams()
    //const params = useParams()
    const location = useLocation()

    React.useEffect(() => {
        console.log("ID2", id)
        async function loadSnacks() {
            setLoading(true)
            try {
                const data = await getSnack(id)
                setSnack(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        loadSnacks()
    }, [id])
    /*
    React.useEffect(()=>{
        fetch(`/api/snacks/${params.id}`)
        .then(res => res.json())
        .then(data => {
            //console.log(data)
            setSnack(data.snacks)
        })
    }
    , [params.id])
    */

    if(loading) {
        return <h1>Loading ...</h1>
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    const search = location.state?.search || ""
    const type = location.state?.type || "all"

    return (
        <div className="snack-detail-container">
            <Link
                to={`..${search}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to { type } snacks</span> </Link>
            {
                snack ? (
                    <div className="snack-detail">
                        <img src={snack.imageUrl} alt={snack.name} />
                        <i className={`snack-type ${snack.type} selected`}>{snack.type}</i>
                        <h2>{snack.name}</h2>
                        <p className="snack-price"><span>₱{snack.pricePhP}</span></p>
                        <p>{snack.description}</p>
                        <button className="link-button">Reserve this snack</button>
                    </div>
                )
                : <h2>Loading...</h2>
            }
        </div>
    )
}