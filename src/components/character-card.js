import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/character-planet-card.css'

const CharacterCard = (props) => {
    return (
        <>
        <div className="card-group justify-content-center ml-auto mr-auto">
            <div className="card ">
                <Link className="card-img" to={`/characterPage/${props.name}`}>
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${props.img}.jpg`} 
                    className="card-img-top" alt={props.name} />
                </Link>
                
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">Gender: {props.gender}</p>
                    <p className="card-text">Hair-Color: {props.hair_color}</p>
                    <p className="card-text">Eye-Color: {props.eye_color}</p>
                    <div className="card-buttons d-flex">
                        <Link to={`/characterPage/${props.name}`} className="btn btn-light">Learn more!</Link>
                        <a href="/" className="btn btn-light ml-auto"><i className="far fa-heart"></i></a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default CharacterCard