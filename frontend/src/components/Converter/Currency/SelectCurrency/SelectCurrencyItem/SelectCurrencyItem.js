import React from 'react'

export const SelectCurrencyItem = (props) => {
    const {Ccy, Amt} = props.currency;
    return (
        <option value={Amt}>{Ccy}</option>
    )
}
