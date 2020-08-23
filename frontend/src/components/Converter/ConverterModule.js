import React from 'react'
import classes from './ConverterModule.module.scss'
import {Amount} from './Amount/Amount'
import {Result} from './Result/Result'
import {SelectCurrency} from './Currency/SelectCurrency/SelectCurrency'

const Converter = ({handleAmountChange, currencyRates}) => {
    return (
        <div className={classes.Converter}>
            <div className={classes.ConverterModule}>
                <div>
                    <Amount handleAmountChange={handleAmountChange}/>
                    <SelectCurrency currencyRates={currencyRates}/>
                </div>
                <div>
                    <Result></Result>
                    <SelectCurrency currencyRates={currencyRates}/>
                </div>
            </div>
        </div>
    )
}

export default Converter;
