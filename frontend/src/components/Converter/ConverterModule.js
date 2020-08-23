import React from 'react'
import classes from './ConverterModule.module.scss'
import ConverterInputs from './Currency/ConverterInputs'

const ConverterModule = ({amount, handleAmountChange, currencyRates, handleSelectChange}) => {
    return (
        <div className={classes.Converter}>
            <div className={classes.ConverterModule}>
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
        </div>
    )
}

export default ConverterModule;
