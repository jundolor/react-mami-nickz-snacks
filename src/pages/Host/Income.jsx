import React from "react";
import incomeGraph from "../../assets/images/income-graph-peso.png"

export default function Income() {
    const transactionData = [
        { amount: 60000, date: "July 22, '25", id: "1"},
        { amount: 45000, date: "Aug 24, '25", id: "2"},
        { amount: 45000, date: "Sep 20, '25", id: "3"}
    ]
    return (
        <section className="host-income">
            <h1>Income</h1>
            <p>Last <span>30 days</span></p>
            <h2>₱ 150,000</h2>
            <img className="graph" src={incomeGraph} alt="Income Graph" />
            <div className="info-header">
                <h3>Your transations ({transactionData.length})</h3>
                <p>Last <span>30 days</span></p>
            </div>
            <div className="transactions">
                {
                    transactionData.map((item) => (
                        <div key={item.id} className="transaction">
                            <h3>₱ {item.amount}</h3>
                            <p>{item.date}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}