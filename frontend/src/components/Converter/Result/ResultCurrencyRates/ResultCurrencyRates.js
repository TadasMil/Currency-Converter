import React from 'react'
import classes from './ResultCurrencyRates.module.scss'

export const ResultCurrencyRates = ({newArr}) => {
    return (
        <div className={classes.Ratings}>
            <p>1 {newArr[0]} = {newArr[1]} {newArr[2]}</p>
            <p>1 {newArr[2]} = {newArr[3]} {newArr[0]}</p>
        </div>
    )
}
