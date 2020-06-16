import React from 'react';
import Header from './components/header';
import CharacterCard from './components/character-card';
import PlanetCard from './components/planet-card';

const App = () => {

    return (
        <>
            <Header />
            <div className="menu">
                <h2>Characters</h2>
                <div className="carrousel">
                    <CharacterCard />
                    <CharacterCard />
                    <CharacterCard />
                    <CharacterCard />
                    <CharacterCard />
                    
                </div>
            </div>
            <div className="menu">
                <h2>Planets</h2>
                <div className="carrousel">
                    <PlanetCard />
                    <PlanetCard />
                    <PlanetCard />
                    <PlanetCard />
                    <PlanetCard />
                </div>
            </div>

        </>
    )
}

export default App