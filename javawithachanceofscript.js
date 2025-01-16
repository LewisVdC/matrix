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
var image = 0;
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
      image = document.getElementById("uploadedimage");
      image.style.width = "50vh";
      image.style.height = "50vh";
    };
    reader.readAsDataURL(file);
  }
}

document.getElementById("value1").innerHTML = 1;
document.getElementById("value2").innerHTML = 0;
document.getElementById("value3").innerHTML = 0;
document.getElementById("value4").innerHTML = 0;
document.getElementById("value5").innerHTML = 0;
document.getElementById("value6").innerHTML = 1;
document.getElementById("value7").innerHTML = 0;
document.getElementById("value8").innerHTML = 0;
document.getElementById("value9").innerHTML = 0;
document.getElementById("value10").innerHTML = 0;
document.getElementById("value11").innerHTML = 1;
document.getElementById("value12").innerHTML = 0;
document.getElementById("value13").innerHTML = 0;
document.getElementById("value14").innerHTML = 0;
document.getElementById("value15").innerHTML = 0;
document.getElementById("value16").innerHTML = 1;
var slider1 = 0;
var slider2 = 0;
var slider3 = 0;
var slider4 = 0;
var slider5 = 0;
var slider6 = 0;
var slider7 = 0;
var slider8 = 0;
var slider9 = 0;
var slider10 = 0;
var slider11 = 0;
var slider12 = 0;
var slider13 = 0;
var slider14 = 0;
var slider15 = 0;
var slider16 = 0;
const sliders = document.querySelectorAll(".slider");

function updateSliders() {
  sliders.forEach((slider, index) => {
    const value = parseFloat(slider.value); // Get the slider value as a float
    window[`slider${index + 1}`] = value; // Update the corresponding global variable dynamically
    const valueSpan = document.getElementById(`value${index + 1}`);
    if (valueSpan) valueSpan.textContent = value; // Update the corresponding span element
  });
}

document.querySelectorAll(".slider").forEach((slider) => {
  slider.addEventListener("input", updateSliders);
});
var randomizer = 0;
window.setInterval(() => {
  if (fileuploaded == 1) {
    //randomizer = Math.round(Math.random() * 16);
    randomizer = 0;
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
    //gaming
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //gaming
    updateSliders();
    document.getElementById("uploadedimage").style.transform =
      "matrix3d(" +
      slider1 +
      "," +
      slider2 +
      "," +
      slider3 +
      "," +
      slider4 +
      "," +
      slider5 +
      "," +
      slider6 +
      "," +
      slider7 +
      "," +
      slider8 +
      "," +
      slider9 +
      "," +
      slider10 +
      "," +
      slider11 +
      "," +
      slider12 +
      "," +
      slider13 +
      "," +
      slider14 +
      "," +
      slider15 +
      "," +
      slider16 +
      ")";
    //gaming
    // document.getElementById("uploadedimage").style.transform ="matrix3d(" +number1 +"," +number2 +"," +number3 +"," +number4 +"," +number5 +"," +number6 +"," +number7 +"," +number8 +"," +number9 +"," +number10 +"," +number11 +"," +number12 +"," +number13 +"," +number14 +"," +number15 +"," +number16 +")";
    //"matrix3d(" +Math.random() +"," +Math.random() +"," +Math.random() +"," +Math.random() +"," +Math.random() +"," +Math.random() +"," +Math.random() +"," +Math.random() +"," +Math.random() +"," +Math.random() +"," +Math.random() +"," +Math.random() +"," +Math.random() +"," +Math.random() +"," +Math.random() +"," +Math.random() +")";
  }
}, 1000 / 10);
