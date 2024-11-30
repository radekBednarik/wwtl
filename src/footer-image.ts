import ghLogo from "./images/github-mark.webp";

export function injectGithubLogo() {
  const img = document.querySelector<HTMLImageElement>("#gh-image");

  if (img) {
    img.src = ghLogo;
  }
}
