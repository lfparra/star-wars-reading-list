import React, { useContext } from 'react';
import { Context } from '../store/layoutContext';
import { Link, withRouter } from 'react-router-dom';
import '../styles/header.css'

const Header = (props) => {

    const { store, actions } = useContext(Context);

    return (
        <>
            <div className="container-fluid">
                <nav className="navbar sticky-top row" >
                    <div className="col-2">
                        <Link className="navbar-brand align-middle" to="/">
                            <img src="https://clipart.info/images/ccovers/1513370389Star%20Wars%20Logo%20transparent%20PNG.png"
                                className=""
                                alt="Home"
                                loading="lazy" />
                        </Link>
                    </div>
                    <div className="col-7 d-flex justify-content-around">
                        <Link className="options mb-3" to="/characters/" onClick={() => actions.getCharacters("https://swapi.dev/api/people/")}>Characters</Link>
                        <Link className="options mb-3" to="/planets/" onClick={() => actions.getPlanets("https://swapi.dev/api/planets/")}>Planets</Link>
                    </div>
                    <div className="col-3 d-flex justify-content-end">
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle btn-lg" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Favorites
                        </button>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">Favorito 1 <i class="fas fa-trash-alt ml-5"></i></a>
                                <a className="dropdown-item" href="#">Favorito 2 <i class="fas fa-trash-alt ml-5"></i></a>
                                <a className="dropdown-item" href="#">Favorito 3 <i class="fas fa-trash-alt ml-5"></i></a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

        </>
    )
}

export default withRouter(Header)