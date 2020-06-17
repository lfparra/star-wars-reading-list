import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../store/layoutContext';
import { Link } from 'react-router-dom';
import CharacterCard from '../components/character-card';
import PlanetCard from '../components/planet-card';

const Home = (props) => {

    const { store, actions } = useContext(Context);

    return (
        <>
            <div className="container-fluid">
                
                <div className="menu">
                    <h2>Characters</h2>
                    {/* <div className="cambioPagina d-flex">
                        {
                            store.characters.previous === null ?
                                (
                                    <button onClick={() => nextPage()} className="btn btn-light ml-auto">Next</button>

                                ) : (store.characters.next === null ? (

                                    <button onClick={() => previousPage()}className="btn btn-light mr-auto">Previous</button>
                                ) : (
                                        <>
                                            <button onClick={() => previousPage()} className="btn btn-light mr-auto">Previous</button>
                                            <button onClick={() => nextPage()} className="btn btn-light ml-auto">Next</button>
                                        </>
                                    )
                                )
                        }

                    </div> */}
                    <div className="carrousel">
                        {
                            store.characters.results.length > 0 ?
                                (
                                    store.characters.results.map((elem, index, arr) => {
                                        return (
                                            
                                            <CharacterCard key={index}
                                                /* img={index + characters.perPage + 1 >= 18? index + characters.perPage + 2 : index + characters.perPage + 1} */
                                                url={elem.url}
                                                name={elem.name}
                                                gender={elem.gender}
                                                hair_color={elem.hair_color}
                                                eye_color={elem.eye_color} />
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
                <div className="menu">
                    <h2>Planets</h2>
                    <div className="carrousel">
                        {
                            store.planets.results.length > 0 ?
                                (
                                    store.planets.results.map((elem, index, arr) => {
                                        return (
                                            <PlanetCard key={index} url={elem.url} name={elem.name} population={Intl.NumberFormat().format(parseInt(elem.population))} terrain={elem.terrain} />
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

            </div>

        </>
    )
}

export default Home