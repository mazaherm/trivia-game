import { callAPIData } from '../../services/callAPIData'

import { createElement } from '../../helpers/createElement'
import { shuffle } from '../../helpers/shuffle'

import { renderNextQuestion } from '../renderNextQuestion'

const startGameBtn = document.getElementById('startGame')
const questionRoot = document.getElementById('question')
const choicesRoot = document.getElementById('choices')
const nextQuestionBtn = document.getElementById('nextQuestion')

export const renderQuestion = async () => {
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

  let tempElement = output.map(item => `<input name='choice' type='radio' value='${item.value}' id='${item.value.replace(/ /g, "-")}'>${item.value} <br/>`).join('')

  createElement(tempElement, choicesRoot)
}

let beenFired = true

export const startGame = () => startGameBtn.onclick = () => {
  renderQuestion()
  nextQuestionBtn.style.display = 'block'
  startGameBtn.style.display = 'none'
  // only fire this function is it hasn't been fired
  if (!beenFired) {
    renderNextQuestion()
    beenFired = false
  }
}
