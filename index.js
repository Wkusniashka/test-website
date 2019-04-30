let slideShow;
let slideIndex = 0;
const footer = document.getElementsByClassName("footer")[0];

document.addEventListener("keydown", function(event) { keyDownHandler(event) });

function keyDownHandler(event) {
  switch (event.keyCode) {
    case 39:
      nextSlide();
      event.preventDefault();
      break;
    case 37:
      prevSlide();
      event.preventDefault();
      break;
  }
}

function changeSlide(index) {
  let slides = document.getElementsByClassName("slideItem");
  let img_texts = document.getElementsByClassName("img-desc");
  if (index > slides.length - 1) {slideIndex = 0}
  if (index < 0) {slideIndex = slides.length - 1}
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    img_texts[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
  img_texts[slideIndex].style.display = "inline-block";
}

function prevSlide() {
  slideIndex--;
  changeSlide(slideIndex);
}

function nextSlide() {
  slideIndex++;
  changeSlide(slideIndex);
}

function autoNextSlide() {
  nextSlide();
}

function stopSlideShow() {
  clearTimeout(slideShow);
}

function startSlideShow() {
  stopSlideShow(slideShow);
  slideShow = setInterval(autoNextSlide, 5000);
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    footer.style.display = "block";
  } else {
   footer.style.display = "none";
  }
}

window.onscroll = function() {
   return scrollFunction();
}

changeSlide();

startSlideShow();


