import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css'

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-light sticky-top" >
                <Link className="navbar-brand align-middle" to="/">
                    <img src="https://clipart.info/images/ccovers/1513370389Star%20Wars%20Logo%20transparent%20PNG.png"
                        className="d-inline-block align-top"
                        alt="Home"
                        loading="lazy" />
                </Link>
                <div className="dropdown">
                    <button className="btn btn-dark dropdown-toggle btn-md mr-3" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Favorites <span>3</span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item d-flex mr-1" href="/">Personaje 1<i className="fas fa-trash-alt ml-auto"></i></a>
                        <a className="dropdown-item d-flex mr-1" href="/">Planeta 1<i className="fas fa-trash-alt ml-auto"></i></a>
                        <a className="dropdown-item d-flex mr-1" href="/">Otro Personaje<i className="fas fa-trash-alt ml-auto"></i></a>
                        <a className="dropdown-item d-flex mr-1" href="/">Otro Planeta<i className="fas fa-trash-alt ml-auto"></i></a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header