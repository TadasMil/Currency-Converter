import React from 'react'
import classes from '../SelectCurrency.module.scss'

export const SelectCurrencyItem = (props) => {
    const {Ccy, Amt} = props.currency;
    return (
        <option className={classes.Option} value={[Ccy, Amt]}>{Ccy}</option>
    )
}
