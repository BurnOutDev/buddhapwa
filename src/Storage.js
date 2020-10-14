import { quotes } from './quotes.json'

const getFavorites = () => JSON.parse(localStorage.getItem('favorites'))

const setQuoteIndex = (index) => localStorage.setItem('quote-index', index)

const addFavorite = (index) => {
    let favs = [...getFavorites(), index]

    localStorage.setItem('favorites', JSON.stringify(favs))
}

const removeFavorite = (index) => {
    let favs = getFavorites()

    delete favs[index]

    localStorage.setItem(JSON.stringify(favs))
}

const getNextIfSeen = (index) => {
    let seenStr = localStorage.getItem('seen')
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

const getQuoteIndex = () => parseInt(localStorage.getItem('quote-index'))

if (!getQuoteIndex()) setQuoteIndex(46)  

export default {
    addFavorite,
    removeFavorite,
    getNextIfSeen,
    getQuoteIndex
}