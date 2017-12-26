import { AsyncStorage } from 'react-native'
import { STORAGE_KEY } from '../App'

export function fetchDecks() {
  return AsyncStorage.getItem(STORAGE_KEY)
    .then(res => {
      return res === null ? [] : JSON.parse(res)
    })
}

export function updateDecks(decks) {
  return AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(decks))
}
