import React from 'react';
const getState = ({getStore, getActions, setStore}) => {
    return {
        store : {
            characters: null,
            character: null,
            planets: null
        },

        actions : {

            getCharacters: async url => {
                const resp = await fetch(url);
                const data = await resp.json();
                setStore({
                    characters: data
                })
            },

            getCharacter: async url => {
                const resp = await fetch(url);
                const data = await resp.json();
                setStore({
                    character: data
                })
            },

            getPlanets: async url => {
                const resp = await fetch(url);
                const data = await resp.json();
                setStore({
                    planets: data
                })
            }

        }
    }
}

export default getState;