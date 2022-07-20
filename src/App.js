import React, { useEffect } from "react";
import Header from "./Components/Header";
import PokemonDetails from "./Components/PokemonDetails";
import { getPokemons, URL } from "./api/PokemonApi";
import { extractData } from "./Helper/extractData";
import { useDispatch } from "react-redux";
import * as types from "./redux/actionType";
import "./styles/App.css";
function App() {
  const dispatch = useDispatch();
  // intialaze the pokemon state to the best pokemon ever
  useEffect(() => {
    getPokemons(`${URL}/pikachu`).then(({ data }) => {
      dispatch({ type: types.SET_POKEMON, payload: extractData(data) });
    });
  }, [dispatch]);

  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>
      <div className="PokemonDetails">
        <PokemonDetails />
      </div>
    </div>
  );
}

export default App;
