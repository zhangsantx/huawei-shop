;(() => {
  window.addEventListener('scroll', () => {
    let header = document.querySelector('header')
    header.classList.toggle('header-sticky', window.scrollY > 0)
  })
})()
