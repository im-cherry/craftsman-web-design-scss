const noticeContentListEl = document.querySelector(
  "#contents .tap .content ul li"
);
const popupEl = document.querySelector("#popup");
const popupCloseEl = popupEl.querySelector(".close");

noticeContentListEl.addEventListener("click", function () {
  popupEl.classList.add("active");
});

popupCloseEl.addEventListener("click", function () {
  popupEl.classList.remove("active");
});
