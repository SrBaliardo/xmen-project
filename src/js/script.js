const chars = document.querySelectorAll(".char");

chars.forEach((char) => {
  char.addEventListener("mouseenter", () => {
    if (window.innerWidth < 450) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    removeSelector();

    char.classList.add("selected");

    changeCharPhoto(char);

    changeCharName(char);

    changeCharDescription(char);
  });
});

function changeCharDescription(char) {
  const charDescription = document.getElementById("char-description");
  charDescription.innerText = char.getAttribute("data-description");
}

function changeCharName(char) {
  const charName = document.getElementById("char-name");
  charName.innerText = char.getAttribute("data-name");
}

function changeCharPhoto(char) {
  const charPhoto = document.querySelector(".char-photo");
  const charId = char.attributes.id.value;
  charPhoto.src = `./src/images/${charId}.png`;
}

function removeSelector() {
  const selectedChar = document.querySelector(".selected");
  selectedChar.classList.remove("selected");
}
