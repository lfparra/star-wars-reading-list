import React, { useEffect, useContext } from 'react';
import { Context } from '../store/layoutContext';
import '../styles/character-planet-page.css'

const CharacterPage = (props) => {

    console.log(props.location.pathname);
    console.log(props.match.params.name) /* 1 */
    console.log(props.history.goBack)

    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.specificCharacter(`https://swapi.dev/api/people/${props.match.params.name}/`)
    }, []);

    return (
        <>
            <div className="container-fluid">
                <div className="goBackMenu d-flex">
                    <button onClick={() => props.history.goBack()} type="button" className="btn btn-lg ml-auto mr-5 mb-0 mt-1"><i class="fas fa-chevron-left"></i></button>
                </div>

                {
                    store.specificCharacter !== null ?
                        (
                            <>
                                <div className="page d-flex justify-content-center">
                                    <div className="card mb-3 " /* style="max-width: 540px;" */>
                                        <div className="row no-gutters">
                                            <div className=" col-5">
                                                <img src={`https://starwars-visualguide.com/assets/img/characters/${props.match.params.name}.jpg`}
                                                    className="card-img"
                                                    alt={store.specificCharacter.name} />
                                            </div>
                                            <div className=" col-7">

                                                <div className="card-body">
                                                    <h2 className="card-title d-flex justify-content-center">{store.specificCharacter.name}</h2>

                                                    <div className="row d-flex justify-content-center" id="description">
                                                        <div className="offset-1 col-4 ">
                                                            <span className="font-weight-bold ">Height : </span>
                                                        </div>
                                                        <div className="col-7">
                                                            <span className="font-weight-light ">{store.specificCharacter.height}</span>
                                                        </div>
                                                        <div className="offset-1 col-4">
                                                            <span className="font-weight-bold">Mass : </span>
                                                        </div>
                                                        <div className="col-7">
                                                            <span className="font-weight-light">{store.specificCharacter.mass}</span>
                                                        </div>
                                                        <div className="offset-1 col-4">
                                                            <span className="font-weight-bold">Hair Color : </span>
                                                        </div>
                                                        <div className="col-7">
                                                            <span className="font-weight-light">{store.specificCharacter.hair_color}</span>
                                                        </div>
                                                        <div className="offset-1 col-4">
                                                            <span className="font-weight-bold">Skin Color : </span>
                                                        </div>
                                                        <div className="col-7">
                                                            <span className="font-weight-light">{store.specificCharacter.skin_color}</span>
                                                        </div>
                                                        <div className="offset-1 col-4">
                                                            <span className="font-weight-bold">Eye Color : </span>
                                                        </div>
                                                        <div className="col-7">
                                                            <span className="font-weight-light">{store.specificCharacter.eye_color}</span>
                                                        </div>
                                                        <div className="offset-1 col-4">
                                                            <span className="font-weight-bold">Birth Year : </span>
                                                        </div>
                                                        <div className="col-7">
                                                            <span className="font-weight-light">{store.specificCharacter.birth_year}</span>
                                                        </div>
                                                        <div className="offset-1 col-4">
                                                            <span className="font-weight-bold">Gender : </span>
                                                        </div>
                                                        <div className="col-7">
                                                            <span className="font-weight-light">{store.specificCharacter.gender}</span>
                                                        </div>

                                                        <div className="offset-1 col-4">
                                                            <span className="font-weight-bold">Species : </span>
                                                        </div>
                                                        <div className="col-7">
                                                            <span className="font-weight-light">{store.specificCharacter.species}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
        </>
    )
}

export default CharacterPage;
