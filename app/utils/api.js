import { AsyncStorage } from 'react-native'
import { STORAGE_KEY } from '../App'

export function fetchDecks() {
  return AsyncStorage.getItem(STORAGE_KEY)
    .then(res => {
      return res === null ? [
        {
          title: 'React',
          questions: [
            {
              question: 'What is React?',
              answer: 'A library for managing user interfaces'
            },
            {
              question: 'Where do you make Ajax requests in React?',
              answer: 'The componentDidMount lifecycle event'
            }
          ]
        },

        {
          title: 'JavaScript',
          questions: [
            {
              question: 'What is a closure?',
              answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
          ]
        }
      ] : JSON.parse(res)
    })
}

export function updateDecks(decks) {
  return AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(decks))
}
