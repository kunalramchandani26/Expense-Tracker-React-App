import React from 'react'

export default function ExpenseItem(props) {
    return (
        <div className="container my-4">
            <div className="card">
                <div className="card-header">
                    {props.date.toISOString()}
                </div>
                <div className="card-body">
                    <h3 className="card-title">{props.title}</h3>
                    <h5><span className="badge bg-primary">Rs.{props.amount}</span></h5>
                </div>
            </div>
        </div>
    )
}


