import React from "react";
import { useParams  } from "react-router-dom";

export default function HostSnackDetail(){
    const { id } = useParams()
    const [currentSnack, setCurrentSnack] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/host/snacks/${id}`)
            .then(res => res.json())
            .then(data => setCurrentSnack(data.snacks))
    }, [])

    if(!currentSnack) {
        return <h1>Loading ....</h1>
    }
    return (
        <div>
            <img src={currentSnack.imageUrl} width={150} />
            <h2>{currentSnack.name}</h2>
            <p>{currentSnack.pricePhP}</p>
            <p>{currentSnack.type}</p>
        </div>
    )
}