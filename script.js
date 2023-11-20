//click button to start game
//show three cards with thai letters
//play sound clip of random thai letter
//choose letter based on sound
//if correct, green
//if wrong, red
//reset cards
//play now sound clip of random thai letter

let audio = new Audio();

let cards = [];

function startGame() {
  pickThree();
  cardReset();
  printCards();
  quizCard = randomSelection(cards);
  playSound(quizCard);
  userGuess();
}

function cardReset() {
  const cards = document.querySelectorAll(".the-card");
  cards.forEach((card) => {
    card.classList.remove("flipped");
    card.style.backgroundColor = "white";
  });
}

function userGuess() {
  const cards = document.querySelectorAll(".the-card");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      let cardText = card.querySelector(".the-front p").innerText.trim();
      if (cardText == quizCard) {
        card.style.backgroundColor = "green";
        playSound(quizCard);
        setTimeout(() => {
          startGame();
        }, 3000);
      } else if (card.classList.contains("flipped")) {
        return;
      } else {
        card.classList.toggle("flipped");
        card.style.backgroundColor = "red";
        flippedCardText = card.querySelector(".the-back p");
        flippedCardText.innerHTML = cardText;
        let listenNowBtn = card.querySelector(".the-back button");
        listenNowBtn.addEventListener("click", () => {
          playSound(cardText);
        });
      }
    });
  });
}

function printCards() {
  let card1 = cards[0];
  let card2 = cards[1];
  let card3 = cards[2];
  const firstCard = document.querySelector("#first-card .the-front p");
  firstCard.innerHTML = card1;
  const secondCard = document.querySelector("#second-card .the-front p");
  secondCard.innerHTML = card2;
  const thirdCard = document.querySelector("#third-card .the-front p");
  thirdCard.innerHTML = card3;
}

function randomSelection(cards) {
  index = Math.floor(Math.random() * cards.length);
  letter = cards[index];
  return letter;
}

function pickThree() {
  let card = "";
  for (i = 0; i < 3; i++) {
    do {
      card = pickRandom();
    } while (cards.includes(card));

    cards[i] = card;
  }
}

function playSound(quizCard) {
  soundSource = audioSamples[quizCard];
  audio.src = soundSource;
  audio.play();
}

const audioSamples = {
  กไก่: "audio/กไก่.mp3",
  ฅคน: "audio/ฅคน.mp3",
  ฉฉิ่ง: "audio/ฉฉิ่ง.mp3",
  ญหญิง: "audio/ญหญิง.mp3",
  ฑมณโฑ: "audio/ฑมณโฑ.mp3",
  หหีบ: "audio/หหีบ.mp3",
  วแหวน: "audio/วแหวน.mp3",
  มม้า: "audio/มม้า.mp3",
  ฝฝา: "audio/ฝฝา.mp3",
  นหนู: "audio/นหนู.mp3",
  ตเต่า: "audio/ตเต่า.mp3",
};

function pickRandom() {
  const keys = Object.keys(audioSamples);
  index = Math.floor(Math.random() * keys.length);
  return keys[index];
}

function playAudio() {
  playSound(quizCard);
}
