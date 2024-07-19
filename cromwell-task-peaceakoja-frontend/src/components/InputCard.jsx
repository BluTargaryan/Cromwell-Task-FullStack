import React, {useState} from 'react'

const InputCard = ({type, placeholder}) => {

  const [inputValue, setInputValue] = useState('')
  return (
    <input type={type} placeholder={placeholder} value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
  )
}

export default InputCard