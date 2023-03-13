import React, { useEffect } from 'react'

export default function Timer(props) {
  var totalTime = 0;
  const totalTimeCalculator = () => {
    // console.log(((props.hours * 60 * 60) + (props.minutes * 60) + (props.seconds)) * 1000)
    return ((props.hours * 60 * 60) + (props.minutes * 60) + (props.seconds) * 1000);
  }

  useEffect(() => {
    totalTime = totalTimeCalculator();

    setTimeout(() => {
      props.setShowTimer(false);
    }, totalTime)
  }, []);

  return (
    <div>
      <h1>{props.hours}</h1>
      <h1>{props.minutes}</h1>
      <h1>{props.seconds}</h1>
      
    </div>
  )
}
