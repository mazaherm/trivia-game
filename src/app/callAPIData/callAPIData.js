import axios from 'axios'

/**
 * This calls the API and takes in a parameter. The parameter accepts a string.
 * The API call returns some data.
 * @param {string} difficulty 
 */

export const callAPIData = difficulty => {
  axios.get(`https://opentdb.com/api.php?amount=1&difficulty=${difficulty}`)
    .then(response => {
      const data = response.data.results[0]
      return {
        question: data.question,
        correctAnswer: data.correct_answer,
        incorrectAnswers: data.incorrect_answers
      }
  })
    .catch(error => {
    console.error(error)
  })
}
