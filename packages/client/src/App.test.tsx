import { App } from './App'
import { render, screen } from '@testing-library/react'
import { fork } from 'effector'

const appContent = 'Вот тут будет жить ваше приложение :)'

// @ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve('hey') })
)

const scope = fork()

test('Example test', async () => {
  render(<App scope={scope} />)
  expect(screen.getByText(appContent)).toBeDefined()
})
