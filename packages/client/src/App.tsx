import { FC, Suspense } from 'react'
import { useEffect } from 'react'
import './App.css'
import { WithProviders } from './app/providers/withProviders'
import { useRoutes } from 'react-router-dom'
import { routes } from './processes/routes/routes'
import { Spin } from 'antd'
import { Provider } from 'effector-react/scope'
import { Scope } from 'effector'

interface AppProps {
  scope: Scope;
}

export function Application() {
  const router = useRoutes(routes)
  useEffect(() => {
    const fetchServerData = async () => {
      const url = `http://localhost:${__SERVER_PORT__}/api`
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
    }

    fetchServerData()
  }, [])

  return (
    <Suspense fallback={<Spin />}>
      {router}
    </Suspense>
  )
}

export const App: FC<AppProps> = ({ scope }) => {
  return (
    <WithProviders>
      <Provider value={scope}>
        <Application />
      </Provider>
    </WithProviders>
  )
}
