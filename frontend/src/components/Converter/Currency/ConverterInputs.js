import React from 'react'
import {Amount} from '../Amount/Amount'
import {SelectCurrency} from './SelectCurrency/SelectCurrency'
import classes from './ConverterInputs.module.scss'
import {Result} from '../Result/Result'

const ConverterInputs = ({handleAmountChange, currencyRates, handleSelectChange, selectBoxUsed, handleShowResult, resultInput}) => {
    return (
        <div className={classes.ConverterInput}>
            { selectBoxUsed == 0 ? 
            <Amount handleAmountChange={handleAmountChange}/> 
            : <Result handleShowResult={handleShowResult} resultInput={resultInput}/> }
            <SelectCurrency handleSelectChange={handleSelectChange} currencyRates={currencyRates} selectedBox={selectBoxUsed}/>
        </div>
    )
}

export default ConverterInputs;