import React from 'react'
import classes from './Result.module.scss'

export const Result = ({handleShowResult, resultInput}) => {
    return (
        <input onChange={handleShowResult} placeholder="0" className={classes.Result} type='text' value={resultInput}></input>
    )
}