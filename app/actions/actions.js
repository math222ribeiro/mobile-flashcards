export const DECKS_LOADED = "DECKS_LOADED";

export const decksLoaded = (decks) => ({
  type: DECKS_LOADED,
  decks
});