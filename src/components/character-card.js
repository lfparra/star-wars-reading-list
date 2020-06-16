import React from 'react';

const CharacterCard = (props) => {
    return (
        <>
        <div className="card-group">
            <div className="card">
                <img src="https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_5a38c454_461eebf5.jpeg?region=0%2C0%2C1536%2C864&width=960" 
                    className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">Gender:</p>
                    <p className="card-text">Hair-Color: {props.hair_color}</p>
                    <p className="card-text">Eye-Color: {props.eye_color}</p>
                    <div className="card-buttons d-flex">
                        <a href="/" className="btn btn-light">Learn more!</a>
                        <a href="/" className="btn btn-light ml-auto"><i className="far fa-heart"></i></a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default CharacterCard