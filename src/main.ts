import "./style.css";
import { injectCountdown } from "./countdown";
import { injectMugImage } from "./main-image";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div id='body' class="container flex flex-col mx-auto align-middle">
    <h1 class="2xl:text-9xl xl:text-8xl md:text-4xl sm: text-xl mx-auto mb-6 text-neutral font-bold">When will Trump leave?</h1>
    <img id="trump_image" alt="Trump's mug image in Pop art style." loading="lazy" class="mx-auto rounded-lg 2xl:size-fit xl:size-fit md:size-96 sm:size-64 mb-6"/>
    <div class="mx-auto 2xl:text-6xl xl:text-6xl md:text-4xl sm: text-xl mb-6">Well, hopefully in</div>
    <div id="countdown-wrapper" class="mb-6"></div>
    <footer class="flex flex-row justify-stretch">
      <div class="italic">We are very much assuming that presidential elections will happen on 
        <strong>
          <a href="https://w.wiki/CEYk" target="_blank" class="underline hover:no-underline">
          7.11.2028
          </a>
        </strong>
        .
      </div>
    </footer>
  </div>
`;
injectMugImage();
injectCountdown();
