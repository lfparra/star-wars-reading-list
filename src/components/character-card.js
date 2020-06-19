import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/character-planet-card.css'
import { Context } from '../store/layoutContext';

const CharacterCard = (props) => {

    const { store, actions } = useContext(Context);

    console.log(store.favoriteList, props.name)

    return (
        <>
            <div className="card-group justify-content-center ml-auto mr-auto">
                <div className="card ">
                    <Link className="card-img" to={`/characterPage/${(props.url.replace("http://swapi.dev/api/people/", "").replace("/", ""))}`}>
                        <img src={"https://starwars-visualguide.com/assets/img/characters/" + (props.url.replace("http://swapi.dev/api/people/", "").replace("/", "")) + ".jpg"}
                            className="card-img-top" alt={props.name} />
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">Gender: {props.gender}</p>
                        <p className="card-text">Hair-Color: {props.hair_color}</p>
                        <p className="card-text">Eye-Color: {props.eye_color}</p>
                        <div className="card-buttons d-flex">
                            <Link to={`/characterPage/${(props.url.replace("http://swapi.dev/api/people/", "").replace("/", ""))}`}
                                className="btn btn-light">
                                Learn more!
                            </Link>

                            <button 
                                onClick={() => actions.addFavoriteList(props.name)}
                                className="btn btn-light ml-auto">
                                    <i className="far fa-heart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default CharacterCard