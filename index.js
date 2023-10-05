let randomNo = Math.floor(Math.random() * (10 - 1) + 1);
let input = document.getElementById("guessNo");
let clickme = document.querySelector("button");
let video = document.getElementById("vid");
video.pause();
let audio = document.getElementById("aud");
let number = "";

// --------------- Encountering Key in the Input Box----------------------------
input.addEventListener("keydown", (e) => {
  if (e.key === "Backspace" && number.length == 0) {
    document.getElementById("leftTry").innerText = "Enter a Number From 1 - 9";
  } else if (
    (e.key === "Backspace" && number.length > 1) ||
    (e.key === "Backspace" && number.length == 1)
  ) {
    number = number.substring(0, number.length - 1);
    if (number.length == 1) {
      document.getElementById("leftTry").innerText = "";
    }
  } else {
    if (parseInt(e.keyCode) >= 97 && parseInt(e.keyCode) <= 105) {
      number += e.key;
      if (number.length > 1) {
        document.getElementById("leftTry").innerText =
          "One digit Number is allowed";
      } else {
        document.getElementById("leftTry").innerText = "";
      }
    }
  }
  console.log(e.key);
});

//--------------------------------- When Button is Clicked--------------------------------
let clickTimes = 0;
let i = 5;
clickme.addEventListener("click", (e) => {
  if (number == "") {
    document.getElementById("leftTry").innerText =
      "Please Enter a Number From 1 - 9";
  } else {
    clickTimes++;
    if (number == randomNo) {
      document.getElementById("cover").className =
        "animate__animated animate__hinge";
      audio.play();
      video.play();
      document.getElementById("guessedNum").innerText = randomNo;
      document.getElementById(
        "leftTry"
      ).innerText = `Congratulation You Guessed it right!!!${"\n"}
            You have taken ${clickTimes} Guesses`;
            i = 5;
            clickTimes = 0;
    } else {
      i--;
      document.getElementById(
        "leftTry"
      ).innerText = `Try Again!!! ${i} Chance Left`;
    }

    if (clickTimes == 5 && number == randomNo) {
      document.getElementById(
        "leftTry"
      ).innerText = `Congratulation You Guessed it right!!!${"\n"}
            You have taken ${clickTimes} Guesses`;
    } else if (clickTimes == 5) {
      document.getElementById("leftTry").innerText =
        "Game Over!!! You have used all your guesses";
      i = 5;
      clickTimes = 0;
    }
  }
});

