import Row from './Row.js'
import { removeNodes, $, create } from '../helpers.js'

const Table = (parent, data, header) => {
  let payload = data
  let players = new Set(payload.map(item => item.userId))
  let ascTitleSort = false
  let selected = ''

  let table = create('div')
  table.classList = 'responsive-table'

  const sortTitle = () => {
    removeNodes(table)
    if (!ascTitleSort) {
      payload.sort((a, b) => a.title > b.title ? 1 : -1)
      ascTitleSort = true
    } else {
      payload.sort((a, b) => a.title < b.title ? 1 : -1)
      ascTitleSort = false
    }
    selected ? render(payload.filter(elem => elem.userId === +selected)) : render(payload)
  }

  const sortUser = (ev) => {
    removeNodes(table)
    let group = payload.filter(elem => elem.userId === +ev.target.value)
    if (group.length) {
      selected = ev.target.value
      render(group)
      return
    }
    selected = ''
    render(payload)
  }

  const select = (() => {
    let select = create('select')
    select.classList = 'select'
    Array.from(players).map((player, id) => {
      let option = create('option')
      option.setAttribute('value', `${id + 1}`)
      option.innerText = `User ${player}`
      select.appendChild(option)
    })
    let option = create('option')
    option.setAttribute('selected', 'selected')
    option.innerText = 'Group by...'
    select.appendChild(option)
    select.addEventListener('change', sortUser)
    parent.appendChild(select)
  })()

  const render = (data) => {
    new Array(header).map((line, idx) => {
      Row(table, line, idx, 'table-header')
    })
    data.map((line, idx) => {
      Row(table, line, idx, 'table-row', header)
    })

    parent.appendChild(table)
    $('.table-header .col-3').addEventListener('click', sortTitle)
  }
  
  render(payload)
}

export default Table