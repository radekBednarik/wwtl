import { intervalToDuration } from "date-fns";
import { fromZonedTime } from "date-fns-tz";
import usFlagMotif from "./images/us_flag_motif.webp";
import { ptc } from "./utils";

export function injectCountdown() {
	const targetDate = new Date(2029, 0, 20, 12, 0, 0);
	const tzTargetDate = fromZonedTime(targetDate, "America/New_York");
	const timeTarget = tzTargetDate.getTime();
	addCountdown(
		document.querySelector<HTMLDivElement>("#countdown-wrapper")!,
		timeTarget,
	);
	addBarOverlay(
		document.querySelector<HTMLDivElement>("#countdown")!,
		timeTarget,
	);
}

function addBarOverlay(countdownWrapper: HTMLDivElement, timeTarget: number) {
	const progressBar = document.createElement("div");
	progressBar.id = "countdown-progress-bar";
	progressBar.classList.add(
		...ptc("bg-white bg-opacity-0 h-full max-h-full absolute rounded-l-lg"),
	);

	const overlay = document.createElement("div");
	overlay.id = "countdown-bar-overlay";
	overlay.classList.add(
		...ptc("bg-black bg-opacity-40 h-full max-h-full absolute rounded-lg"),
	);

	const startDate = new Date(2025, 0, 20, 12, 0, 0).getTime();
	const diff = timeTarget - startDate;
	const now = new Date().getTime();
	const progress = (((now - startDate) / diff) * 100).toFixed(2);

	progressBar.style.width = `${progress}%`;
	overlay.style.width = `${(100 - Number.parseFloat(progress)).toFixed(2)}%`;
	overlay.style.left = `${progress}%`;

	countdownWrapper.appendChild(progressBar);
	countdownWrapper.appendChild(overlay);
}

function addCountdown(countdownWrapper: HTMLDivElement, timeTarget: number) {
	const countdownElement = document.createElement("div");
	countdownElement.id = "countdown";
	countdownElement.style.backgroundImage = `url(${usFlagMotif})`;
	countdownElement.classList.add(
		...ptc("bg-center bg-cover rounded-lg", "relative", "lg:max-xl:mx-10"),
	);
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
					"justify-around",
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
				"2xl:text-5xl xl:text-4xl lg:text-2xl md:text-lg sm:text-base",
				"text-black font-bold 2xl:my-16 xl:my-14 md:my-10",
				"sm:my-2 xsm:my-2 2xsm:my-2 3xsm:my-2",
				"sm:mx-2 xsm:mx-2 2xsm:mx-2 3xsm:mx-2",
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
