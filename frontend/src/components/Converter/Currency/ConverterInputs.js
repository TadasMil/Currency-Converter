import React from 'react'
import {Amount} from '../Amount/Amount'
import {SelectCurrency} from './SelectCurrency/SelectCurrency'
import classes from './ConverterInputs.module.scss'

const ConverterInputs = ({handleAmountChange, currencyRates, handleSelectChange, selectBoxUsed}) => {
    return (
        <div className={classes.ConverterInput}>
            <Amount handleAmountChange={handleAmountChange}/>
            <SelectCurrency handleSelectChange={handleSelectChange} currencyRates={currencyRates} selectedBox={selectBoxUsed}/>
        </div>
    )
}

export default ConverterInputs;