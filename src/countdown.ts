import usFlagMotif from "./images/us_flag_motif.webp";
import { intervalToDuration } from "date-fns";
import { ptc } from "./utils";

export function injectCountdown() {
  const timeTarget = new Date(2028, 11, 7);
  const countdownElement = document.createElement("div");
  const countdownWrapper =
    document.querySelector<HTMLDivElement>("#countdown-wrapper")!;
  countdownElement.id = "countdown";
  countdownElement.style.backgroundImage = `url(${usFlagMotif})`;
  countdownElement.classList.add("bg-center", "bg-cover", "rounded-lg");
  countdownWrapper.appendChild(countdownElement);

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
      timeDiv.classList.add(
        ...ptc(
          "flex sm:flex-row md:flex-row xl:flex-row",
          "2xl:flex-row, xsm:flex-col, 2xsm:flex-col, 3xsm:flex-col",
          "justify-around m-10",
        ),
      );
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
    elem.innerHTML = `${val} ${key}`;
    elem.classList.add(
      ...ptc(
        "2xl:text-6xl xl:text-4xl md:text-2xl sm:text-base",
        "text-black font-bold 2xl:my-16 xl:my-14 md:my-10",
        "sm:my-10 xsm:mb-2 2xsm:mb-2 3xsm:mb-2",
        "bg-white bg-opacity-70 p-2 rounded-lg shadow-lg",
      ),
    );
    parentElement.appendChild(elem);
  });
}

function removeChildRecursively(parent: HTMLElement, child: HTMLElement) {
  while (child.firstChild) {
    removeChildRecursively(child, child.firstChild as HTMLElement);
  }
  parent.removeChild(child);
}
