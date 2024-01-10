/** @format */

const content = document.getElementById("content");
const contentText = document.getElementById("content-text");

document.onscrollend = (e) => {
  console.log("end");
  contentText.innerHTML = "scrollend";
};

document.onscroll = (e) => {
  contentText.innerText = "scrolling";
};
