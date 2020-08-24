import React from 'react'
import {SelectCurrencyItem} from './SelectCurrencyItem/SelectCurrencyItem'
import classes from './SelectCurrency.module.scss'
import {FromTo} from '../../../FromTo/FromTo'

export const SelectCurrency = ({currencyRates, handleSelectChange, selectedBox}) => {
    return (
      <>
        {selectedBox == 0 ? <FromTo name="From"></FromTo> : <FromTo name="To"></FromTo>}
        <select className={classes.SelectCurrency} onChange={(e) => handleSelectChange(selectedBox, e)}>
          <option value={selectedBox}>Select currency</option>
          {
              currencyRates.map(curr => {
                  return <SelectCurrencyItem key={curr._id} currency={curr}/>
              })
          }
        </select>
      </>
    )
}
