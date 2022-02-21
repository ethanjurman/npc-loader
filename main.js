// clear local storage on page refresh
localStorage.clear();

// get all character images
const allCharacterImages = document.querySelectorAll(".character-img");

// set character images to buttons that load
allCharacterImages.forEach((characterImageElement) => {
  // build character name
  const characterName = characterImageElement.src
    .split("/")
    .pop()
    .replace("-", " ")
    .split(".")[0];

  characterImageElement.title = characterName;

  const speakingElement = SpeakingComponent(characterName);
  characterImageElement.parentNode.insertBefore(
    speakingElement,
    characterImageElement.nextSibling
  );

  characterImageElement.onmouseover = () => {
    const detailsSection = document.querySelector("#details");
    detailsSection.innerHTML = "";
    const characterJson =
      characters.find(({ name }) => characterName.match(name)) || {};
    const charElement = CharacterComponent({
      ...characterJson,
      name: characterName,
    });
    detailsSection.appendChild(charElement);
  };

  // characterImageElement.onmouseleave = () => {
  //   const detailsSection = document.querySelector("#details");
  //   detailsSection.children[0].remove();
  // };

  characterImageElement.onclick = () => {
    const isCharactersSelected = localStorage.getItem(
      characterImageElement.src
    );
    if (isCharactersSelected) {
      characterImageElement.classList.remove("selected");
      delete localStorage[`${characterImageElement.src}`];
    } else {
      localStorage.setItem(characterImageElement.src, 1);
      characterImageElement.classList.add("selected");
    }
  };
});
