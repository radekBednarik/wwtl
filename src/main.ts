import "./style.css";
import { injectCountdown } from "./countdown";
import { injectGithubLogo } from "./footer-image";
import imagePoutyTrump from "./images/trump_mug_pouty.webp?url";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div id='body' class="container flex flex-col mx-auto">
    <div class="flex flex-row items-center justify-center gap-x-2 my-10 ">
      <h1 class="2xl:text-7xl xl:text-7xl md:text-4xl sm:text-base xsm:text-xl mb-6 text-neutral font-bold text-left">When will Donald Trump<br/> leave the presidential office?</h1>
      <a href="https://w.wiki/CXR" target="_blank">
        <img id="trump_image" src="${imagePoutyTrump}"
          alt="Trump's mug image in Pop art style."
          class="rounded-lg glow-on-hover self-center 2xl:size-[40rem] xl:size-96 md:size-80 sm:size-64 xsm:size-30"
        />
      </a>
    </div>
    
    <div id="countdown-wrapper" class="sm:my-2 md:my-10 w-full"></div>
    <footer class="flex md:flex-row sm:flex-col xsm:flex-col 2xsm:flex-col 3xsm:flex-col justify-between sm:mx-2 xsm:mx-2 2xsm:mx-2 3xsm:mx-1 md:mx-10 lg:mx-10 my-10">
      <div class="italic">This countdown is very much assuming that presidential elections will happen on 
        <strong>
          <a href="https://w.wiki/CEYk" target="_blank" class="underline hover:no-underline">
         November 7, 2028
          </a>
        </strong>
        and Trump's term will expire at <strong>noon on January 20, 2029</strong>.
      </div>
      <div id="gh-logo" class="sm:mt-5 xsm:mt-5 2xsm:mt-5 3xsm:mt-5 md:my-auto">
        <a href="https://github.com/radekBednarik/wwtl" target="_blank" class="hover:underline">
          <img id="gh-image" alt="Github Octokat logo." loading="lazy" class="size-6"/>
        </a>
      </div>
    </footer>
  </div>
`;

injectCountdown();
injectGithubLogo();
