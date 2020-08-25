import React from 'react'
import classes from './AboutConverter.module.scss'
import {WhyUs} from './WhyUs/WhyUs'

export const AboutConverter = () => {
    return (
        <div className={classes.About}>
            <h3>Currency Converter</h3>
            <div className={classes.AboutDescription}>
                <WhyUs />
                <p>Convert live your money to foreign currency based on today's exchange rates. Currency converter uses cross rates to deliver other currencies values, which means you can calculate the values of the EUR (Euro) and USD (United States Dollar) to any other currency. Currency codes are standardized by ISO 4217:2015 and represented by three-letter alphabetic code followed by the full name of the currency.</p>  
            </div>
        </div>
    )
}
