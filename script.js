let getFactBtn = document.getElementById("get-fact-btn");
let ranFactBtn = document.getElementById("ran-fact-btn");
let fact = document.querySelector(".fact");
let url = "http://numbersapi.com/";
let num = document.querySelector('#num')

const getFact = () => {
  fact.style.display = 'block'
  fact.style.borderBottom = '7px solid #566fff';
  const numberInput = num.value;
  num.value = ''
  fetch(url + numberInput)
    .then(res => res.text())
    .then(data => {
      if (!numberInput || isNaN(+numberInput)) throw new Error ('enter a number')
      fact.innerHTML = `
      <h1>${numberInput}</h1>
        <p>${data}</p>
      `
    })
    .catch((err) => {
      fact.style.borderBottom = '7px solid rgba(255, 0, 0, 0.665)';
      fact.innerHTML = `<h3>${err.message}</h3>`;
    });    
}

const getRandomFact = () => {
  fact.style.display = 'block'
  fact.style.borderBottom = '7px solid #566fff';
  num.value = ''
  const urlRandom = 'http://numbersapi.com/random?min=1&max=600'
  fetch(urlRandom)
    .then(res => res.text())
    .then(data => {
    fact.innerHTML = `
    <h1>${data.split(' ')[0]}</h1>
        <p>${data}</p>
        `
    })
    .catch(()=>{
      fact.style.borderBottom = '7px solid rgba(255, 0, 0, 0.665)';
      fact.innerHTML = '<h3>Unnexpected Error</h3>'
    })
}

getFactBtn.addEventListener('click', getFact);
ranFactBtn.addEventListener('click', getRandomFact)