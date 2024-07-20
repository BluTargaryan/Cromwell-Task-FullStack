import React from 'react'

const ButtonLong = ({onSubmit}) => {
  return (
    <button onClick={()=> onSubmit()}>Submit details</button>
  )
}

export default ButtonLong