import { callAPIData } from '../../services/callAPIData'
import { createElement } from '../../helpers/createElement'
import { shuffle } from '../../helpers/shuffle'

const startGameBtn = document.getElementById('startGame')
const questionRoot = document.getElementById('question')
const choicesRoot = document.getElementById('choices')

const renderQuestion = async () => {
  const { question, incorrectAnswers, correctAnswer } = await callAPIData()

  /**
   * Creates and displays question
   */
  let questionTemplate = question
  createElement(questionTemplate, questionRoot)
  
  /**
   * Creates and displays multiple choices
   * 
   * Incorrect and correct answers are combined into an array and then
   * the array is shuffled, converted into an object with key values and then
   * mapped to display a radio button
   */
  let choicesTemplate = [...incorrectAnswers]
  choicesTemplate.push(correctAnswer)
  shuffle(choicesTemplate)

  let shuffledChoicesObj = {...choicesTemplate}
  let output = Object.entries(shuffledChoicesObj).map(([key, value]) => ({key, value}))

  let tempElement = output.map(item => `<input name='choice' type='radio'>${item.value} <br/>`).join('')

  createElement(tempElement, choicesRoot)
}


export const getQuestion = () => startGameBtn.onclick = () => {
  renderQuestion()
  startGameBtn.innerText = 'Next Question'
}
