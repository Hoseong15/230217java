// 1. <div> 요소 만들기
let div = document.createElement('div');

// 2. 만든 요소의 클래스를 'alert'로 설정
div.className = "alert";

// 3. 내용 채워넣기
div.innerHTML = "<strong>안녕하세요!</strong> 중요 메시지를 확인하셨습니다.";

div.style.color = 'red';

document.body.append(div);

const ul = document.querySelector('ul');
ul.before('before');
ul.after('after');
let liFirst = document.createElement('li');
liFirst.innerHTML = 'prepend';
ul.prepend(liFirst);
let liLast = document.createElement('li');
liLast.innerHTML = 'append';
ul.append(liLast);

const button = document.createElement('button');
button.innerHTML = 'Toggle';
button.onclick = function () {
  console.log('call')
  div.classList.toggle('alert');
}

document.body.append(button);

setInterval(() => console.log(new Date()), 2000);

localStorage.setItem('test', 100);

const value = localStorage.getItem('test');
console.log(value);