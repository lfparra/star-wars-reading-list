import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/character-planet-card.css';

const PlanetCard = (props) => {
    return (
        <>
            <div className="card-group justify-content-center ml-auto mr-auto">
                <div className="card">
                    <Link className="card-img" to={`/planetPage/${(props.url.replace("http://swapi.dev/api/planets/","").replace("/", ""))}`}>
                  
                        <img src={"https://starwars-visualguide.com/assets/img/planets/" + (props.url.replace("http://swapi.dev/api/planets/","").replace("/", "")) + ".jpg"}
                            className="card-img-top" alt={props.name} />
                    </Link>

                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">Population: {props.population}</p>
                        <p className="card-text">Terrain: {props.terrain}</p>
                        <div className="card-buttons d-flex">
                        <Link 
                            to={`/planetPage/${(props.url.replace("http://swapi.dev/api/planets/","").replace("/", ""))}`}
                            className="btn btn-light"
                            >Learn more!</Link>
                            
                            <a href="/" className="btn btn-light ml-auto"><i className="far fa-heart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlanetCard