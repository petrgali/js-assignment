import { routes } from './router.config.js'

function Router() {
  let exist = false
  const location = window.location.href
  const isHash = location.includes('#')
  const getRoute = location.split('#').pop()
  
  return {
    init: () => {
      if (exist) return
      if (!isHash) window.location.href = '#list'
      Router().match(routes)
      window.onpopstate = () => Router().match(routes)
      exist = true
    },
    match: (routes = []) => {
      const page = routes.find(route => route.path === getRoute)
      return page ? page.handler() : console.log('Not Found')
    }
  }
}

export default Router