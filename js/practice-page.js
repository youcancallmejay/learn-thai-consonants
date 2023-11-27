//add filter button to remove english 
//add filter button to remove image
//make formatting adjustments for mobile
//show count x/44 card
//add back button
//move replay audio button to card

let audio = new Audio();
let index = 0;

function startGame() {
  currentCard = selectLetter();
  // cardReset();
  printCard(currentCard);
  //quizCard = randomSelection(cards);
  playSound(currentCard);
  //userGuess();
}

function cardReset() {
  const cards = document.querySelectorAll(".the-card");
  cards.forEach((card) => {
    card.style.backgroundColor = "white";
    // Remove the image element
    const imgContainer = card.querySelector(".picAndEnglish img");
    imgContainer.remove();
  });
}

function printCard(currentCard) {
  const thaiObject = alphabetObject[currentCard];
  const firstLetter = thaiObject.thai.charAt(0);
  letterWord = thaiObject.thai;
  englishName = currentCard;

  const firstCard = document.querySelector("#first-card .the-front p");
  firstCard.innerHTML = firstLetter;
  const printWord = document.querySelector(
    "#first-card .the-front #alphabetWord"
  );
  printWord.innerHTML = letterWord;

  const printEnglishName = document.querySelector(
    "#first-card .picAndEnglish #englishName"
  );
  printEnglishName.innerHTML = englishName;

  imageName = thaiObject.image;

  let img = document.createElement("img");
  img.src = `images/consonant-pics/${imageName}`;
  // Set alt text for accessibility
  img.alt = `${imageName} Image`;

  let imgContainer = document.querySelector("#first-card .picAndEnglish");
  imgContainer.insertBefore(img, printEnglishName)
  //imgContainer.appendChild(img);

  imgContainer.classList.add("word-image");
}

function selectLetter() {
  const keys = Object.keys(alphabetObject);

  const selectedCardThai = keys[index];
  return selectedCardThai;
}

function playSound() {
  const thaiObject = alphabetObject[currentCard];
  soundSource = thaiObject.audio;
  audio.src = soundSource;
  audio.play();
}

function nextCard() {
  index = index + 1;
  if (index == 44){
    index = 0;
  }
  cardReset();
  startGame();
}

function previousCard(){
  if (index => 0 || index <= 43){
    //add previous button
  }
  index = index - 1; 
  cardReset(); 
  startGame(); 
}

