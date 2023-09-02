const tapMenuEls = document.querySelectorAll("#contents .tap .menu ul li");
const tapContentEls = document.querySelectorAll("#contents .tap .content div");
let tapIndex = 0;

tapMenuEls[tapIndex].classList.add("active");
tapContentEls[tapIndex].classList.add("active");

tapMenuEls.forEach((el, index) => {
  el.addEventListener("click", function () {
    tapMenuEls[tapIndex].classList.remove("active");
    tapContentEls[tapIndex].classList.remove("active");

    tapMenuEls[index].classList.add("active");
    tapContentEls[index].classList.add("active");

    tapIndex = index;
  });
});
