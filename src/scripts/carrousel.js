let pos = 1;
var titles = ["A Preliminary Evaluation of the SRE and SBPG Components of the IoT-HarPSecA Framework", "Signal Processing: Image Communication", "Audiovisual quality of live music streaming over mobile networks using MPEG-DASH"];

function carouselFunction() {
  document.getElementById("carousel-image").style.backgroundImage =
    "url(../img/" + pos + ".png)";
  document
    .getElementById("text-carousel-block")
    .getElementsByTagName("h1")[0].innerHTML = titles[pos-1];
  if (pos == 3) {
    pos = 0;
  }
  pos++;
  setTimeout(carouselFunction, 3000);
}

document.getElementById("carousel-image").onclick = function () {
  location.href = "./research.html";
};

carouselFunction();