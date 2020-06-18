import React, { useEffect, useContext } from 'react';
import { Context } from '../store/layoutContext';


const PlanetPage = (props) => {

    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.specificPlanet(`https://swapi.dev/api/planets/${props.match.params.name}/`)
    }, []);

    return (
        <>
            <div className="container-fluid">

                <div className="page d-flex justify-content-center">
                    <div class="card mb-3 " /* style="max-width: 540px;" */>
                        <div class="row no-gutters">
                            <div class=" col-6">
                                <img src={`https://starwars-visualguide.com/assets/img/planets/${props.match.params.name}.jpg`}
                                    className="card-img"
                                    alt="..." />
                            </div>
                            <div class=" col-6">
                                <div class="card-body">
                                    {
                                        store.specificPlanet !== null ?
                                            (
                                                <>
                                                    <h2 className="card-title d-flex justify-content-center">{store.specificPlanet.name}</h2>

                                                    <div className="row d-flex justify-content-center" id="description">
                                                        <div className="offset-1 col-4 ">
                                                            <span className="font-weight-bold ">Rotation Period :</span>
                                                        </div>
                                                        <div className="col-7">
                                                            <span className="font-weight-light ">{Intl.NumberFormat().format(parseInt(store.specificPlanet.rotation_period))}</span>
                                                        </div>
                                                        <div className="offset-1 col-4">
                                                            <span className="font-weight-bold">Orbital Period : </span>
                                                        </div>
                                                        <div className="col-7">
                                                            <span className="font-weight-light">{Intl.NumberFormat().format(parseInt(store.specificPlanet.orbital_period))}</span>
                                                        </div>
                                                        <div className="offset-1 col-4">
                                                            <span className="font-weight-bold">Diameter :  </span>
                                                        </div>
                                                        <div className="col-7">
                                                            <span className="font-weight-light">{Intl.NumberFormat().format(parseInt(store.specificPlanet.diameter))}</span>
                                                        </div>
                                                        <div className="offset-1 col-4">
                                                            <span className="font-weight-bold">Climate : </span>
                                                        </div>
                                                        <div className="col-7">
                                                            <span className="font-weight-light">{store.specificPlanet.climate}</span>
                                                        </div>
                                                        <div className="offset-1 col-4">
                                                            <span className="font-weight-bold">Gravity: </span>
                                                        </div>
                                                        <div className="col-7">
                                                            <span className="font-weight-light">{store.specificPlanet.gravity}</span>
                                                        </div>
                                                        <div className="offset-1 col-4">
                                                            <span className="font-weight-bold">Terrain: </span>
                                                        </div>
                                                        <div className="col-7">
                                                            <span className="font-weight-light">{store.specificPlanet.terrain}</span>
                                                        </div>
                                                        <div className="offset-1 col-4">
                                                            <span className="font-weight-bold">Surface Water : </span>
                                                        </div>
                                                        <div className="col-7">
                                                            <span className="font-weight-light">{store.specificPlanet.surface_water}</span>
                                                        </div>

                                                        <div className="offset-1 col-4">
                                                            <span className="font-weight-bold">Population : </span>
                                                        </div>
                                                        <div className="col-7">
                                                            <span className="font-weight-light">{Intl.NumberFormat().format(parseInt(store.specificPlanet.population))}</span>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlanetPage;
