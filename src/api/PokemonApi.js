import axios from "axios";

export const URL = "https://pokeapi.co/api/v2/pokemon";
export const GET_POKEMONS = `${URL}?limit=150/`;

/**
 * its a central function that
 * returns a promise to get the
 * data of the pokemon(s) from pokeapi.  
 */
export const getPokemons = (apiURL) => {
  return new Promise((resolve, reject) => {
    return axios({
      method: "GET",
      url: apiURL,
    })
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};
