import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";


export default function Navbar(props) {
    const [home, setHome] = useState('active')
    const [about, setAbout] = useState('')

    const aboutActive = () => {
        setHome('')
        setAbout('active')
    }
    const homeActive = () => {
        setHome('active')
        setAbout('')
    }

    return (

        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" onClick={homeActive} to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${home}`} onClick={homeActive} to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${about}`} onClick={aboutActive} to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>

                    <div className={`mx-2 form-check form-switch text-${props.mode === "dark" ? 'light' : 'dark'}`}>
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault4" onClick={() => props.toggleMode("#033c61")} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault4">{props.btnMode}</label>
                    </div>

                </div>
            </div>
        </nav>

    )
}

Navbar.propTypes =
{
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
};

Navbar.defaultProps = {
    title: "Set title here",
    aboutText: "Set About us here"
}
