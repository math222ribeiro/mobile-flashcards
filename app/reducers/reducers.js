import {DECKS_LOADED, NEW_DECK} from "../actions/actions";

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

    case NEW_DECK:
      const {deck} = action;
      console.log(deck);
      return {
        ...state,
        decks: [...state.decks, deck]
      };
    default:
      return state
  }
}

export default reducer;