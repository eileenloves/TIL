// 1. React와  ReactDOM 라이브러리 import
// import 역시 require구문 기반으로 동작
import React from 'react';
import ReactDOM from 'react-dom';

// 2. React 컴포넌트를 생성   
// 1) 함수  2) 클래스
// 컴포넌트의 역할 1.페이지 보여주기 2.event handling

/*
function getButtonText() {
  return 'Click!'
}
*/

const App = () => {
  const buttonText = {happy:'Hacking'}
  function getTime(){
    return new Date().getTime().toLocaleString()
  }
  return (
    <div>
      <h3>{getTime()}</h3>
      <label htmlFor="name" className="name_label">Enter Name: </label>
      <input type="text" id="name"/>
      <button style={{ backgroundColor: 'blue', color:'white',border:'solid 1px black'}}>
        {buttonText.happy}
      </button>
    </div>
  )
}  

// 3. 화면에 HTML 올 띄우기
// DOM = 화면(browser)
ReactDOM.render(
  <App />, //사투리와 같은 개념 (문법이 조금씩 다름)
  document.querySelector('#root')
)