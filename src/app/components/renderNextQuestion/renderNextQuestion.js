import { renderQuestion } from '../startGame'

const nextQuestionBtn = document.getElementById('nextQuestion')

export const renderNextQuestion = nextQuestionBtn.onclick = () => {
  renderQuestion()
}
