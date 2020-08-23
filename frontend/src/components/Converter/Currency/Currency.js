import React from 'react'
import classes from './Currency.module.scss'

export const Currency = (props) => {
    return (
        <div className={classes.Currency}>
            <select name="cars" id="cars">
                <option value="eur">EUR</option>
            </select>
        </div>

    )
}
