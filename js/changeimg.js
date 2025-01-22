var images = [
  "images/home_brazil.jpeg",
  "images/home_sky.jpg",
  "images/home_spain.jpeg",
  "images/home_everest.jpeg",
  "images/home_paris.jpeg",
  "images/home_itely.jpeg",
];
var x = 0; // Start with the first image

function displayNextImage() {
  x = (x + 1) % images.length; // Increment and loop around
  document.getElementById("img").src = images[x];
  console.log("Current image: ", images[x]); // Log for debugging
}

function startTimer() {
  setInterval(displayNextImage, 3000); // Change image every 3 seconds
}
