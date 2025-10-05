import React from "react";
import { BsStarFill } from "react-icons/bs";
import reviewsGraph from "../../assets/images/reviews-graph.png"

export default function Reviews(){
    const reviewsData = [
        {
            rating: 5,
            name: "Elliot",
            date: "September 25, 2025",
            text: "Soft, golden, and perfectly filled — this bread roll is comfort in every bite. A solid 5/5 for its warm, homemade goodness.",
            id: "1"
        },
        {
            rating: 5,
            name: "Sandy",
            date: "October 2, 2025",
            text: "Crispy on the outside and irresistibly creamy inside, every bite feels like pure delight. It’s the kind of treat that instantly lifts your mood and keeps you coming back for more.",
            id: "2"
        }
    ]
    return (
        <section className="host-reviews">
            <div className="top-text">
                <h2>Your reviews</h2>
                <p>
                    Last <span>30 days</span>
                </p>
            </div>
            <img src={reviewsGraph} alt="Review Graph" className="graph" />
            <h3>Reviews (2)</h3>
            {
                reviewsData.map((review) => (
                    <div key={review.id}>
                        <div className="review">
                            {
                                [...Array(review.rating)].map((_, i) => (
                                    <BsStarFill className="review-star" key={i} />
                                ))
                            }
                            <div className="info">
                                <p className="name">{review.name}</p>
                                <p className="date">{review.date}</p>
                            </div>
                            <p>{review.text}</p>
                        </div>
                        <hr />
                    </div>
                ))
            }
        </section>
    )
}