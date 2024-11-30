import imagePoutyTrump from "./images/trump_mug_pouty.webp";

export function injectMugImage() {
  const trumpImage = document.querySelector<HTMLImageElement>("#trump_image");
  if (trumpImage) {
    trumpImage.src = imagePoutyTrump;
  }
}
