import "./style.css";
import { injectCountdown } from "./countdown";
import { injectGithubLogo } from "./footer-image";
import { injectMugImage } from "./main-image";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div id='body' class="container flex flex-col mx-auto mt-10 align-middle justify-center">
    <h1 class="2xl:text-6xl xl:text-6xl md:text-4xl sm: text-xl mx-auto mb-6 text-neutral font-bold text-center">When will Donald Trump leave the presidential office?</h1>
    <div class="mx-auto 2xl:size-96 xl:size-96 md:size-96 sm:size-64 mb-6">
      <a href="https://w.wiki/CXR" target="_blank">
        <img id="trump_image" alt="Trump's mug image in Pop art style." class="rounded-lg glow-on-hover" />
      </a>
    </div>
    
    <div class="mx-auto 2xl:text-6xl xl:text-6xl md:text-4xl sm: text-xl mb-6">Well, hopefully in</div>
    <div id="countdown-wrapper" class="mb-6"></div>
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

injectMugImage();
injectCountdown();
injectGithubLogo();
