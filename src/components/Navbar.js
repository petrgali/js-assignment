import { routes } from '../router/router.config.js'
import { create } from '../helpers.js'

const $ = (elem) => document.querySelectorAll(elem)

const Navbar = (parent) => {
  const toggleActive = (event) => {
    $('a').forEach(elem => {
      elem.classList.remove('active')
      if (event.target.id === elem.id)
        elem.classList.toggle
    })
    event.target.classList.toggle('active')
  }
  let nav = create('div')
  nav.setAttribute('class', 'nav-container')
  routes.map(elem => {
    let link = create('a')
    link.onclick = (ev) => toggleActive(ev)
    link.setAttribute('href', `#${elem.path}`)
    link.setAttribute('class', 'nav-link')
    link.setAttribute('id', elem.path)
    link.innerText = elem.title
    nav.appendChild(link)
  })
  parent.appendChild(nav)
}

export default Navbar