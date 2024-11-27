import './style.css'
import imagePoutyTrump from './images/trump_mug_pouty.png'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="text-red-900">
    Yo, hello world! 
    <img id="trump_image" class="rounded-lg"/>
  </div>
`

const trumpImage = document.querySelector<HTMLImageElement>('#trump_image')
if (trumpImage) {
  trumpImage.src = imagePoutyTrump
}
