import React, { useState } from 'react'
import { HomeHead } from './styles'
import { Button, Space } from 'antd'
import { First } from '../first/ui'
import { DingtalkOutlined } from '@ant-design/icons'
import { Link, useNavigate } from 'react-router-dom'

export const Home = () => {
  const [isVisible, setIsVisible] = useState(false)
  const navigate = useNavigate()

  return (
    <>
      <HomeHead>
        Home
      </HomeHead>
      <Space direction='vertical'>
      <Button onClick={()=>navigate('/second')}>
        Forward
      </Button>
      <Link to='/second'>
        To Second
      </Link>
      <Button size='large' icon={<DingtalkOutlined />} onClick={()=>setIsVisible(!isVisible)}>
        Forward
      </Button>
      </Space>
      {isVisible && <First/>}
    </>
  )
}
