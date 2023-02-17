// const random = Math.floor(Math.random() * 10) + 1;    //랜덤숫자
// const text = document.querySelector('div');           // 텍스트

// function verify() {
//   const numberAnswer = parseInt(document.getElementById("guessed").value);  //input value값

//   if (isNaN(numberAnswer) || numberAnswer < 1 || numberAnswer > 10) {        // 숫자가 아닌 경우
//     text.textContent = "숫자로만 입력해주세요";
//   } else if (numberAnswer === random) {
//     text.textContent = "정답입니다.";
//   } else if (numberAnswer < random) {
//     text.textContent = "너무 낮은걸..?";
//   } else {
//     text.textContent = "조금만 더 낮게!";
//   }
// }



function verify() {
  const value = parseInt(document.getElementById("guessed").value, 10);
  console.dir(document.getElementById("guessed"));
  const getRandom = Math.floor(Math.random() * 10 + 1);
  const p = document.createElement("p");

  if (isNaN(value)) {
    p.innerHTML = "숫자를 입력해주세요.";
  } else if (value < 1 || value > 10) {
    p.innerHTML = "1과 10 사이의 숫자를 입력해주세요."
  } else if (value === getRandom) {
    p.innerHTML = "You win !!!";
  } else {
    p.innerHTML = `You lose. 정답은 ${getRandom}입니다. Please try again!`;
  }
  const pTag = document.querySelector('p');
  pTag.remove();
  document.body.append(p);
}