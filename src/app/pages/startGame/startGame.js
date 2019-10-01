import { callAPIData } from '@services/callAPIData'

import { createElement } from '@helpers/createElement'
import { shuffle } from '@helpers/shuffle'

const startGameBtn = document.getElementById('startGame')
const questionRoot = document.getElementById('question')
const choicesRoot = document.getElementById('choices')
const nextQuestionBtn = document.getElementById('nextQuestion')
const displayScore = document.getElementById('score')

let score = 0

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

  let tempElement = output.map(item => `<input name='choice' type='radio' value='${item.value}' id='${item.value.replace(/[^A-Z0-9]+/ig, "_")}'>${item.value} <br/>`).join('')

  createElement(tempElement, choicesRoot)
  
  /**
   * Select Answer
   * correctAnswer is the same as the id of the radio input
   */
  const correctChoice = document.getElementById(correctAnswer.replace(/[^A-Z0-9]+/ig, "_"))
  console.log(correctAnswer, '<-- ANSWER')
  
  nextQuestionBtn.onclick = () => {
    if (correctChoice.checked && correctChoice.value == correctAnswer) {
      score += 1
      displayScore.innerHTML = score
    }
    renderQuestion()
  }
}

export const startGame = () => startGameBtn.onclick = () => {
  renderQuestion()
  nextQuestionBtn.style.display = 'block'
  startGameBtn.style.display = 'none'
}
