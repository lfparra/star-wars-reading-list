import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/layoutContext';

const Home = (props) => {

    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getCharacters("https://swapi.dev/api/people/");
        actions.getPlanets("https://swapi.dev/api/planets/");
    }, []);

    return (
        <>
            <div className="container-fluid">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel" data-interval="3000">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png"
                                className="d-block w-75 h-50 ml-auto mr-auto" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://i.blogs.es/69fdcc/star-wars-saga/1366_2000.jpg"
                                className="d-block w-75 h-50 ml-auto mr-auto" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://cherry-brightspot.s3.amazonaws.com/d3/52/3cce57164534a50d08dfb1b8ace7/original.jpg"
                                className="d-block w-75 h-50 ml-auto mr-auto" alt="..." />
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default Home