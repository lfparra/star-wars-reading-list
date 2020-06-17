import React from 'react';
import Header from '../components/header';

const PlanetPage = () => {
    return (
        <>
            <div className="container-fluid">
                <Header />
                <div className="page d-flex justify-content-center">
                    <div class="card mb-3 " /* style="max-width: 540px;" */>
                        <div class="row no-gutters">
                            <div class=" col-5">
                                <img src="https://starwars-visualguide.com/assets/img/planets/2.jpg"
                                    className="card-img"
                                    alt="..." />
                            </div>
                            <div class=" col-7">
                                <div class="card-body">
                                    <h2 class="card-title">Nombre personaje</h2>
                                    <h5>Rotatios Period: </h5>
                                    <h5>Orbital Period: </h5>
                                    <h5>Diameter: </h5>
                                    <h5>Climate: </h5>
                                    <h5>Gravity: </h5>
                                    <h5>Terrain: </h5>
                                    <h5>Surface Water: </h5>
                                    <h5>Population: </h5>
                                    <h5>Residents: </h5>
                                    <h5>Filsms: </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlanetPage;
