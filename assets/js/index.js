'use strict'

const body = document.body
const bgColors = ['Orange', 'Pink', 'Lightblue', 'PaleGoldenRod', 'SpringGreen']
const menu = body.querySelector('.menu')
const menuItem = menu.querySelectorAll('.menuItem')
const menuBorder = menu.querySelector('.menuBorder')
let active = menu.querySelector('.active')

function clickItem(item, index) {
  if (active == item) return
  if (active) {
    active.classList.remove('active')
  }

  item.classList.add('active')
  body.style.backgroundColor = bgColors[index]
  active = item
  offset(active, menuBorder)
}

function offset(element, menuBorder) {
  const offsetActive = element.getBoundingClientRect()
  const left =
    Math.floor(
      offsetActive.left -
        menu.offsetLeft -
        (menuBorder.offsetWidth - offsetActive.width) / 2,
    ) + 'px'
  menuBorder.style.transform = `translate3d(${left}, 0 , 0)`
}

menuItem.forEach((item, index) => {
  item.addEventListener('click', () => clickItem(item, index))
})

window.addEventListener('resize', () => {
  offset(active, menuBorder)
})
