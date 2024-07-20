import React from 'react'
import { useNavigate } from 'react-router-dom'

const ButtonShort = () => {
  const navigate = useNavigate()
  return (
<button id='short-button' onClick={()=>navigate('/')}>Log out</button>
  )
}

export default ButtonShort