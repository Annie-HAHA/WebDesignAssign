const initStarRating = () => {
  let elems = document.getElementsByClassName("fa-star");

  for (let i = 0; i < elems.length; i++) {
    elems[i].addEventListener("click", (e) => {
      // make all stars dull
      for (let j = 0; j < elems.length; j++) {
        elems[j].className = elems[j].className.replace(
          "star-light",
          "star-dull"
        );
      }

      // make all stars chosen light
      for (let k = 0; k <= i; k++) {
        elems[k].className = elems[k].className.replace(
          "star-dull",
          "star-light"
        );
      }
    });
  }
};
