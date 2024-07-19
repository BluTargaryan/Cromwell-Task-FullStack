import React from 'react'
import { useNavigate } from 'react-router-dom'


const VerificationSwitchLink = ({text, goTo}) => {
  const navigate = useNavigate()
  return (
    <div id='verswitch' onClick={()=>navigate(`${goTo}`)}>
     {text}
    </div>
  )
}

export default VerificationSwitchLink