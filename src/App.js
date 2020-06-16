import React, { useState, useEffect } from 'react';
import Header from './components/header';
import CharacterCard from './components/character-card';
import PlanetCard from './components/planet-card';

const App = () => {

    const [character, setCharacter] = useState({
        results : [],
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
                setCharacter(prevState => {
                    return { ...prevState, ...result }
                })
            })
            .catch(error => console.log('error', error));
    }

    const [planets, setPlanets] = useState({
        results : [],
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

    useEffect(() => {
        getCharacters("https://swapi.dev/api/people/");
        getPlanets("https://swapi.dev/api/planets/")
    }, []);

    return (
        <>
            <Header />
            <div className="menu">
                <h2>Characters</h2>
                <div className="carrousel">
                    {
                        character.results.length > 0 ?
                            (
                                character.results.map((elem, index, arr) => {
                                    return (
                                        <CharacterCard key={index} name={elem.name} hair_color={elem.hair_color} eye_color={elem.eye_color}/>
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
                                        <PlanetCard key={index} name={elem.name} population={elem.population} terrain={elem.terrain}/>
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

export default App