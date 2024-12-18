// Get Windows width
let intViewportWidth = window.innerWidth;

// (W3 Schools)
// Get the modal
// var modalOne = document.getElementById("projectModalOne");

// // Get the button that opens the modal
// var openOne = document.getElementById("openProjectOne");

// // Get the element that closes the modal
// var closeOne = document.getElementById('closeProjectOne');

// // When the user clicks the button, open the modal 
// openOne.onclick = function() {
//   if(intViewportWidth < 800){
//     window.open("./projects/firstWebsite/home.html");
//   }else{
//     modalOne.style.display = "block";
//   }
//   openOne.childNodes[0].classList.remove('pulse');
// }

// // When the user clicks on minimize button, close the modal
// closeOne.onclick = function() {
//   modalOne.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalOne) {
    modalOne.style.display = 'none';
  } else if (event.target == modalTwo) {
    modalTwo.style.display = 'none';
  } else if (event.target == modalThree) {
    modalThree.style.display = 'none';
  } else if (event.target == modalFour) {
    modalFour.style.display = 'none';
  }
};

// Project 2
var modalTwo = document.getElementById("projectModalTwo");
var openTwo = document.getElementById("openProjectTwo");
var closeTwo = document.getElementById('closeProjectTwo');

openTwo.onclick = function() {
  if(intViewportWidth < 800){
    window.open("./projects/webDesignMidterm/Homepage/Homepage.html");
  }else{
    modalTwo.style.display = "block";
  }
  openTwo.childNodes[0].classList.remove('pulse');
}

closeTwo.onclick = function() {
  modalTwo.style.display = "none";
}

// Project 3
var modalThree = document.getElementById("projectModalThree");
var openThree = document.getElementById("openProjectThree");
var closeThree = document.getElementById('closeProjectThree');

openThree.onclick = function() {
  if(intViewportWidth < 800){
    window.open("./projects/snapDataVisualizer/index.html");
  }else{
    modalThree.style.display = "block";
  }
  openThree.childNodes[0].classList.remove('pulse');
}

closeThree.onclick = function() {
  modalThree.style.display = "none";
}

// Project 4
var modalFour = document.getElementById("projectModalFour");
var openFour = document.getElementById("openProjectFour");
var closeFour = document.getElementById('closeProjectFour');

openFour.onclick = function() {
  modalFour.style.display = "block";
  openFour.childNodes[0].classList.remove('pulse');
}

closeFour.onclick = function() {
  modalFour.style.display = "none";
}

// Slideshow (W3 Schools)
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  // var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  // for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex-1].style.display = "block";  
  // dots[slideIndex-1].className += " active";
}

// Project 5
var modalFive = document.getElementById("projectModalFive");
var openFive = document.getElementById("openProjectFive");
var closeFive = document.getElementById('closeProjectFive');

openFive.onclick = function() {
  if(intViewportWidth < 800){
    window.open("https://www.figma.com/file/RTzAJXSHVBMZKDvvyksOEP/Personal-Portfolio-Mockup?node-id=0%3A1");
  }else{
    modalFive.style.display = "block";
  }
  openFive.childNodes[0].classList.remove('pulse');
}

closeFive.onclick = function() {
  modalFive.style.display = "none";
}