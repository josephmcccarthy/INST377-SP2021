let width = 130;
let count = 3;

let list = carousel.querySelector("ul");
let listElems = carousel.querySelectorAll("li");

let position = 0;

carousel.querySelector(".back").onclick = function () {
  position += width * count;
  position = Math.min(position, 0);
  list.style.marginLeft = position + "px";
};

carousel.querySelector(".next").onclick = function () {
  position -= width * count;
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + "px";
};