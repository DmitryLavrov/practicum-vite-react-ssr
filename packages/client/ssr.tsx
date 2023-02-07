import { App } from './src/App'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'

interface IRenderProps {
  path: string;
}

export function render({ path }: IRenderProps) {
  return renderToString(
    <StaticRouter location={path}>
      <App />
    </StaticRouter>
  )
}
