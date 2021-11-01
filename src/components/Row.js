import { create } from '../helpers.js'

const Row = (parent, line, id, className, labels) => {
  let row = create('div')
  row.setAttribute('class', className)
  row.setAttribute('id', `${id}`)

  Object.values(line).map((item, idx) => {
    let col = create('div')
    if (labels) col.setAttribute('data-label', labels[idx])
    col.innerText = item
    col.classList = `col col-${idx + 1}`
    row.appendChild(col)
  })
  parent.appendChild(row)
}

export default Row