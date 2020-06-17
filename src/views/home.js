import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import { Link } from 'react-router-dom';
import CharacterCard from '../components/character-card';
import PlanetCard from '../components/planet-card';

const Home = () => {

    const [characters, setCharacters] = useState({
        results: [],
        perPage: 0
    })

    const getCharacters = (url) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setCharacters(prevState => {
                    return { ...prevState, ...result }

                })
            })
            .catch(error => console.log('error', error));
    }

    const [planets, setPlanets] = useState({
        results: [],
    })

    const getPlanets = (url) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setPlanets(prevState => {
                    return { ...prevState, ...result }
                })
            })
            .catch(error => console.log('error', error));
    }


    const nextPage = () => {

        setCharacters(prevState => {
            return { ...prevState, perPage: prevState.perPage + 10 }
        });

        getCharacters(characters.next.replace("http", "https"));
        
    }
    const previousPage = () => {

        setCharacters(prevState => {
            return { ...prevState, perPage: prevState.perPage - 10 }
        });

        getCharacters(characters.previous.replace("http", "https"));
        
    }

    useEffect(() => {
        getCharacters("https://swapi.dev/api/people/");
        getPlanets("https://swapi.dev/api/planets/")
    }, []);

    return (
        <>
            <div className="container-fluid">
                <Header />
                <div className="menu">
                    <h2>Characters</h2>
                    <div className="cambioPagina d-flex">
                        {
                            characters.previous === null ?
                                (
                                    <button onClick={() => nextPage()} className="btn btn-light ml-auto">Next</button>

                                ) : (characters.next === null ? (

                                    <button onClick={() => previousPage()}className="btn btn-light mr-auto">Previous</button>
                                ) : (
                                        <>
                                            <button onClick={() => previousPage()}className="btn btn-light mr-auto">Previous</button>
                                            <button onClick={() => nextPage()} className="btn btn-light ml-auto">Next</button>
                                        </>
                                    )
                                )
                        }

                    </div>
                    <div className="carrousel">
                        {
                            characters.results.length > 0 ?
                                (
                                    characters.results.map((elem, index, arr) => {
                                        return (
                                            
                                            <CharacterCard key={index}
                                                img={index + characters.perPage + 1 >= 18? index + characters.perPage + 2:index + characters.perPage + 1}
                                                name={elem.name} gender={elem.gender}
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
                            planets.results.length > 0 ?
                                (
                                    planets.results.map((elem, index, arr) => {
                                        return (
                                            <PlanetCard key={index} img={index + 1} name={elem.name} population={Intl.NumberFormat().format(parseInt(elem.population))} terrain={elem.terrain} />
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