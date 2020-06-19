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

                    <div className="cambioPagina d-flex justify-content-center">
                        {
                            store.characters !== null ?
                                (
                                    store.characters.previous === null ?
                                        (
                                            <nav aria-label="Page navigation example">
                                                <ul className="pagination">
                                                    <li className="page-item">
                                                        <a className="page-link" href="#" aria-label="Previous">
                                                            <span aria-hidden="true">&laquo;</span>
                                                        </a>
                                                    </li>
                                                    <li className={"page-item" + (store.activeUrl === "" ? " active" : "")}><a className="page-link" href="#" onClick={() => actions.getCharacters("https://swapi.dev/api/people/")}>1</a></li>
                                                    <li className={"page-item" + (store.activeUrl === "2" ? " active" : "")}><a className="page-link" href="#" onClick={() => actions.getCharacters("https://swapi.dev/api/people/?page=2")} >2</a></li>
                                                    <li className={"page-item" + (store.activeUrl === "3" ? " active" : "")}><a className="page-link" href="#" onClick={() => actions.getCharacters("https://swapi.dev/api/people/?page=3")}>3</a></li>
                                                    <li className={"page-item" + (store.activeUrl === "4" ? " active" : "")}><a className="page-link" href="#" onClick={() => actions.getCharacters("https://swapi.dev/api/people/?page=4")}>4</a></li>
                                                    <li className={"page-item" + (store.activeUrl === "5" ? " active" : "")}><a className="page-link" href="#" onClick={() => actions.getCharacters("https://swapi.dev/api/people/?page=5")}>5</a></li>
                                                    <li className={"page-item" + (store.activeUrl === "6" ? " active" : "")}><a className="page-link" href="#" onClick={() => actions.getCharacters("https://swapi.dev/api/people/?page=6")}>6</a></li>
                                                    <li className={"page-item" + (store.activeUrl === "7" ? " active" : "")}><a className="page-link" href="#" onClick={() => actions.getCharacters("https://swapi.dev/api/people/?page=7")}>7</a></li>
                                                    <li className={"page-item" + (store.activeUrl === "8" ? " active" : "")}><a className="page-link" href="#" onClick={() => actions.getCharacters("https://swapi.dev/api/people/?page=8")}>8</a></li>
                                                    <li className={"page-item" + (store.activeUrl === "9" ? " active" : "")}><a className="page-link" href="#" onClick={() => actions.getCharacters("https://swapi.dev/api/people/?page=9")}>9</a></li>
                                                    <li className="page-item" onClick={() => nextPage()}>
                                                        <a className="page-link" href="#" aria-label="Next">
                                                            <span aria-hidden="true">&raquo;</span>
                                                        </a>
                                                    </li>
                                                </ul>

                                            </nav>

                                        ) : (store.characters.next === null ? (

                                            <nav aria-label="Page navigation example">
                                                <ul className="pagination">
                                                    <li className="page-item" onClick={() => previousPage()}>
                                                        <a className="page-link" href="#" aria-label="Previous">
                                                            <span aria-hidden="true">&laquo;</span>
                                                        </a>
                                                    </li>

                                                    <li className={"page-item" + (store.activeUrl === "" ? " active" : "")}><a className="page-link" href="#" onClick={() => actions.getCharacters("https://swapi.dev/api/people/")}>1</a></li>
                                                    <li className={"page-item" + (store.activeUrl === "2" ? " active" : "")}><a className="page-link" href="#" onClick={() => actions.getCharacters("https://swapi.dev/api/people/?page=2")} >2</a></li>
                                                    <li className={"page-item" + (store.activeUrl === "3" ? " active" : "")}><a className="page-link" href="#" onClick={() => actions.getCharacters("https://swapi.dev/api/people/?page=3")}>3</a></li>
                                                    <li className={"page-item" + (store.activeUrl === "4" ? " active" : "")}><a className="page-link" href="#" onClick={() => actions.getCharacters("https://swapi.dev/api/people/?page=4")}>4</a></li>
                                                    <li className={"page-item" + (store.activeUrl === "5" ? " active" : "")}><a className="page-link" href="#" onClick={() => actions.getCharacters("https://swapi.dev/api/people/?page=5")}>5</a></li>
                                                    <li className={"page-item" + (store.activeUrl === "6" ? " active" : "")}><a className="page-link" href="#" onClick={() => actions.getCharacters("https://swapi.dev/api/people/?page=6")}>6</a></li>
                                                    <li className={"page-item" + (store.activeUrl === "7" ? " active" : "")}><a className="page-link" href="#" onClick={() => actions.getCharacters("https://swapi.dev/api/people/?page=7")}>7</a></li>
                                                    <li className={"page-item" + (store.activeUrl === "8" ? " active" : "")}><a className="page-link" href="#" onClick={() => actions.getCharacters("https://swapi.dev/api/people/?page=8")}>8</a></li>
                                                    <li className={"page-item" + (store.activeUrl === "9" ? " active" : "")}><a className="page-link" href="#" onClick={() => actions.getCharacters("https://swapi.dev/api/people/?page=9")}>9</a></li>
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

                                                            <li className={"page-item" + (store.activeUrl === "" ? " active" : "")}><a className="page-link" href="#" onClick={() => actions.getCharacters("https://swapi.dev/api/people/")}>1</a></li>
                                                            <li className={"page-item" + (store.activeUrl === "2" ? " active" : "")}><a className="page-link" href="#" onClick={() => actions.getCharacters("https://swapi.dev/api/people/?page=2")} >2</a></li>
                                                            <li className={"page-item" + (store.activeUrl === "3" ? " active" : "")}><a className="page-link" href="#" onClick={() => actions.getCharacters("https://swapi.dev/api/people/?page=3")}>3</a></li>
                                                            <li className={"page-item" + (store.activeUrl === "4" ? " active" : "")}><a className="page-link" href="#" onClick={() => actions.getCharacters("https://swapi.dev/api/people/?page=4")}>4</a></li>
                                                            <li className={"page-item" + (store.activeUrl === "5" ? " active" : "")}><a className="page-link" href="#" onClick={() => actions.getCharacters("https://swapi.dev/api/people/?page=5")}>5</a></li>
                                                            <li className={"page-item" + (store.activeUrl === "6" ? " active" : "")}><a className="page-link" href="#" onClick={() => actions.getCharacters("https://swapi.dev/api/people/?page=6")}>6</a></li>
                                                            <li className={"page-item" + (store.activeUrl === "7" ? " active" : "")}><a className="page-link" href="#" onClick={() => actions.getCharacters("https://swapi.dev/api/people/?page=7")}>7</a></li>
                                                            <li className={"page-item" + (store.activeUrl === "8" ? " active" : "")}><a className="page-link" href="#" onClick={() => actions.getCharacters("https://swapi.dev/api/people/?page=8")}>8</a></li>
                                                            <li className={"page-item" + (store.activeUrl === "9" ? " active" : "")}><a className="page-link" href="#" onClick={() => actions.getCharacters("https://swapi.dev/api/people/?page=9")}>9</a></li>
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