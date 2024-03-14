const catNumb = 6;
const catList = [null,"catsfolder/byebyecat.JPG","catsfolder/codecat (2).JPG","catsfolder/codecatend.JPG","catsfolder/codecaticon.JPG","catsfolder/codecatx.JPG","catsfolder/glitchcat.JPG"]
let catLoaded = Math.round(Math.random() * (catNumb -1)) + 1;

<<<<<<< HEAD
if (catLoaded == 1){
    catLoaded = "catsfolder/byebyecat.JPG";
}
else if (catLoaded == 2){
    catLoaded = "catsfolder/codecat (2).JPG";
}
else if (catLoaded == 3){
    catLoaded = "catsfolder/byebyecat.JPG";
}
else if (catLoaded == 4){
    catLoaded = "catsfolder/codecatx.JPG";
}
else if (catLoaded == 5){
    catLoaded = "catsfolder/codecatx.JPG";
}
else if (catLoaded == 6){
    catLoaded = "catsfolder/glitchcat.JPG";
}
else if(catLoaded == 7){
    catLoaded = "catsfolder/codecat (2).JPG";
}
=======
catLoaded = catList[catLoaded]
>>>>>>> 8574d194b5a183c31ef6bca5e8be24b920768e30

const img = document.createElement("img");
document.body.appendChild(img);
img.src = catLoaded;