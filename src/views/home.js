import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/layoutContext';


const Home = (props) => {

    const { store, actions } = useContext(Context);

    return (
        <>
            <div className="container-fluid">
                <Link className="" to="/characters/">
                    <h2>Characters</h2>
                </Link>

                <Link className="" to="/planets/">
                    <h2>Planets</h2>
                </Link>



            </div>
        </>
    )
}

export default Home