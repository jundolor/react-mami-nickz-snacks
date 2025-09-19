import React from "react";
import { Link } from "react-router-dom";

export default function Home(){
    return(
        <div className="home-container">
            <h1>You’re looking for a great snack, and we’ve got you covered with something truly satisfying.</h1>
            <p>Look no further because our tasty treats are made to delight anytime, anywhere.</p>
            <p>Each bite is crafted to give you the perfect mix of flavor, crunch, and happiness.</p>
            <Link to="snacks">Check out our treats</Link>
        </div>
    )
}