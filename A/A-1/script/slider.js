const sliderEl = document.querySelector("#slider ul");
const sliderListEls = sliderEl.querySelectorAll("li");
const sliderCount = sliderListEls.length;
let sliderIndex = 0;

sliderEl.appendChild(sliderListEls[sliderIndex].cloneNode(true));

setInterval(() => {
  sliderIndex += 1;
  sliderEl.style.transition = "0.6s";
  sliderEl.style.transform = `translateY(${-100 * sliderIndex}%)`;

  if (sliderIndex === sliderCount) {
    setTimeout(() => {
      sliderIndex = 0;
      sliderEl.style.transition = "0s";
      sliderEl.style.transform = `translateY(0)`;
    }, 600);
  }
}, 3000);
