const bars = document.querySelector(".bars");
const times = document.querySelector(".times");
const navbar = document.querySelector(".navbar");

times.addEventListener("click", () => {
  navbar.classList.add("hide");
  navbar.classList.remove("show");
  bars.style.opacity = "100";
});

bars.addEventListener("click", () => {
  bars.style.opacity = "0";
  navbar.classList.add("show");
  navbar.classList.remove("hide");
});
