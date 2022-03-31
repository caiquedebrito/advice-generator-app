const btn = document.querySelector('.btn')
const adviceContainer = document.querySelector('.advice-container')
const numberOfAdvice = document.querySelector('#number')

async function handleAdvice() {
  btn.classList.add('load')
  const { id, advice } = await generateAdvice()
  displayAdvice(id, advice)
  btn.classList.remove('load')
}

function generateAdvice() {
  return fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => data.slip)
}

function displayAdvice(id, advice) {
  numberOfAdvice.textContent = id
  adviceContainer.textContent = `"${advice}"`
}


btn.addEventListener('click', handleAdvice)