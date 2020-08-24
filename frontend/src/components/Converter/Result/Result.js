import React from 'react'
import classes from './Result.module.scss'
import {ResultCurrencyRates} from './ResultCurrencyRates/ResultCurrencyRates'

export const Result = ({displayResult, selectedCurr, amount}) => {
    var newArr = [];
    for(var i in selectedCurr) {
        let [a,b] = selectedCurr[i].split(',');
        newArr.push(a);
        newArr.push(b);
    }
    if(displayResult != ""){
        return (
            <div className={classes.Result}>
                <p>{amount} {newArr[0]} =</p>
                    <div className={classes.ResultData}>
                        <h3>{displayResult}</h3>
                        <p>{newArr[2]}</p>
                    </div>
                <ResultCurrencyRates newArr={newArr} />
            </div>
         )
    }

    return (
        null
    )
}