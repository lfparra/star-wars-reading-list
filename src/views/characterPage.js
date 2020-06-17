import React from 'react';

import Header from '../components/header';
import '../styles/character-planet-page.css'

const CharacterPage = () => {
    return (
        <>
            <div className="container-fluid">
                <Header />
                <div className="page d-flex justify-content-center">
                    <div class="card mb-3 " /* style="max-width: 540px;" */>
                        <div class="row no-gutters">
                            <div class=" col-5">
                                <img src="https://starwars-visualguide.com/assets/img/characters/2.jpg"
                                    className="card-img"
                                    alt="..." />
                            </div>
                            <div class=" col-7">
                                <div class="card-body">
                                    <h2 class="card-title">Nombre personaje</h2>
                                    <h5>Height: </h5>
                                    <h5>Mass: </h5>
                                    <h5>Hair Color: </h5>
                                    <h5>Skin Color: </h5>
                                    <h5>Eye Color: </h5>
                                    <h5>Birth Year: </h5>
                                    <h5>Gender: </h5>
                                    <h5>Homeworld: </h5>
                                    <h5>Films: </h5>
                                    <h5>Species: </h5>
                                    <h5>Vehicles: </h5>
                                    <h5>Starships: </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CharacterPage;
