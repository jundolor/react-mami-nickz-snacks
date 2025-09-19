import React from "react";
import bgImg from "../assets/images/about-hero.png"
import { Link } from "react-router-dom";

export default function About(){
    return (
        <div className="about-page-container">
            <img src={bgImg} className="about-hero-image"alt="About Page" />
            <div className="about-page-content">
                <h1>Happines is a tasty snack from Mami Nickz</h1>
                <p>Our mission is to serve the tastiest snacks that bring joy and comfort in every bite.</p>
                <p>We aim to brighten everyone’s day by making delicious treats accessible to all.</p>
            </div>
            <div className="about-page-cta">
                <h2>Delicious snacks are waiting just for you—grab yours today!</h2>
                <Link className="link-button" to="/snacks">Explore our treats</Link>
            </div>
        </div>
    )
}