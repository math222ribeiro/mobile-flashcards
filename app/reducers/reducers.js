import {ADD_CARD, DECKS_LOADED, NEW_DECK} from "../actions/actions";

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

      return {
        ...state,
        decks: [...state.decks, deck]
      };

    case ADD_CARD:
      const {deckChanged} = action;
      return {
        ...state,
        decks: state.decks.filter(aDeck => aDeck.title !== deckChanged.title).concat([deckChanged])
      };
    default:
      return state
  }
}

export default reducer;