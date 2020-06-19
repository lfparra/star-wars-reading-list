const getState = ({getStore, getActions, setStore}) => {
    return {
        store : {
            characters: null,
            planets: null,
            specificCharacter: null,
            specificPlanet: null,
            activeUrl: null,
            favoriteList: [],
        },

        actions : {

            getCharacters: async url => {
                const resp = await fetch(url);
                const data = await resp.json();
                console.log(data);
                setStore({
                    characters: data,
                    activeUrl: url.replace("https://swapi.dev/api/people/","").replace("?page=","")
                })
            },

            getPlanets: async url => {
                const resp = await fetch(url);
                const data = await resp.json();
                console.log(data);
                setStore({
                    planets: data,
                    activeUrl: url.replace("https://swapi.dev/api/planets/","").replace("?page=","")
                })
            },

            specificCharacter: async url => {
                const resp = await fetch(url);
                const data = await resp.json();
                console.log(data);
                setStore({
                    specificCharacter: data,
                    
                })
            },
            specificPlanet: async url => {
                const resp = await fetch(url);
                const data = await resp.json();
                console.log(data);
                setStore({
                    specificPlanet: data,
                    
                })
            },

            addFavoriteList: (name) =>{
        
                setStore({
                    favoriteList:  [...getStore().favoriteList, name]
                })
            }

        }
    }
}

export default getState;