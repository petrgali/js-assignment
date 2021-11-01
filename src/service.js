import { API_URL } from '../config.js'

function DataService() {
  const checkErrors = (resp) => {
    if (resp.ok) return resp.json()
    throw Error(resp.statusText)
  }
  
  return {
    fetchData: () => {
      return fetch(API_URL)
        .then(checkErrors)
        .then(json => json)
        .catch(err => err)
    }
  }
}

export default DataService