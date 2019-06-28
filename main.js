'use strict';


const buttonScope = document.getElementById('buttonScope');
const result = document.getElementById('result');
const oneMore = document.getElementById('oneMore');
const fortune = document.getElementById('fortune');
const words = document.getElementById('words');
const tweetDiviede = document.getElementById('tweet-area');

result.style.display = "none";

// 占い
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
  const num = Math.random();
  if (num < 0.01) {
    fortune.innerText = horos[0];
  } else if (num < 0.11) {
    fortune.innerText = horos[1];

  } else if (num < 0.25) {
    fortune.innerText = horos[2];

  } else if (num < 0.38) {
    fortune.innerText = horos[3];

  } else if (num < 0.52) {
    fortune.innerText = horos[4];

  } else if (num < 0.75) {
    fortune.innerText = horos[5];

  } else if (num < 1) {
    fortune.innerText = horos[6];

  }


  const miliG = ['カフェイン', '塩分', '糖質', '脂質', 'たんぱく質', 'ミネラル', 'ビタミン', '食物繊維', '脂質'];
  const mili = Math.floor(Math.random() * miliG.length);

  const happiness = [
    'そしたら何かが見えてくるでしょう。',
    '明日また占ってください。',
    'きっと君に幸福があるでしょう。',
    '僕らはきっと目指している。',
    'きっとあなたの成長につながるだろう',
    '摂取しなければ不幸になるかもね。',
    '神は君の頑張りをきっと見ている。',
    'あなたの成長を。never give up.',
    'あなたの挑戦を祈っております。',
    'これができれば君も竜王だ!!',
    'タピオカも一緒に食べよう!',
    'ラーメン食べれば解決だね',
    'モンスターエナジー飲めば解決だね。'
  ];
  const happ = Math.floor(Math.random() * happiness.length);

  const nums = Math.floor(Math.random() * 1000);
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