// Fisher-Yates (aka Knuth) Shuffle

export const shuffle = array => {
  let currentIndex = array.length, tempValue, randomIndex

  // While there remain elements to shuffle
  while (0 !== currentIndex) {
    //Pick a remaining element
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // Swap remaining with the current element
    tempValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = tempValue
  }
  return array
}
