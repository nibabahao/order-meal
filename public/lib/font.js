function htmlsize() {
  html = document.querySelector("html");
  if (html.offsetWidth > 780) {
    var rem,
      oW = 780;
  } else {
    var rem,
      oW = html.offsetWidth;
  }
  rem = oW >= 640 ? 100 : oW / 6.4;
  html.style.fontSize = rem + "px";

  var div = document.createElement("div");
  div.style.width = "6.4rem";
  html.appendChild(div);
  var divoW = div.offsetWidth;
  if (divoW != oW) {
    rem = (rem * oW) / divoW;
    console.log(html.offsetWidth);
    html.style.fontSize = rem + "px";
  }
  html.removeChild(div);
}
htmlsize();
window.addEventListener(
  "onorientationchange" in window ? "orientationchange" : "resize",
  orient
);
function orient() {
  setTimeout(htmlsize, 400);
}
