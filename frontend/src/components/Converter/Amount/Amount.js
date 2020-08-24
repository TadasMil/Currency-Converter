import React from 'react'
import classes from './Amount.module.scss'

export const Amount = ({amount, handleAmountChange}) => {
    return (
        <div className={classes.Amount}>
            <p>Amount</p>
            <input className={classes.AmountInput} placeholder='1' type='text' value={amount} onChange={handleAmountChange}></input>
        </div>
    )
}
