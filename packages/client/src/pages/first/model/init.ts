import { sample } from 'effector'
import { $counter, plus } from './model'

sample({
  clock: plus,
  fn: (x) => x+1,
  target: $counter
})
