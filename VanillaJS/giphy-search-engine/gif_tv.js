const banner = document.querySelector("#js-tv-area");

const tv = () => {
  const keywords = ['yeah', 'cute'];
  const keyword = keywords[Math.floor(Math.random() * keywords.length)];

  const API_KEY = 'sLPioj6JW83rjYtE2oZn9Rbr5SR2VYW0'; // API for giphy app
  const URL = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${API_KEY}`;
  
    // Ajax request
  const GiphyAJAXCall = new XMLHttpRequest(); // 생성자
  GiphyAJAXCall.open('GET',URL);
  GiphyAJAXCall.send();

  GiphyAJAXCall.addEventListener('load',(e) => {
    const rawData = e.target.response; // 날것의 Data이므로 parsing이 필요함
    pushToDom(rawData);
  });
};

const pushToDom = data => {
  banner.innerHTML = null;
  const parsedData = JSON.parse(data);
  const imgDataSet = parsedData.data;

  let i = 0;
  imgDataSet.forEach(imgData => {
    setTimeout(()=>{
      let imgURL = imgData.images.fixed_height.url;
      banner.innerHTML = `<img src="${imgURL}" class="img-center">`;
    }, 3000 * i);
    i++;
  });

};

document.addEventListener('DOMContentLoaded', tv);
