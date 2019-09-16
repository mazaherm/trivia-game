import axios from 'axios'

let difficulty = 'easy'

const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
  axios.get(`https://opentdb.com/api.php?amount=1&difficulty=${difficulty}`)
    .then(response => {
    console.log(response.data.results[0])
  })
    .catch(error => {
    console.log(error)
  })
})



