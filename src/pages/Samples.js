import Player from '../audio.js'
import AudioSample from '../components/AudioSample.js'
import { removeNodes, $, create } from '../helpers.js'
import { AUDIO } from '../../config.js'

const player = new Player()

const Samples = () => {
  let container = $('div.container')
  let list = create('ul')

  removeNodes(container)
  list.classList = 'tracklist'
  AUDIO.map((elem, idx) => AudioSample(list, elem, idx))
  container.appendChild(list)
  player.init()
}

export default Samples