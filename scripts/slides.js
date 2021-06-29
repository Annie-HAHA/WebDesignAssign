// time to sleep in milliseconds
const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

// carousel slide shows
const showSlides = (slideIndex) => {
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");

  // fade out previous picture
  let prevSlideIndex = slideIndex - 1;
  if (prevSlideIndex < 0) prevSlideIndex = slides.length - 1;
  slides[prevSlideIndex].className += " fade-out";

  // wait for 800 milliseconds before proceeding
  sleep(800).then(() => {
    // reset all classes
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      slides[i].style.opacity = 0;
      slides[i].className = slides[i].className.replace("fade-out", "");
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
    }

    slides[slideIndex].style.display = "";
    slides[slideIndex].style.opacity = 1;
    dots[slideIndex].className += " active";

    slideIndex++;
    if (slideIndex > slides.length - 1) {
      slideIndex = 0;
    }

    // call showSlides again
    setTimeout(showSlides, 3000, slideIndex);
  });
};

// filter filters cake by text
const filter = (text, clickNeeded = false) => {
  // set text to no filter if all is selected
  if (text === "all") text = "";
  // get all card elements
  let cards = document.getElementsByClassName("column");
  for (let i = 0; i < cards.length; i++) {
    // hide cake by removing "show" class
    let classes = cards[i].className.split(" ");
    while (classes.indexOf("show") > -1) {
      classes.splice(classes.indexOf("show"), 1);
    }
    // add show cake by filter
    if (text === "" || classes.indexOf(text) > -1) classes.push("show");
    // assign classes back to the card
    cards[i].className = classes.join(" ");
  }
  if (clickNeeded) {
    if (text === "") text = "all";
    let elem = document.getElementById("btn-" + text);
    elem.click();
  }
};

const addFilterButtonListener = () => {
  // highlight button if clicked
  let btnContainer = document.getElementById("btnContainer");
  let btns = btnContainer.getElementsByClassName("btn");
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      let buttons = document.getElementsByClassName("btn");
      for (let j = 0; j < buttons.length; j++) {
        buttons[j].className = buttons[j].className.replace("active", "");
      }
      this.className += " active";
    });
  }
};
