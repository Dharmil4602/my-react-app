import React from 'react'
import PropTypes from 'prop-types'


// Props are basically for understanding purpose we can say it is a parameter. In the App.js we pass this parameter using different names and it will render in the below code. We will be giving a particular format for accessing a particular element. For eg. we need to change the title, so we can add props.title in the curly braces. NOTE: props.title (here title is the name of the parameter that we'll be using in the App.js. We can name anything to this.)

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">About</a>
                        </li>
                    </ul>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className={`form-check-label text-${props.mode==='light' ? 'dark' : 'light' }`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                </div>
            </div>
        </nav>
    )
}

// We can use propTypes for specifying the category to which the declration belongs.
//Remember while initializing the propTypes, p should be small.

Navbar.propTypes = {
    title: PropTypes.string
}

// When we add isRequired at the end, means that field can't be empty or null.

// Navbar.propTypes = {
//     title: PropTypes.string.isRequired
// }

// We can set default props too...
// When we have set the value of title in the App.js file then defaultProps value will not be considered. When the value is not set then defaultProps will be live.
Navbar.defaultProps = {
    title: `This Title`
}