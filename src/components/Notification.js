import { removeNodes, create } from '../helpers.js'

const Notification = (parent, message) => {
    let container = create('div')
    let notify = create('div')
    
    container.setAttribute('class', 'notification-container')
    notify.setAttribute('class', 'notification')
    notify.innerText = message
    
    removeNodes(parent)
    container.appendChild(notify)
    parent.appendChild(container)
}

export default Notification