const alphabetObject = {
  chicken: { thai: "ก ไก่", audio: "audio/กไก่.mp3", image: "chicken.jpg" },
  egg: { thai: "ข ไข่", audio: "audio/ขไข่.mp3", image: "egg.jpg" },
  bottle: { thai: "ฃ ขวด", audio: "audio/ฃขวด.mp3", image: "bottle.jpg" },
  "water buffalo": { thai: "ค ควาย", audio: "audio/คควาย.mp3", image: "water-buffalo.jpg"},
  person: { thai: "ฅ คน", audio: "audio/ฅคน.mp3", image: "person.jpg"},
  bell: { thai: "ฆ ระฆัง", audio: "audio/ฆระฆัง.mp3", image: "bell.jpg"},
  snake: { thai: "ง งู", audio: "audio/งงู.mp3", image: "snake.jpg"},
  plate: { thai: "จ จาน", audio: "audio/จจาน.mp3", image: "plate.jpg"},
  cymbals: { thai: "ฉ ฉิ่ง", audio: "audio/ฉฉิ่ง.mp3", image: "cymbals.jpg"},
  elephant: { thai: "ช ช้าง", audio: "audio/ชช้าง.mp3", image: "elephant.jpg"},
  chain: { thai: "ซ โซ่", audio: "audio/ซโซ่.mp3", image: "chain.jpg"},
  tree: { thai: "ฌ เฌอ", audio: "audio/ฌเฌอ.mp3", image: "tree.jpg"},
  woman: { thai: "ญ หญิง", audio: "audio/ญหญิง.mp3", image: "woman.jpg"},
  headdress: { thai: "ฎ ชฎา", audio: "audio/ฎชฎา.mp3", image: "headdress.png"},
  javelin: { thai: "ฏ ปฏัก", audio: "audio/ฏปฏัก.mp3", image: "javelin.jpg"},
  base: { thai: "ฐ ฐาน", audio: "audio/ฐฐาน.mp3", image: "base.jpg"},
  Mandodari: { thai: "ฑ มณโฑ", audio: "audio/ฑมณโฑ.mp3", image: "Mandodari.jpg"},
  elder: { thai: "ฒ ผู้เฒ่า", audio: "audio/ฒผู้เฒ่า.mp3", image: "elder.jpg"},
  "novice monk": { thai: "ณ เณร", audio: "audio/ณเณร.mp3", image: "novice-monk.jpg"},
  child: { thai: "ด เด็ก", audio: "audio/ดเด็ก.mp3", image: "child.jpg"},
  turtle: { thai: "ต เต่า", audio: "audio/ตเต่า.mp3", image: "turtle.jpg"},
  sack: { thai: "ถ ถุง", audio: "audio/ถถุง.mp3", image: "sack.jpg"},
  soldier: { thai: "ท ทหาร", audio: "audio/ททหาร.mp3", image: "soldier.jpg"},
  flag: { thai: "ธ ธง", audio: "audio/ธธง.mp3", image: "flag.jpg"},
  mouse: { thai: "น หนู", audio: "audio/นหนู.mp3", image: "mouse.jpg"},
  leaf: { thai: "บ ใบไม้", audio: "audio/บใบไม้.mp3", image: "leaf.jpg"},
  fish: { thai: "ป ปลา", audio: "audio/ปปลา.mp3", image: "fish.jpg"},
  bee: { thai: "ผ ผึ้ง", audio: "audio/ผผึ้ง.mp3", image: "bee.jpg"},
  lid: { thai: "ฝ ฝา", audio: "audio/ฝฝา.mp3", image: "lid.png"},
  tray: { thai: "พ พาน", audio: "audio/พพาน.mp3", image: "tray.jpg"},
  teeth: { thai: "ฟ ฟัน", audio: "audio.ฟฟัน.mp3", image: "teeth.jpg"}, //audio issue
  sailboat: { thai: "ภ สำเภา", audio: "audio/ภสำเภา.mp3", image: "sailboat.jpg"},
  horse: { thai: "ม ม้า", audio: "audio/มม้า.mp3", image: "horse.jpg"},
  giant: { thai: "ย ยักษ์", audio: "audio/ยยักษ์.mp3", image: "giant.png"},
  boat: { thai: "ร เรือ", audio: "audio/รเรือ.mp3", image: "boat.jpg"},
  monkey: { thai: "ล ลิง", audio: "audio/ลลิง.mp3", image: "monkey.jpg"},
  ring: { thai: "ว แหวน", audio: "audio/วแหวน.mp3", image: "ring.jpg"},
  pavilion: { thai: "ศ ศาลา", audio: "audio/ศศาลา.mp3", image: "pavilion.jpg"},
  hermit: { thai: "ษ ฤาษี", audio: "audio/ษฤาษี.mp3", image: "hermit.jpg"},
  tiger: { thai: "ส เสือ", audio: "audio/สเสือ.mp3", image: "tiger.jpg"},
  chest: { thai: "ห หีบ", audio: "audio/หหีบ.mp3", image: "chest.jpg"},
  kite: { thai: "ฬ จุฬา", audio: "audio/ฬจุฬา.mp3", image: "kite.jpg"},
  basin: { thai: "อ อ่าง", audio: "audio/ออ่าง.mp3", image: "basin.jpg"},
  owl: { thai: "ฮ นกฮูก", audio: "audio/ฮนกฮูก.mp3", image: "owl.jpg"}

   
};
