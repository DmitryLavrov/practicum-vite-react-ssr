import { combine, createDomain } from 'effector'

export const domain = createDomain()

export const plus = domain.createEvent<number>()

export const $counter = domain.createStore(1)
export const $counterText = $counter.map(n => `current value = ${n}`)
export const $counterCombined = combine({counter: $counter, text: $counterText})
