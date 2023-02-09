import React from 'react'
import { HomeHead } from '../home/styles'
import { Button } from 'antd'
import { useStore, useUnit, useEvent } from 'effector-react'
import { $counter, $counterCombined, $counterText, plus } from './model/model'
import './model/init'

export const First = () => {
  const counter = useUnit($counter)
  const counterText = useStore($counterText)
  const counterCombined = useStore($counterCombined)
  const plusFn = useEvent(plus)

  const pl = () => {
    //--------------------------
    console.log('counter', counter)
    //--------------------------

    plusFn(counter)
  }

  return (
    <>
      <HomeHead>
        First
      </HomeHead>
      <div>
        <Button onClick={()=>pl()}>Plus</Button>
        <div>counter: {counter}</div>
        <div>counterText: ${counterText}</div>
        <div>counterCombined: {counterCombined.counter}, {counterCombined.text}</div>
      </div>
    </>
  )
}
