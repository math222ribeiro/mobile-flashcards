export const DECKS_LOADED = "DECKS_LOADED";
export const NEW_DECK = "NEW_DECK";
export const ADD_CARD = 'ADD_CARD';

export const decksLoaded = (decks) => ({
  type: DECKS_LOADED,
  decks
});

export const newDeck = (deck) => ({
  type: NEW_DECK,
  deck
});

export const addCard = (deckChanged) => ({
  type: ADD_CARD,
  deckChanged,
});