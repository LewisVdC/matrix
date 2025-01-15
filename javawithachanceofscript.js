var number1 = 0;
var number2 = 0;
var number3 = 0;
var number4 = 0;
var number5 = 0;
var number6 = 0;
var number7 = 0;
var number8 = 0;
var number9 = 0;
var number10 = 0;
var number11 = 0;
var number12 = 0;
var number13 = 0;
var number14 = 0;
var number15 = 0;
var number16 = 0;

var fileuploaded = 0;
function previewimage(event) {
  fileuploaded = 1;
  const file = event.target.files[0];
  console.log(file); // Log the file to check if it's being selected
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const imgElement = document.getElementById("uploadedimage");
      imgElement.src = e.target.result;
      imgElement.style.display = "block"; // Show the image
    };
    reader.readAsDataURL(file);
  }
}

var randomizer = 0;
window.setInterval(() => {
  if (fileuploaded == 1) {
    randomizer = Math.round(Math.random() * 16);
    if (randomizer == 1) {
      number1 = Math.random();
    }
    if (randomizer == 2) {
      number2 = Math.random();
    }
    if (randomizer == 3) {
      number3 = Math.random();
    }
    if (randomizer == 4) {
      number4 = Math.random();
    }
    if (randomizer == 5) {
      number5 = Math.random();
    }
    if (randomizer == 6) {
      number6 = Math.random();
    }
    if (randomizer == 7) {
      number7 = Math.random();
    }
    if (randomizer == 8) {
      number8 = Math.random();
    }
    if (randomizer == 9) {
      number9 = Math.random();
    }
    if (randomizer == 10) {
      number10 = Math.random();
    }
    if (randomizer == 11) {
      number11 = Math.random();
    }
    if (randomizer == 12) {
      number12 = Math.random();
    }
    if (randomizer == 13) {
      number13 = Math.random();
    }
    if (randomizer == 14) {
      number14 = Math.random();
    }
    if (randomizer == 15) {
      number15 = Math.random();
    }
    if (randomizer == 16) {
      number16 = Math.random();
    }
    document.getElementById("uploadedimage").style.transform =
      "matrix3d(" +
      number1 +
      "," +
      number2 +
      "," +
      number3 +
      "," +
      number4 +
      "," +
      number5 +
      "," +
      number6 +
      "," +
      number7 +
      "," +
      number8 +
      "," +
      number9 +
      "," +
      number10 +
      "," +
      number11 +
      "," +
      number12 +
      "," +
      number13 +
      "," +
      number14 +
      "," +
      number15 +
      "," +
      number16 +
      ")";
    //"matrix3d(" +Math.random() +"," +Math.random() +"," +Math.random() +"," +Math.random() +"," +Math.random() +"," +Math.random() +"," +Math.random() +"," +Math.random() +"," +Math.random() +"," +Math.random() +"," +Math.random() +"," +Math.random() +"," +Math.random() +"," +Math.random() +"," +Math.random() +"," +Math.random() +")";
  }
}, 1000 / 10);
