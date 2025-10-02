
function checkAnswer() {
    const input = document.getElementById("answer").value.trim();
    const correctAnswers = ["あいあいがさ", "相合傘", "相合い傘"];
    const result = document.getElementById("result");

    if (correctAnswers.includes(input)) {
        result.textContent = "✅ 正解！";
        result.className = "correct";
    } else {
        result.textContent = "❌ 不正解...";
        result.className = "wrong";
    }
}

/*授業用
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

document.querySelector("html").addEventListener("click", () => {
  alert("痛っ! つつかないで!");
});
*/

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/nazotoki.png") {
    myImage.setAttribute("src", "images/nazotoki2.png");
  } else {
    myImage.setAttribute("src", "images/nazotoki.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("あなたの名前を入力してください。");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `${myName} さん、なぞときはたのしいよ。`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `なぞときはたのしいよ。${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};