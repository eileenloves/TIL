// 1. <input> 태그 안의 값을 잡는다.
const button = document.querySelector('#js-button');
const inputArea = document.querySelector('#js-input');

button.addEventListener('click', () => {
  const inputValue = document.querySelector('#js-input').value;
  pushToDOM(inputValue);
});

inputArea.addEventListener('keyup', (e) => {
  const inputValue = document.querySelector('#js-input').value;
  console.log(e);
  if(e.which === 13) pushToDOM(inputValue);
});

// 2. API 를 활용해 data를 받는다. 그리고 가공한다.
const API_KEY = 'sLPioj6JW83rjYtE2oZn9Rbr5SR2VYW0'; // API for giphy app
let keyword = 'cats';
const URL = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${API_KEY}`; // version 1, refer to DOCS

  // Ajax request
const GiphyAJAXCall = new XMLHttpRequest(); // 생성자
GiphyAJAXCall.open('GET',URL);
GiphyAJAXCall.send();

GiphyAJAXCall.addEventListener('load',(e) => {
  const rawData = e.target.response; // 날것의 Data이므로 parsing이 필요함
  const parsedData = JSON.parse(rawData);
  pushToDOM(parsedData); 
});


// 3. GIF파일들을 index.html에 밀어 넣는다.
const pushToDOM = (parsedData) => {
  //console.log(parsedData.data[0].images.fixed_height.url);
  const resultArea = document.querySelector('#result-area');
  resultArea.innerHTML = `<img src="${parsedData.data[1].images.fixed_height.url}" alt="cat" />`;
};

