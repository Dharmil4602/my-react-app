import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


// Props are basically for understanding purpose we can say it is a parameter. In the App.js we pass this parameter using different names and it will render in the below code. We will be giving a particular format for accessing a particular element. For eg. we need to change the title, so we can add props.title in the curly braces. NOTE: props.title (here title is the name of the parameter that we'll be using in the App.js. We can name anything to this.)

export default function Navbar(props) {
    return (
        <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                </div>

                <div className="d-flex">
                    <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode(`primary`)}} style={{height: '30px', width: '30px', cursor: `pointer`}}></div>
                    
                    <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode(`success`)}} style={{height: '30px', width: '30px', cursor: `pointer`}}></div>

                    <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode(`danger`)}} style={{height: '30px', width: '30px', cursor: `pointer`}}></div>
        
                    <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode(`warning`)}} style={{height: '30px', width: '30px', cursor: `pointer`}}></div>
                </div>
                
                <div className="form-check form-switch">
                    <input className="form-check-input" onClick={()=>{props.toggleMode(null)}} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">Toggle Mode</label>
                </div>
            </div>
        </nav>
        </>
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