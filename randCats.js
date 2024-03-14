const catNumb = 6;
let catLoaded = Math.round(Math.random() * (catNumb -1)) + 1;

if (catLoaded == 1){
    catLoaded = "catsfolder/byebyecat.JPG";
}
else if (catLoaded == 2){
    catLoaded = "catsfolder/codecat (2).JPG";
}
else if (catLoaded == 3){
    catLoaded = "catsfolder/codecatend.JPG";
}
else if (catLoaded == 4){
    catLoaded = "catsfolder/codecaticon.JPG";
}
else if (catLoaded == 5){
    catLoaded = "catsfolder/codecatx.JPG";
}
else if (catLoaded == 6){
    catLoaded = "catsfolder/glitchcat.JPG";
}

const img = document.createElement("img");
document.body.appendChild(img);
img.src = catLoaded;