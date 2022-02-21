const SpeakingComponent = (name) => {
  const span = document.createElement("span");
  span.dataset.character = name;
  span.classList.add("microphone");
  return span;
};
