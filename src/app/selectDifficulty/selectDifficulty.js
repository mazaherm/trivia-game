import axios from 'axios'

/**
 * This allows the user to select the games difficulty and call
 * the first question from the API based on the difficulty level.
 * This then starts the game.
 */
export const selectDifficulty = () => {
  const easy = document.getElementById('easy'),
        medium = document.getElementById('medium'),
        hard = document.getElementById('hard')
  
  easy.onclick = () => callAPIData('easy')
  medium.onclick = () => callAPIData('medium')
  hard.onclick = () => callAPIData('hard')
  
  const callAPIData = difficulty => {
    axios.get(`https://opentdb.com/api.php?amount=1&difficulty=${difficulty}`)
      .then(response => {
      console.log(response)
    })
      .catch(error => {
      console.error(error)
    })
  }
}
