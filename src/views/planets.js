import React, { useContext } from 'react';
import { Context } from '../store/layoutContext';
import PlanetCard from '../components/planet-card';

const Planets = (props) => {

    const { store, actions } = useContext(Context);

    const nextPage = () => {
        actions.getPlanets(store.planets.next.replace("http", "https"));
    }

    const previousPage = () => {
        actions.getPlanets(store.planets.previous.replace("http", "https"));
    }

    return (
        <>
            <div className="container-fluid">

                <div className="menu">
                    <h2>Planets</h2>
                    <div className="cambioPagina d-flex justify-content-center">
                        {
                            store.planets !== null ?
                                (
                                    store.planets.previous === null ?
                                        (
                                            <nav aria-label="Page navigation example">
                                                <ul className="pagination">
                                                    <li className="page-item">
                                                        <a className="page-link" href="#" aria-label="Previous">
                                                            <span aria-hidden="true">&laquo;</span>
                                                        </a>
                                                    </li>
                                                    <li className={"page-item" + (store.activeUrl === "" ? " active" : "")}><a className="page-link" href="#" onClick={() => actions.getPlanets("https://swapi.dev/api/planets/")}>1</a></li>
                                                    <li className={"page-item" + (store.activeUrl === "2" ? " active" : "")}><a className="page-link" href="#" onClick={() => actions.getPlanets("https://swapi.dev/api/planets/?page=2")} >2</a></li>
                                                    
                                                    <li className="page-item" onClick={() => nextPage()}>
                                                        <a className="page-link" href="#" aria-label="Next">
                                                            <span aria-hidden="true">&raquo;</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </nav>

                                        ) : (store.planets.next === null ? (

                                            <nav aria-label="Page navigation example">
                                                <ul className="pagination">
                                                    <li className="page-item" onClick={() => previousPage()}>
                                                        <a className="page-link" href="#" aria-label="Previous">
                                                            <span aria-hidden="true">&laquo;</span>
                                                        </a>
                                                    </li>
                                                    <li className={"page-item" + (store.activeUrl === "" ? " active" : "")}><a className="page-link" href="#" onClick={() => actions.getPlanets("https://swapi.dev/api/planets/")}>1</a></li>
                                                    <li className={"page-item" + (store.activeUrl === "2" ? " active" : "")}><a className="page-link" href="#" onClick={() => actions.getPlanets("https://swapi.dev/api/planets/?page=2")} >2</a></li>

                                                    <li className="page-item">
                                                        <a className="page-link" href="#" aria-label="Next">
                                                            <span aria-hidden="true">&raquo;</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        ) : (
                                                <>
                                                    <nav aria-label="Page navigation example">
                                                        <ul className="pagination">
                                                            <li className="page-item" onClick={() => previousPage()}>
                                                                <a className="page-link" href="#" aria-label="Previous">
                                                                    <span aria-hidden="true">&laquo;</span>
                                                                </a>
                                                            </li>
                                                            <li className={"page-item" + (store.activeUrl === "" ? " active" : "")}><a className="page-link" href="#" onClick={() => actions.getPlanets("https://swapi.dev/api/planets/")}>1</a></li>
                                                            <li className={"page-item" + (store.activeUrl === "2" ? " active" : "")}><a className="page-link" href="#" onClick={() => actions.getPlanets("https://swapi.dev/api/planets/?page=2")} >2</a></li>
                                                            <li className="page-item" onClick={() => nextPage()}>
                                                                <a className="page-link" href="#" aria-label="Next">
                                                                    <span aria-hidden="true">&raquo;</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </nav>
                                                </>
                                            )
                                        )
                                ) : (
                                    <div className="d-flex justify-content-center ml-auto mr-auto">
                                        <div className="spinner-border" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                )
                        }
                    </div>
                </div>
                <div className="carrousel">
                    {
                        store.planets !== null ?
                            (
                                store.planets.results.map((elem, index, arr) => {
                                    return (
                                        <PlanetCard key={index}
                                            url={elem.url}
                                            name={elem.name}
                                            population={Intl.NumberFormat().format(parseInt(elem.population))}
                                            terrain={elem.terrain} />
                                    )
                                })
                            ) : (
                                <div className="d-flex justify-content-center ml-auto mr-auto">
                                    <div className="spinner-border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div>
                            )
                    }

                </div>
            </div>
        </>
    )
}

export default Planets