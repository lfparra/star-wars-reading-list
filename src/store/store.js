const getState = ({getStore, getActions, setStore}) => {
    return {
        store : {
            characters: null,
            planets: null,
            specificCharacter: null
        },

        actions : {

            getCharacters: async url => {
                const resp = await fetch(url);
                const data = await resp.json();
                console.log(data);
                setStore({
                    characters: data
                })
            },

            getPlanets: async url => {
                const resp = await fetch(url);
                const data = await resp.json();
                console.log(data);
                setStore({
                    planets: data
                })
            },

            specificCharacter: async url => {
                const resp = await fetch(url);
                const data = await resp.json();
                console.log(data);
                setStore({
                    specificCharacter: data
                })
            },

        }
    }
}

export default getState;