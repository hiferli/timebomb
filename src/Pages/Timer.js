import React from 'react'

export default function Timer(props) {
  return (
    <div>
      <h1>{props.hours}</h1>
      <h1>{props.minutes}</h1>
      <h1>{props.seconds}</h1>

      {
        setTimeout(() => {
          props.setShowTimer(false);
        }, 5000)
      }
      
    </div>
  )
}
