import {DECKS_LOADED} from "../actions/actions";

initialState = {
  decks: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case DECKS_LOADED:
      const {decks} = action;

      return {
        ...state,
        decks
      };
    default:
      return state
  }
}

export default reducer;