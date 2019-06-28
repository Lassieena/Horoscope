'use strict';

const buttonScope = document.getElementById('buttonScope');
const result = document.getElementById('result');
const oneMore = document.getElementById('oneMore');
const fortune = document.getElementById('fortune');
const words = document.getElementById('words');
const tweetDiviede = document.getElementById('tweet-area');

result.style.display = "none";


buttonScope.addEventListener('click', () => {
  buttonScope.style.display = 'none';
  result.style.display = "block";
  divination();

});

oneMore.addEventListener('click', () => {
  buttonScope.style.display = 'block';
  result.style.display = 'none';
});



function removeAllChildren(element) {
  while (element.firstChild) { // 子供の要素がある限り削除
    element.removeChild(element.firstChild);
  }
}

function divination() {
  const horos = ['大吉', '吉', '中吉', '小吉', '末吉', '凶', '大凶'];
  const num = Math.floor(Math.random() * horos.length);
  fortune.innerText = horos[num];


  const miliG = ['カフェイン', '塩分', '糖質', '脂質', 'たんぱく質', 'ミネラル', 'ビタミン', '食物繊維', '脂質'];
  const mili = Math.floor(Math.random() * miliG.length);

  const happiness = [
    'そしたら何かが見えてくるでしょう。',
    '明日また占ってください。',
    'きっと君に幸福があるでしょう。',
    '僕らはきっと目指している。',
    'きっとあなたの成長につながるだろう',
    '摂取しなければ不幸になるかもね。',
    '神は君の頑張りきっと見ている。',
    'あなたの成長を。never give up',
    'あなたの挑戦を祈っております。'
  ];
  const happ = Math.floor(Math.random() * happiness.length);

  const nums = Math.floor(Math.random() * 100000);
  const word = `あなたは今日、${miliG[mili]}${nums}mg摂取してください。${happiness[happ]}`;

  words.innerText = word;


  // ツイートエリア
  removeAllChildren(tweetDiviede);
  const anchor = document.createElement('a');
  const hrefValue = "https://twitter.com/intent/tweet?button_hashtag=" +
    encodeURIComponent('今日の運勢') +
    "&ref_src=twsrc%5Etfw";

  anchor.setAttribute('href', hrefValue);
  anchor.setAttribute('target', '_blank');
  anchor.className = 'twitter-hashtag-button';
  anchor.setAttribute('data-text', horos[num] + '。\n' + word);
  anchor.innerText = 'Tweet #今日の運勢';

  tweetDiviede.appendChild(anchor);

  // widgets.js の設定
  const script = document.createElement('script');
  script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
  tweetDiviede.appendChild(script);

}