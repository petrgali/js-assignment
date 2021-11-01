import Posts from '../pages/Posts.js'
import Samples from '../pages/Samples.js'

export const routes = [
    { path: 'list', handler: Posts, title: 'List' },
    { path: 'audio', handler: Samples, title: 'Audio' }
]