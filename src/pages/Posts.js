import Table from '../components/Table.js'
import Notification from '../components/Notification.js'
import DataService from '../service.js'
import { removeNodes, $ } from '../helpers.js'

const service = new DataService()

const Posts = () => {
  let isLoading = true
  let container = $('div.container')
  
  const render = async () => {
    if (isLoading) Notification(container, 'Loading')
    const tableHeader = ['user', 'id', 'title', 'body']
    const payload = await service.fetchData()
    if (payload instanceof Error) {
      Notification(container, 'Oops!')
      return
    }
    isLoading = false
    removeNodes(container)
    Table(container, payload, tableHeader)
  }
  render()
}


export default Posts