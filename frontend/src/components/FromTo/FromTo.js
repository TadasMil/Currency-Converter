import React from 'react'
import classes from './FromTo.module.scss'
export const FromTo = ({name}) => {
    return (
        <div className={classes.FromTo}>
            <p>{name}</p>
        </div>
    )
}
