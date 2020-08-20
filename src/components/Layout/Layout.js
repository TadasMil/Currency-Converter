import React from 'react'
import classes from './Layout.module.scss'

export const Layout = (props) => {
    return (
        <div className={classes.Layout}>
            {props.children}
        </div>
    )
}
