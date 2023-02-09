import { App } from './src/App'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { fork, serialize } from 'effector'
import { ServerStyleSheet } from 'styled-components'
import { domain } from './src/pages/first/model/model'

interface IRenderProps {
  path: string;
}

// Если убрать domain - выскакивает ошибка для {onlyChanges: false}
const scope = fork(domain)

export function scopeFn() {
  return serialize(scope,{onlyChanges: false})
}

const sheet = new ServerStyleSheet()

export function sheetFn() {
  return sheet.getStyleTags()
}

export function render({ path }: IRenderProps) {
  return renderToString(
    sheet.collectStyles(
      <StaticRouter location={path}>
        <App scope={scope} />
      </StaticRouter>
    )
  )
}
