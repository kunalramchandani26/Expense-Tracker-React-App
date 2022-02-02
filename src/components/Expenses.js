import React from 'react'
import ExpenseItem from './ExpenseItem'


export default function Expenses(props) {
    return (
        <div>
            {/* <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
            <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
        <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} /> */}

            {props.items.map((exp) => {
                return (
                    <ExpenseItem key={exp.id} title={exp.title} amount={exp.amount} date={exp.date} />
                )
            })}
        </div>
    )
}

