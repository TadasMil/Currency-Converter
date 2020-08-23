import React from 'react'
import {SelectCurrencyItem} from './SelectCurrencyItem/SelectCurrencyItem'

export const SelectCurrency = ({currencyRates}) => {
    return (
      <select>
        {
            currencyRates.map(curr => {
                return <SelectCurrencyItem key={curr._id} currency={curr.Ccy}/>
            })
        }
      </select>
    )
}
