const removeNodes = (parent) => {
  while (parent.firstChild)
    parent.removeChild(parent.firstChild)
}
const $ = (elem) => document.querySelector(elem)
const create = (elem) => document.createElement(elem)

export { removeNodes, create, $ }