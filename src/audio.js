import { AUDIO } from '../config.js'

const $ = (elem) => document.querySelectorAll(elem)

function Player() {
  let AudioContext = {}
  let audioCtx = {}
  let playing = false

  return {
    init: () => {
      AudioContext = window.AudioContext || window.webkitAudioContext
      audioCtx = new AudioContext()
      playing = false

      Array.from({ length: AUDIO.length }).map((_, idx) => {
        const audioElement = $('audio')[idx]
        const track = audioCtx.createMediaElementSource(audioElement)
        const playButton = $('.control')[idx]

        playButton.addEventListener('click', function () {
          if (audioCtx.state === 'suspended') {
            audioCtx.resume()
          }
          if (playing) {
            audioElement.pause()
            playButton.innerText = 'Play'
            playing = false
            return
          }
          playing = true
          playButton.innerText = 'Pause'
          audioElement.play()
        });
        track.connect(audioCtx.destination)
      })
    }
  }
}

export default Player