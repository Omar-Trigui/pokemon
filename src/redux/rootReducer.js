import * as types from "./actionType";
const initState = {
  pokemon: {},
};
function rootReducer(state = initState, action) {
  switch (action.type) {
    case types.SET_POKEMON:
      return { ...state, pokemon: action.payload };
    default:
      return state;
  }
}
export default rootReducer;
