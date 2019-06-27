'use strict';

const buttonScope = document.getElementById('buttonScope');
const result = document.getElementById('result');
const oneMore = document.getElementById('oneMore');
const fortune = document.getElementById('fortune');
const words = document.getElementById('words');


result.style.display = "none";

buttonScope.addEventListener('click', () => {
  buttonScope.style.display = 'none';
  result.style.display = "block";
  divination();
  divinationWrod();
});

oneMore.addEventListener('click', () => {
  buttonScope.style.display = 'block';
  result.style.display = 'none';
});


function divination() {
  const horos = ['大吉', '吉', '中吉', '小吉', '末吉', '凶', '大凶'];
  const num = Math.floor(Math.random() * horos.length);
  fortune.innerText = horos[num];
}

function divinationWrod() {
  const num = Math.floor(Math.random() * 10000);
  const word = `あなたはカフェイン${num}mg摂取してください`;

  words.innerText = word;
}