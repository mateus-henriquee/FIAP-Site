const scrollTopBtn = document.getElementById("scrollTopBtn");
const modal = document.getElementById("image-modal");
const img = document.getElementById("modal-trigger");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.getElementById("close-modal");

let modalIsOpen = false;

img.onclick = function () {
  modal.style.display = "flex";
  modalImg.src = this.src;
  modalImg.alt = this.alt;
  modalIsOpen = true; 
  scrollTopBtn.classList.remove("show");
};

closeBtn.onclick = function () {
  modal.style.display = "none";
  modalIsOpen = false;
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
    modalIsOpen = false;
  }
};

window.addEventListener("scroll", () => {
  if (modalIsOpen) {
    scrollTopBtn.classList.remove("show");
    return;
  }

  if (window.scrollY > window.innerHeight) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
