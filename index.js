let randomNo = Math.floor(Math.random() * (50 - 1) + 1);
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
    document.getElementById("hint").innerText="";
  } else if (
    (e.key === "Backspace" && number.length > 1) ||
    (e.key === "Backspace" && number.length == 1)
  ) {
    number = number.substring(0, number.length - 1);
    if (number.length == 1) {
      document.getElementById("leftTry").innerText = "";
    }
    document.getElementById("hint").innerText="";
  } else {
    if (parseInt(e.key) >= 1 && parseInt(e.key) <= 9) {
      number += e.key;
      if (number.length > 2) {
        document.getElementById("leftTry").innerText =
          "Only one and two digit Number is allowed";
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
clickme.addEventListener("click", () => {
  if (input.value == "") {
    document.getElementById("leftTry").innerText =
      "Please Enter a Number From 1 - 9";
  } else {
    clickTimes++;
    if (input.value == randomNo) {
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
      if(input.value>randomNo){
        document.getElementById("leftTry").innerText = `Try Again!!! ${i} Chance Left`;
        document.getElementById("hint").innerText="Hint:- Number is less than the entered number "
      }else{
        document.getElementById("leftTry").innerText = `Try Again!!! ${i} Chance Left`;
        document.getElementById("hint").innerText="Hint:- Number is greter than the entered number "
      }
      
    }

    if (clickTimes == 5 && input.value == randomNo) {
      document.getElementById(
        "leftTry"
      ).innerText = `Congratulation You Guessed it right!!!${"\n"}
            You have taken ${clickTimes} Guesses`;
            document.getElementById("hint").innerText="";
    } else if (clickTimes == 5) {
      document.getElementById("leftTry").innerText =
        "Game Over!!! You have used all your guesses";
        document.getElementById("hint").innerText="";
      i = 5;
      clickTimes = 0;
    }
  }
});
// gameOver();
// function blank(id){
//   document.getElementById(`${id}`).innerText=""
// }
// function hint(){
//   document.getElementById(`${id}`).innerText=""
// }
