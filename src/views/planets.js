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
                    <div className="cambioPagina d-flex">
                        {
                            store.planets !== null ?
                                (
                                    store.planets.previous === null ?
                                        (
                                            <button onClick={() => nextPage()} className="btn btn-light ml-auto">Next</button>

                                        ) : (store.planets.next === null ? (

                                            <button onClick={() => previousPage()} className="btn btn-light mr-auto">Previous</button>
                                        ) : (
                                                <>
                                                    <button onClick={() => previousPage()} className="btn btn-light mr-auto">Previous</button>
                                                    <button onClick={() => nextPage()} className="btn btn-light ml-auto">Next</button>
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