export const DECKS_LOADED = "DECKS_LOADED";
export const NEW_DECK = "NEW_DECK";

export const decksLoaded = (decks) => ({
  type: DECKS_LOADED,
  decks
});

export const newDeck = (deck) => ({
  type: NEW_DECK,
  deck
});