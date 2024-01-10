/** @format */
const box = document.querySelector(".box");

const timeline = new ScrollTimeline({
  source: document.documentElement,
  axis: "block",
});

box.animate(
  {
    width: ["0", "100%"],
  },
  {
    timeline,
  }
);
