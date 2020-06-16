import React from 'react';

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-light sticky-top" >
                <a className="navbar-brand" href="#">
                    <img src="https://clipart.info/images/ccovers/1513370389Star%20Wars%20Logo%20transparent%20PNG.png"
                        width="130"
                        height="100"
                        className="d-inline-block align-top"
                        alt=""
                        loading="lazy" />
                </a>
                <div className="dropdown">
                    <button className="btn btn-dark dropdown-toggle btn-lg" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Favorites
                    </button>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Personaje 1</a>
                        <a className="dropdown-item" href="#">Planeta 1</a>
                        <a className="dropdown-item" href="#">Otro Personaje</a>
                        <a className="dropdown-item" href="#">Otro Planeta</a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header