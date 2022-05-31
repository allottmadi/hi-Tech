const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

const questions = [
  {
    question: 'What was the first step?',
    answers: [
      { text: 'To head to the settings application', correct: true },
      { text: 'To go to safari and open up keyboard', correct: false }
    ]
  },
  {
    question: 'When sliding to the right of the slider does this...?',
    answers: [
      { text: 'increase the font size', correct: true },
      { text: 'decrease the font size', correct: false },
      { text: 'nothing, it is just a fun game', correct: false },
      { text: 'creates a scale to gradually go up in font sizes incrementally', correct: true }
    ]
  },
  {
    question: 'In settings where do you go when on the main page?',
    answers: [
      { text: 'Messages', correct: false },
      { text: 'Display and Brightness', correct: true },
      { text: 'Facebook', correct: false },
      { text: 'Camera', correct: false }
    ]
  },
  {
    question: 'When changing your text size, does it chnage everything on your phone, or just text messages?',
    answers: [
      { text: 'No, it only changes message size', correct: false },
      { text: 'Yes, it changes everything', correct: true }
    ]
  }
]

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

