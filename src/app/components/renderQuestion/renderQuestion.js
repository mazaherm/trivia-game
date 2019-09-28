import { callAPIData } from '../../services/callAPIData'
import { createElement } from '../../helpers/createElement'

const startGameBtn = document.getElementById('startGame')

const renderQuestion = async () => {
  const { question, incorrectAnswers, correctAnswer } = await callAPIData()
  console.log(question)
  console.log(incorrectAnswers)
  console.log(correctAnswer)
}

export const getQuestion = () => startGameBtn.onclick = () => renderQuestion()
