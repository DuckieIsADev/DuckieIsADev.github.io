const catNumb = 6;
const catList = [null,"catsfolder/byebyecat.JPG","catsfolder/codecat (2).JPG","catsfolder/codecatend.JPG","catsfolder/codecaticon.JPG","catsfolder/codecatx.JPG","catsfolder/glitchcat.JPG"]
let catLoaded = Math.round(Math.random() * (catNumb -1)) + 1;

catLoaded = catList[catLoaded]

const img = document.createElement("img");
document.body.appendChild(img);
img.src = catLoaded;