import React from 'react';

const PlanetCard = () => {
    return (
        <>
        <div class="card-group">
            <div className="card">
                <img src="https://lumiere-a.akamaihd.net/v1/images/tatooine-main_127c43c7.jpeg?region=164%2C0%2C953%2C536" 
                    className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Tattoine</h5>
                    <p className="card-text">Population:</p>
                    <p className="card-text">Terrain:</p>
                    <div className="card-buttons d-flex">
                        <a href="#" className="btn btn-light">Learn more!</a>
                        <a href="#" className="btn btn-light ml-auto"><i class="far fa-heart"></i></a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default PlanetCard