import { Suspense } from 'react'
import { useEffect } from 'react'
import './App.css'
import { WithProviders } from './app/providers/withProviders'
import { useRoutes } from 'react-router-dom'
import { routes } from './processes/routes/routes'
import { Spin } from 'antd'

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

export const App = () => {
  return (
    <WithProviders>
      <Application />
    </WithProviders>
  )
}
