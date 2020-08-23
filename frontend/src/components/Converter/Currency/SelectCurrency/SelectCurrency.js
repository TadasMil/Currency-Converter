import React from 'react'
import {SelectCurrencyItem} from './SelectCurrencyItem/SelectCurrencyItem'
import classes from './SelectCurrency.module.scss'

export const SelectCurrency = ({currencyRates, handleSelectChange, selectedBox}) => {
    return (
      <select className={classes.SelectCurrency} onChange={(e) => handleSelectChange(selectedBox, e)}>
         <option value={selectedBox}>Choose currency</option>
        {
            currencyRates.map(curr => {
                return <SelectCurrencyItem key={curr._id} currency={curr.Ccy}/>
            })
        }
      </select>
    )
}
