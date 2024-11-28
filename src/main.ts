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
  const body = document.querySelector<HTMLDivElement>("#body")!;
  countdownElement.id = "countdown";
  countdownElement.classList.add("mx-auto");
  body.appendChild(countdownElement);

  setInterval(
    (countdownElement: HTMLDivElement, timeTarget: number) => {
      const now = new Date();
      const duration = intervalToDuration({ start: now, end: timeTarget });

      const previous = document.querySelector<HTMLDivElement>("#time");

      if (previous) {
        removeChildRecursively(countdownElement, previous);
      }

      const timeDiv = document.createElement("div");
      timeDiv.id = "time";
      countdownElement.appendChild(timeDiv);
      addDateElements(timeDiv, duration);
    },
    1000,
    countdownElement,
    timeTarget,
  );
}

function addDateElements(
  parentElement: HTMLDivElement,
  dateData: {
    years?: number;
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
  },
) {
  Object.entries(dateData).forEach(([key, val], i) => {
    const elem = document.createElement("div");
    elem.id = `date-item-${i}`;
    elem.textContent = `${val} ${key}`;
    parentElement.appendChild(elem);
  });
}

function removeChildRecursively(parent: HTMLElement, child: HTMLElement) {
  while (child.firstChild) {
    removeChildRecursively(child, child.firstChild as HTMLElement);
  }
  parent.removeChild(child);
}
