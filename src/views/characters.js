import React, { useContext } from 'react';
import { Context } from '../store/layoutContext';
import CharacterCard from '../components/character-card';

const Characters = (props) => {

    const { store, actions } = useContext(Context);

    const nextPage = () => {
        actions.getCharacters(store.characters.next.replace("http", "https"));
    }

    const previousPage = () => {
        actions.getCharacters(store.characters.previous.replace("http", "https"));
    }

    return (
        <>
            <div className="container-fluid">

                <div className="menu">
                    <h2>Characters</h2>

                    <div className="cambioPagina d-flex">
                        {
                            store.characters !== null ?
                                (
                                    store.characters.previous === null ?
                                        (
                                            <button onClick={() => nextPage()} className="btn btn-light ml-auto">Next</button>

                                        ) : (store.characters.next === null ? (

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
                        store.characters !== null ?
                            (
                                store.characters.results.map((elem, index, arr) => {
                                    return (

                                        <CharacterCard key={index}
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
        </>
    )
}

export default Characters