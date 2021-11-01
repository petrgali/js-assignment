import Navbar from './Navbar.js'
import { $, create } from '../helpers.js'

function Ui() {
  let app = $('div#App')
  return {
    init: () => {
      Navbar(app)
      let container = create('div')
      container.setAttribute('class', 'container')
      app.appendChild(container)
    }
  }
}

export default Ui