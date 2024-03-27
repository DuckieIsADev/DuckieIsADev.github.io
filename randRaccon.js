const racNumb = 5;
const racList = [null,"racoon pics/iCloud Photos/IMG_6504.JPG","racoon pics/iCloud Photos/IMG_6505.JPG","","racoon pics/iCloud Photos/IMG_6506.JPG","racoon pics/iCloud Photos/IMG_6507.JPG","racoon pics/iCloud Photos/IMG_6508.JPG"]
let racLoaded = Math.round(Math.random() * (racNumb -1)) + 1;

racLoaded = racList[racLoaded]

const img = document.createElement("img");
document.body.appendChild(img);
img.src = catLoaded;