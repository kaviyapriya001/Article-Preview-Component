const shareButton = document.querySelector('.js-share__button')
const shareTooltip = document.querySelector('.js-share__tooltip')

shareButton.addEventListener('click', () => {
  shareTooltip.classList.toggle('share__tooltip--hidden')
  shareButton.classList.toggle('share__button--active')
})