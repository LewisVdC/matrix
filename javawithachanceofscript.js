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
window.setInterval(() => {
  if (fileuploaded == 1) {
    document.getElementById("uploadedimage").style.transform =
      "matrix3d(" +
      Math.random() +
      "," +
      Math.random() +
      "," +
      Math.random() +
      "," +
      Math.random() +
      "," +
      Math.random() +
      "," +
      Math.random() +
      "," +
      Math.random() +
      "," +
      Math.random() +
      "," +
      Math.random() +
      "," +
      Math.random() +
      "," +
      Math.random() +
      "," +
      Math.random() +
      "," +
      Math.random() +
      "," +
      Math.random() +
      "," +
      Math.random() +
      "," +
      Math.random() +
      ")";
  }
}, 1000 / 60);
