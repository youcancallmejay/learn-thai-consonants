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
  soundSource = alphabetObject[quizCard];
  audio.src = soundSource;
  audio.play();
}

const alphabetObject = {
  "ก ไก่": "audio/กไก่.mp3",
  "ฅ คน": "audio/ฅคน.mp3",
  "ฉ ฉิ่ง": "audio/ฉฉิ่ง.mp3",
  "ญ หญิง": "audio/ญหญิง.mp3",
  "ฑ มณโฑ": "audio/ฑมณโฑ.mp3",
  "ห หีบ": "audio/หหีบ.mp3",
  "ว แหวน": "audio/วแหวน.mp3",
  "ม ม้า": "audio/มม้า.mp3",
  "ฝ ฝา": "audio/ฝฝา.mp3",
  "น หนู": "audio/นหนู.mp3",
  "ต เต่า": "audio/ตเต่า.mp3",
  "ข ไข่": "audio/ขไข่.mp3",
  "ฆ ระฆัง": "audio/ฆระฆัง.mp3",
  "ช ช้าง": "audio/ชช้าง.mp3",
  "ฎ ชฎา": "audio/ฎชฎา.mp3",
  "ฒ ผู้เฒ่า": "audio/ฒผู้เฒ่า.mp3",
  "บ ใบไม้": "audio/บใบไม้.mp3",
  "พ พาน": "audio/พพาน.mp3",
  "ย ยักษ์": "audio/ยยักษ์.mp3",
  "ศ ศาลา": "audio/ศศาลา.mp3",
  "ฬ จุฬา": "audio/ฬจุฬา.mp3",
  "ถ ถุง": "audio/ถถุง.mp3",
  "ฃ ขวด": "audio/ฃขวด.mp3",
  "ง งู": "audio/งงู.mp3",
  "ซ โซ่": "audio/ซโซ่.mp3",
  "ฏ ปฏัก": "audio/ฏปฏัก.mp3",
  "ณ เณร": "audio/ณเณร.mp3",
  "ท ทหาร": "audio/ททหาร.mp3",
  "ป ปลา": "audio/ปปลา.mp3",
  "ฟ ฟัน": "audio.ฟฟัน.mp3",
  "ร เรือ": "audio/รเรือ.mp3",
  "ษ ฤาษี": "audio/ษฤาษี.mp3",
  "อ อ่าง": "audio/ออ่าง.mp3",
  "ค ควาย": "audio/คควาย.mp3",
  "จ จาน": "audio/จจาน.mp3",
  "ฌ เฌอ": "audio/ฌเฌอ.mp3",
  "ฐ ฐาน": "audio/ฐฐาน.mp3",
  "ด เด็ก": "audio/ดเด็ก.mp3",
  "ธ ธง": "audio/ธธง.mp3",
  "ผ ผึ้ง": "audio/ผผึ้ง.mp3",
  "ภ สำเภา": "audio/ภสำเภา.mp3",
  "ล ลิง": "audio/ลลิง.mp3",
  "ส เสือ": "audio/สเสือ.mp3",
  "ฮ นกฮูก": "audio/ฮนกฮูก.mp3",
};

function pickRandom() {
  const keys = Object.keys(alphabetObject);
  index = Math.floor(Math.random() * keys.length);
  return keys[index];
}

function playAudio() {
  playSound(quizCard);
}
