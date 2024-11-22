const header = document.querySelector(".header");

const onScroll = () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
};

window.addEventListener("scroll", onScroll);
