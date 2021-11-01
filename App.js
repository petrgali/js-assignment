import Ui from './src/components/Ui.js'
import Router from './src/router/index.js'

const router = new Router()
const ui = new Ui()

const app = () => {
  ui.init()
  router.init()
}
document.addEventListener('DOMContentLoaded', app())

export default app

