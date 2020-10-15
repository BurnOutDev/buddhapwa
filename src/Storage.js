import { quotes } from './quotes.json'

const keys = {
    favorites: 'favorites',
    quoteIndex: 'quote-index',
    initialized: 'initialized',
    seen: 'seen'
}

const getFavorites = () => JSON.parse(localStorage.getItem(keys.favorites))

const setQuoteIndex = (index) => localStorage.setItem(keys.quoteIndex, index)

const initializeStorage = () => {
    let initialized = localStorage.getItem(keys.initialized)

    if (!initialized) {
        localStorage.setItem(keys.favorites, '[]')
        localStorage.setItem(keys.quoteIndex, 0)
        localStorage.setItem(keys.initialized, true)
        localStorage.setItem(keys.seen, '[]')
    }
}

const addFavorite = (index) => {
    let favs = getFavorites()

    if (isInFavorites()) {

        favs = [...getFavorites(), index]

        localStorage.setItem(keys.favorites, JSON.stringify(favs))
    }
}

const isInFavorites = (index) => getFavorites().includes(index)

const removeFavorite = (index) => {
    let favs = getFavorites()

    delete favs[index]

    localStorage.setItem(JSON.stringify(favs))
}

const getNextIfSeen = (index) => {
    let seenStr = localStorage.getItem(keys.seen)
    let seenArr = JSON.parse(seenStr)

    while (seenArr.includes(index)) {
        index++
    }

    if (index > quotes.length - 1) {
        // clear array
        localStorage.setItem(JSON.stringify([]))
    }

    setQuoteIndex(index)

    return index
}

const getQuoteIndex = () => parseInt(localStorage.getItem(keys.quoteIndex))

initializeStorage()

export default {
    addFavorite,
    removeFavorite,
    getNextIfSeen,
    getQuoteIndex,
    isInFavorites
}