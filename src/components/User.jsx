import React from 'react'

const User = (props) => {
  return (
    <div>
        
    <h1>{props.name}</h1>
    <h1>{props.age}</h1>
    <h1>{props.skills}</h1>
    {props.children}
        
    </div>
  )
}

export default User