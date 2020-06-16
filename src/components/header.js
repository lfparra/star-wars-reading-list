import React from 'react';

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-light sticky-top" >
                <a className="navbar-brand align-middle" href="/">
                    <img src="https://clipart.info/images/ccovers/1513370389Star%20Wars%20Logo%20transparent%20PNG.png"
                        width="130"
                        height="100"
                        className="d-inline-block align-top"
                        alt=""
                        loading="lazy" />
                </a>
                <div className="dropdown align-middle">
                    <button className="btn btn-dark dropdown-toggle btn-md mr-3" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Favorites Num
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