import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <div>
                <h1> Pig Latin Translator </h1>
                <Link to="/">Translation Form</Link> | 
                <Link to="/history">History</Link>
            </div>
        )
    }
}

export default Header
