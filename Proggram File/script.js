let isOn = false;

const bulb = document.getElementById("bulbSvg");
const onSound = document.getElementById("onSound");
const offSound = document.getElementById("offSound");
const switchBtn = document.getElementById("switchBtn");

switchBtn.addEventListener("click", toggleLight);

function toggleLight() {
  isOn = !isOn;
  bulb.classList.toggle("on", isOn);
  isOn ? onSound.play() : offSound.play();
}

/* Random realistic blinking */
setInterval(() => {
  if (isOn && Math.random() > 0.9) {
    bulb.classList.remove("on");
    setTimeout(() => bulb.classList.add("on"), 70);
  }
}, 500);