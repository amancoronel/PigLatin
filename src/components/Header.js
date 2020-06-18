import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar sticky-top mr-auto">
                    <label className="navbar-brand my-2 my-lg-0"> Pig Latin Translator </label>
                    <div className="form-inline">
                        <Link className="nav-link" to="/">Translation Form</Link> 
                        <Link className="nav-link" to="/history">History</Link>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header
