var a = Math.floor(Math.random() * 6) + 1;
var b = Math.floor(Math.random() * 6) + 1;

// Set heading
if (a > b) {
  document.querySelector("h1").innerHTML = "🚩 Player1 WINS";
} else if (a < b) {
  document.querySelector("h1").innerHTML = "Player2 WINS 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!!!!";
}

// Set dice images automatically
document.querySelector(".img1").setAttribute("src", "./images/dice" + a + ".png");
document.querySelector(".img2").setAttribute("src", "./images/dice" + b + ".png");
