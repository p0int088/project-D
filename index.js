const btn = document.getElementById("1");
const audio = new Audio("koroki--luchshiy-zvuk-na-donat.mp3");

btn.addEventListener("mouseenter", () => {
  btn.innerText = "ХААХААХААХАХААХАХ СОСАЛ?! ДА. ЧУХАН";

  audio.currentTime = 0;

  audio.play();
});

btn.addEventListener("mouseleave", () => {
  audio.pause();
  btn.innerText = "КНОПКА";
});
