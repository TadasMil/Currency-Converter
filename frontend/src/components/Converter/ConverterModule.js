import React from 'react'
import classes from './ConverterModule.module.scss'
import ConverterInputs from './Currency/ConverterInputs'
import {AboutConverter} from '../About/AboutConverter'
import {Amount} from './Amount/Amount'
import {Result} from './Result/Result'

const ConverterModule = ({amount, handleAmountChange, currencyRates, handleSelectChange, displayResult, selectedCurr}) => {
    return (
        <div className={classes.Converter}>
            <AboutConverter />
            <div className={classes.ConverterImage}>
            <div className={classes.ConverterModule}>
                <div className={classes.ConverterSelectDiv}>
                    <ConverterInputs 
                        amount={amount} 
                        handleAmountChange={handleAmountChange} 
                        currencyRates={currencyRates} 
                        handleSelectChange={handleSelectChange}
                        selectBoxUsed="0"              
                    />
                    <ConverterInputs 
                        amount={amount} 
                        handleAmountChange={handleAmountChange} 
                        currencyRates={currencyRates} 
                        handleSelectChange={handleSelectChange}
                        selectBoxUsed="1" 
                    />
                </div>
                <Amount handleAmountChange={handleAmountChange}/> 
                <Result displayResult={displayResult} selectedCurr={selectedCurr} amount={amount}/>  
            </div>
            </div>
        </div>
    )
}

export default ConverterModule;
