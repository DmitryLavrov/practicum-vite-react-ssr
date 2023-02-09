import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { fork, hydrate, ValueMap } from 'effector'
import { domain } from './pages/first/model/model'

// const history = createBrowserHistory()
declare global {
  interface Window {
    __INITIAL_STATE__: ValueMap;
  }
}

hydrate(domain, {
  values: window.__INITIAL_STATE__
})

const scope = fork(domain)
// const scope = fork(window.__INITIAL_STATE__)

// ReactDOM.hydrate(<App root={clientScope} />, document.getElementById('root'))
ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <BrowserRouter>
      <App scope={scope} />
    </BrowserRouter>
  </React.StrictMode>
)
