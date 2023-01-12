const body = document.getElementsByTagName('body')[0]
const mode = document.querySelector('.dark')
const topo = document.querySelector('.topo')
const menu = document.querySelector('.icon-menu')
const header = document.getElementsByTagName('header')[0]
const nav = document.querySelector('.nav')
const icon = document.querySelector('.icon')
const a = document.getElementsByTagName('a')
const projeto = document.getElementsByClassName('projeto')
const infors = document.getElementsByClassName('infors')

// dark / linght
mode.addEventListener('click', () => {
  if (body.classList.contains('mode-dark')) {
    body.classList.remove('mode-dark')
    icon.src = './assets/lua.png'
  } else {
    body.classList.add('mode-dark')
    icon.src = './assets/sol.png'
  }
})

// subir ao topo
document.addEventListener('scroll', () => {
  if (scrollY > 200) {
    topo.style.display = 'block'
  } else {
    topo.style.display = 'none'
  }
})

// menu- mobile
menu.addEventListener('click', () => {
  // header.classList.toggle('mobile-menu')

  if (header.classList.contains('mobile-menu')) {
    header.classList.remove('mobile-menu')
    menu.src = './assets/menu-aberto.png'
    body.style.overflow = 'auto'
  } else {
    header.classList.add('mobile-menu')
    menu.src = './assets/fechar.png'
    body.style.overflow = 'hidden'
  }
  for (let i = 0; i < 5; i++) {
    a[i].addEventListener('click', () => {
      header.classList.remove('mobile-menu')
      menu.src = './assets/menu-aberto.png'
      body.style.overflow = 'auto'
    })
  }
})

// for (let i = 0; i < projeto.length; i++) {
//   a[i].addEventListener('mousemove', () => {
//     infors[i].style.display = 'block'
//   })
// }
