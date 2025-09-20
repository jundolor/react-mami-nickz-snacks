import React from "react";
import { useParams } from "react-router-dom";

export default function SnackDetail(){
    const params = useParams()
    const [snack, setSnack] = React.useState(null)

    React.useEffect(()=>{
        fetch(`/api/snacks/${params.id}`)
        .then(res => res.json())
        .then(data => {
            //console.log(data)
            setSnack(data.snacks)
        })
    }
    , [params.id])

    return (
        <div className="snack-detail-container">
            {
                snack ? (
                    <div className="snack-detail">
                        <img src={snack.imageUrl} alt={snack.name} />
                        <i className={`snack-type ${snack.type} selected`}>{snack.type}</i>
                        <h2>{snack.name}</h2>
                        <p className="snack-price"><span>₱{snack.pricePhP}</span></p>
                        <p>{snack.description}</p>
                        
                    </div>
                )
                : <h2>Loading...</h2>
            }
        </div>
    )
}