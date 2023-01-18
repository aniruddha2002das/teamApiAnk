import React from 'react'
import { Link } from "react-router-dom"
import classes from './Navbar.module.css'

export default function Navbar() {
    return (
        <div className={classes.navbar}>
            <Link to="/posts">
                Home*
            </Link>
            <Link to="/posts">
                Posts
            </Link>
            <Link to="/posts">
                User*
            </Link>
           
        </div>
    )
}
