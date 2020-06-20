import React, { useContext, useEffect } from 'react';
import { Context } from '../store/layoutContext';
import Carousel1 from '../images/carousel1.png';
import Carousel2 from '../images/carousel2.jpg';
import Carousel3 from '../images/carousel3.jpg';

const Home = (props) => {

    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getCharacters("https://swapi.dev/api/people/");
        actions.getPlanets("https://swapi.dev/api/planets/");
    }, []);

    return (
        <>
            <div className="container-fluid">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" data-interval="3000">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={Carousel1}
                                className="d-block w-75 ml-auto mr-auto" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={Carousel2}
                                className="d-block w-75  ml-auto mr-auto" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={Carousel3}
                                className="d-block w-75  ml-auto mr-auto" alt="..." />
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Home