const carrosel = document.querySelector(".imagens-container");

let larguraOriginal = carrosel.scrollWidth;

carrosel.innerHTML += carrosel.innerHTML;
carrosel.innerHTML += carrosel.innerHTML;

let pos = 0;

function slider() {
  pos += 1;

  if (pos >= larguraOriginal) {
    carrosel.style.transition = "none";
    pos = 0;
    carrosel.style.transform = `translateX(0px)`;

    setTimeout(() => {
      carrosel.style.transition = "transform 0.016s linear";
    }, 10);
  } else {
    carrosel.style.transition = "transform 0.016s linear";
    carrosel.style.transform = `translateX(-${pos}px)`;
  }
}

setInterval(slider, 16);

window.addEventListener("resize", () => {
  larguraOriginal = carrosel.scrollWidth / 4;
  pos = 0;
  carrosel.style.transition = "none";
  carrosel.style.transform = `translateX(0px)`;
});
