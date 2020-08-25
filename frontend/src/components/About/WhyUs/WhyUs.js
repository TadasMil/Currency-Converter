import React from 'react'
import {SiFastly} from 'react-icons/si'
import {GrCurrency} from 'react-icons/gr'
import {IoIosContacts} from 'react-icons/io'
import classes from './WhyUs.module.scss'

export const WhyUs = () => {
    return (
      <div className={classes.WhyUs}>
          <div className={classes.Icons}>
            <GrCurrency className={classes.Icon}/>
            <p>Real time data</p>
          </div>
          <div className={classes.Icons}>
            <SiFastly className={classes.Icon}/>
            <p>Fast data display</p>
          </div>
          <div className={classes.Icons}>
            <IoIosContacts className={classes.Icon}/>
            <p>Available 24/7</p>
          </div>
      </div>
    )
}
