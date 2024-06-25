const catNumb = 4;
const catList = [null,"catsfolder/New Cat/IMG_0911.PNG","catsfolder/New Cat/IMG_0912.PNG","catsfolder/New Cat/IMG_0913.PNG","catsfolder/New Cat/IMG_0914.PNG"]
let catLoaded = Math.round(Math.random() * (catNumb -1)) + 1;

catLoaded = catList[catLoaded]

const img = document.createElement("img");
document.body.appendChild(img);
img.src = catLoaded;