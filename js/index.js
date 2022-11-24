;(() => {
  const header = document.querySelector('header')
  const goBack = document.getElementById('go-back')
  const back = document.querySelector('.btn-go-top')
  const topContent = document.getElementById('top-warp')

  window.addEventListener('scroll', () => {
    header.classList.toggle('header-sticky', window.scrollY > 0)
    back.classList.toggle('goback-show', window.scrollY > 800)
  })

  // 返回顶部
  goBack.onclick = () => {
    console.log(123)
    topContent.scrollIntoView({
      behavior: 'smooth'
    })
  }
})()
