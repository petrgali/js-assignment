import { create } from '../helpers.js'

const AudioSample = (parent, elem, idx) => {
  let li = create('li')
  let title = create('div')
  let button = create('button')
  let audio = create('audio')

  li.classList = 'track'
  title.innerText = `track ${idx + 1}`
  button.innerText = 'Play'
  button.classList = 'control'
  audio.setAttribute('src', elem)
  audio.setAttribute('crossorigin', '*')

  li.appendChild(audio)
  li.appendChild(title)
  li.appendChild(button)
  parent.appendChild(li)
}

export default AudioSample