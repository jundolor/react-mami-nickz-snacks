import React from "react";
import { useParams, Link, Outlet, NavLink  } from "react-router-dom";

export default function HostSnackDetail(){
    const { id } = useParams()
    //const params = useParams()
    const [currentSnack, setCurrentSnack] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/host/snacks/${id}`)
            .then(res => res.json())
            .then(data => setCurrentSnack(data.snacks))
    }, [id])

    if(!currentSnack) {
        return <h1>Loading ....</h1>
    }

    const activeStyles = {
        fontWeight: 'bold',
        textDecoration: "underline",
        color: "#161616"
    }
    return (
        <section>
            <Link
                to='..'
                relative="path" //could be relative to route
                className="back-button"
            >&larr; <span>Back to all snacks</span></Link>
            <div className="host-snack-detail-layout-container">
                <div className="host-snack-detail">
                    <img src={currentSnack.imageUrl} alt={currentSnack.name} />
                    <div className="host-snack-detail-info-text">
                        <i className={`snack-type snack-type-${currentSnack.type}`}>{currentSnack.type}</i>
                        <h3>{currentSnack.name}</h3>
                        <h4>₱{currentSnack.pricePhP}</h4>
                    </div>
                    
                </div>

                <nav className="host-snack-detail-nav">
                    <NavLink
                        to='.'
                        end
                        style={ ({isActive }) => isActive? activeStyles: null}
                    >
                        Details
                    </NavLink>
                    <NavLink
                        to='pricing'
                        style={ ({isActive }) => isActive? activeStyles: null}
                    >
                        Pricing
                    </NavLink>
                    <NavLink
                        to='photos'
                        style={ ({isActive }) => isActive? activeStyles: null}
                    >
                        Photos
                    </NavLink>
                </nav>
            <Outlet context={{currentSnack}} />
            </div>
        </section>
    )
}