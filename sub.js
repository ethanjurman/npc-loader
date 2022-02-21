setInterval(() => {
  // loop on images in localStorage
  const selectedImages = Object.keys(localStorage);
  selectedImages.forEach((imageSource) => {
    const documentImage = document.querySelector(`img[src='${imageSource}']`);
    const documentHasImage = Boolean(documentImage);
    if (!documentHasImage) {
      const imageNode = document.createElement("img");
      imageNode.src = imageSource;
      document.body.appendChild(imageNode);
    }
  });
  // loop on images
  const images = document.querySelectorAll("img");
  images.forEach((imageNode) => {
    const localStorageDoesNotHaveImage = !(imageNode.src in localStorage);
    if (localStorageDoesNotHaveImage) {
      imageNode.classList.add("remove");
      setTimeout(() => {
        imageNode.remove();
      }, 400);
    }

    imageNode.style["max-width"] =
      window.innerWidth / selectedImages.length - 8 + "px";
    if (selectedImages.length === 1) {
      imageNode.style["border-radius"] =
        250 / selectedImages.length + "px 10px";
    }
    if (selectedImages.length !== 1) {
      imageNode.style["border-radius"] =
        400 / selectedImages.length + "px 10px";
    }
  });
}, 250);
