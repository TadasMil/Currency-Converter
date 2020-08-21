import React from 'react'
import classes from './Amount.module.scss'

export const Amount = ({amount, handleAmountChange}) => {
    return (
        <input className={classes.Amount} placeholder='1' type='text' value={amount} onChange={handleAmountChange}></input>
    )
}
