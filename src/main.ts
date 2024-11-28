import "./style.css";
import imagePoutyTrump from "./images/trump_mug_pouty.png";
import { intervalToDuration } from "date-fns";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div id='body' class="container flex flex-col mx-auto align-middle">
    <h1 class="2xl:text-9xl xl:text-8xl md:text-4xl sm: text-xl mx-auto mb-6">When will Trump leave?</h1>
    <img id="trump_image" class="mx-auto rounded-lg 2xl:size-fit xl:size-fit md:size-96 sm:size-64 mb-6"/>
    <div class="mx-auto 2xl:text-6xl xl:text-6xl md:text-4xl sm: text-xl mb-6">Well, hopefully in</div>
  </div>
`;

const trumpImage = document.querySelector<HTMLImageElement>("#trump_image");
if (trumpImage) {
  trumpImage.src = imagePoutyTrump;
}

injectCountdown();

function injectCountdown() {
  const timeTarget = new Date(2028, 11, 7);
  const countdownElement = document.createElement("div");
  countdownElement.id = "countdown";
  countdownElement.classList.add("mx-auto");
  document
    .querySelector<HTMLDivElement>("#body")!
    .appendChild(countdownElement);

  setInterval(
    (countdownElement: HTMLDivElement, timeTarget: number) => {
      const now = new Date();
      const duration = intervalToDuration({ start: now, end: timeTarget });

      const previousPreciseTimeDiv =
        document.querySelector<HTMLDivElement>("#time");

      if (previousPreciseTimeDiv) {
        countdownElement.removeChild(previousPreciseTimeDiv);
      }

      const timeDiv = document.createElement("div");
      timeDiv.id = "time";
      timeDiv.innerText = JSON.stringify(duration);
      countdownElement.appendChild(timeDiv);
    },
    1000,
    countdownElement,
    timeTarget,
  );
}
