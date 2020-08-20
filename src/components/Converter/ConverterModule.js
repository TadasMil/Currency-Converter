import React from 'react'
import classes from './ConverterModule.module.scss'
import {Amount} from './Amount/Amount'
import {Result} from './Result/Result'
import {Currency} from './Currency/Currency'

const Converter = ({handleAmountChange}) => {
    return (
        <div className={classes.Converter}>
            <div className={classes.ConverterModule}>
                <div>
                    <Amount handleAmountChange={handleAmountChange}/>
                    <Currency />
                </div>
                <div>
                    <Result></Result>
                    <Currency />
                </div>
            </div>
        </div>
    )
}

export default Converter;
