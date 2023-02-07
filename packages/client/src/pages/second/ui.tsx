import React from 'react'
import { HomeHead } from '../home/styles'
import { Link } from 'react-router-dom'

export const Second = () => {
  return (
    <>
      <HomeHead>
        Second
      </HomeHead>
      <Link to='/'>
        Home
      </Link>
    </>
  )
}
