const playerChoicesSection = document.getElementsByClassName(
  "player-choices"
)[0];
const computerChoicesSection = document.getElementsByClassName(
  "computer-choices"
)[0];
const computerChoiceButton = document.getElementById("computer-choice");

const result = document.getElementsByClassName("result")[0];
const resultImg = document.getElementById("result-img");
const playAgainSection = document.getElementsByClassName("play-again")[0];

const player = document.getElementById("player");
const computer = document.getElementById("computer");

computerChoiceButton.style.display = "none";

const choices = ["rock", "paper", "Scissors"];

for (let i = 0; i < choices.length; i++) {
  const playerChoice = document.createElement("button");
  playerChoice.id = choices[i];
  playerChoice.textContent = choices[i];
  playerChoicesSection.appendChild(playerChoice);
  playAgainSection.addEventListener("click", function () {
    playerChoice.style.backgroundImage = "";
    computerChoiceButton.style.display = "none";
    result.textContent = "";
    resultImg.src = "";
    playerChoicesSection.animate([
      // keyframes
      { transform: "translateY(0px)" },
      { transform: "translateY(0px)" },
    ]);
    computerChoicesSection.animate([
      // keyframes
      { transform: "translateY(0px)" },
      { transform: "translateY(0px)" },
    ]);
  });

  playerChoice.addEventListener("click", function () {
    computerChoiceButton.style.display = "block";
    const compChoiceVal = computerChoice(choices);
    computerChoiceButton.textContent = compChoiceVal;
    switch (playerChoice.textContent) {
      case "rock":
        playerChoice.style.backgroundImage =
          "url('https://i.ibb.co/0ZjZ1rt/player-rock.png')";
        break;
      case "paper":
        playerChoice.style.backgroundImage =
          "url('https://i.ibb.co/Yykw57c/player-paper.png')";
        break;
      default:
        playerChoice.style.backgroundImage =
          "url('https://i.ibb.co/2h9rpCL/player-scissors.png')";
    }
    switch (compChoiceVal) {
      case "rock":
        console.log(computerChoiceButton.textContent);
        computerChoiceButton.style.backgroundImage =
          "url('https://i.ibb.co/YjXLkS0/computer-rock.png')";
        break;
      case "paper":
        console.log(computerChoiceButton.textContent);
        computerChoiceButton.style.backgroundImage =
          "url('https://i.ibb.co/JdLCwLj/computer-paper.png')";
        break;
      default:
        console.log(computerChoiceButton.textContent);
        computerChoiceButton.style.backgroundImage =
          "url('https://i.ibb.co/JnCv2yC/computer-scissors.png')";
    }
    playerChoice.style.backgroundRepeat = "no-repeat";
    playerChoice.style.backgroundPosition = "center center";
    computerChoiceButton.style.backgroundRepeat = "no-repeat";
    computerChoiceButton.style.backgroundPosition = "center center";
    if (playerChoice.textContent == "rock" && compChoiceVal == "Scissors") {
      result.textContent = "You Winn";
    } else if (
      playerChoice.textContent == "Scissors" &&
      compChoiceVal == "paper"
    ) {
      result.textContent = "You Winn";
    } else if (playerChoice.textContent == "paper" && compChoiceVal == "rock") {
      result.textContent = "You Winn";
    } else if (playerChoice.textContent == compChoiceVal) {
      result.textContent = "try again";
    } else {
      result.textContent = "HAHAHAHAH LOSER";
    }
    if (result.textContent === "You Winn") {
      resultImg.src = "https://i.ibb.co/Q6XGYbm/winner.jpg";
      playerChoicesSection.animate(
        [
          // keyframes
          { transform: "translateY(0px)" },
          { transform: "translateY(-300px)" },
        ],
        {
          // timing options
          duration: 1000,
          iterations: 1,
        }
      );
      // playerChoicesSection.style.transform = "rotate(7deg) scaleX(1.2)";
      // computerChoicesSection.style.transform = "rotate(0deg) scaleX(.8)";
    } else if (result.textContent === "try again") {
      resultImg.src = "";
      computerChoicesSection.animate([
        // keyframes
        { transform: "translateY(0px)" },
        { transform: "translateY(0px)" },
      ]);
    } else {
      resultImg.src = "https://i.ibb.co/72kjDY7/loser.jpg";
      computerChoicesSection.animate(
        [
          // keyframes
          { transform: "translateY(0px)" },
          { transform: "translateY(-300px)" },
        ],
        {
          // timing options
          duration: 1000,
          iterations: 1,
        }
      );
      // playerChoicesSection.style.transform = "rotate(0deg) scaleX(.8)";
      // computerChoicesSection.style.transform = "rotate(-7deg) scaleX(1.2)";
    }
  });
}

function whoIsTheWinner(playerChoice = "", computerChoice = "") {
  console.log("The Winner");
}
function computerChoice(arr) {
  const randomChoice = Math.floor(Math.random() * arr.length);
  return arr[randomChoice];
}
