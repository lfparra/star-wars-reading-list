import React, { useEffect, useContext } from 'react';
import { Context } from '../store/layoutContext';
import '../styles/character-planet-page.css'

const CharacterPage = (props) => {

    console.log(props.location.pathname);
    console.log(props.match.params.name) /* 1 */

    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.specificCharacter(`https://swapi.dev/api/people/${props.match.params.name}/`)
    }, []);

    console.log(useEffect)

    return (
        <>
            <div className="container-fluid">

                <div className="page d-flex justify-content-center">
                    <div class="card mb-3 " /* style="max-width: 540px;" */>
                        <div class="row no-gutters">
                            <div class=" col-5">
                                <img src={`https://starwars-visualguide.com/assets/img/characters/${props.match.params.name}.jpg`}
                                    className="card-img"
                                    alt="..." />
                            </div>
                            <div class=" col-7">
                                <div class="card-body">
                                    {
                                        store.specificCharacter !== null ?
                                            (
                                                <>
                                                    <h2 class="card-title">{store.specificCharacter.name}</h2>
                                                    <h5>Height: {store.specificCharacter.height}</h5>
                                                    <h5>Mass: {store.specificCharacter.mass}</h5>
                                                    <h5>Hair Color: {store.specificCharacter.hair_color}</h5>
                                                    <h5>Skin Color: {store.specificCharacter.skin_color}</h5>
                                                    <h5>Eye Color: {store.specificCharacter.eye_color}</h5>
                                                    <h5>Birth Year: {store.specificCharacter.birth_year}</h5>
                                                    <h5>Gender: {store.specificCharacter.gender}</h5>
                                                    <h5>Homeworld: {store.specificCharacter.homeworld}</h5>
                                                    <h5>Films: {store.specificCharacter.films}</h5>
                                                    <h5>Species: {store.specificCharacter.species}</h5>
                                                    <h5>Vehicles: {store.specificCharacter.vehicles}</h5>
                                                    <h5>Starships: {store.specificCharacter.starships}</h5>
                                                </>
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default CharacterPage;
