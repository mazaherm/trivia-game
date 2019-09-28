import axios from 'axios'
import to from 'await-to-js'

export const callAPIData = async () => {
  const [err, res] = await to(axios(`https://opentdb.com/api.php?amount=1&difficulty=easy`)) // default difficulty is easy

  if (err) return Promise.reject(err)

  let jsonData = res.data.results[0]
  return {
    question: jsonData.question,
    incorrectAnswers: jsonData.incorrect_answers,
    correctAnswer: jsonData.correct_answer
  }
}
