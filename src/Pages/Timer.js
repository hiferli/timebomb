import React, { useEffect, useState } from 'react'

export default function Timer(props) {
	const [seconds, setSeconds] = useState(props.seconds);
	const [minutes, setMinutes] = useState(props.minutes);
	const [hours, setHours] = useState(props.hours);

	var totalTime = 0;
	const totalTimeCalculator = () => {
		console.log(((props.hours * 60 * 60) + (props.minutes * 60) + (props.seconds)) * 1000)
		return ((hours * 60 * 60) + (minutes * 60) + (seconds) * 1000);
	}

	/*
  
		useEffect(() => {
		  totalTime = totalTimeCalculator();
  
		  setTimeout(() => {
			props.setShowTimer(false);
		  }, totalTime)
		}, []);


		// Reference
		setInterval(function() {
			console.log('one');
			setTimeout(function() {
				console.log('two');
			},2500);
		}, 5000);
	  
	*/

	return (
		<div>
			<button onClick={() => { props.setShowTimer(false) }}>Close</button>
			<h1>{hours}</h1>
			<h1>{minutes}</h1>
			<h1>{seconds}</h1>

		</div>
	)
}
