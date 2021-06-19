import React from 'react'

// PACKAGES
import {Link} from 'react-router-dom'


const Default = (props) => {
    return (
        <div className="notfound">
            <div className="not-center">
                <h1>404</h1>
                <h2>error</h2>
                <h3>Page not found</h3>

                <h3>The requested URL <span>{props.location.pathname}</span> was not found</h3>

                <Link to="/" className="not-button">Go Home</Link>
            </div>
        </div>
    )
}

export default Default