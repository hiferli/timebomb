import React, { useEffect, useState } from 'react'

export default function Timer(props) {
	const [seconds, setSeconds] = useState(parseInt(props.seconds));
	const [minutes, setMinutes] = useState(parseInt(props.minutes));
	const [hours, setHours] = useState(parseInt(props.hours));

	const convertTime = () => {
		setMinutes(minutes + parseInt(seconds / 60));
		setSeconds(seconds % 60);

		setHours(hours + parseInt(minutes / 60));
		setMinutes(minutes % 60);
    }

	return (
		<div>
			<button onClick={() => { props.setShowTimer(false) }}>Close</button>
			<h1>{hours}</h1>
			<h1>{minutes}</h1>
			<h1>{seconds}</h1>

		</div>
	)
}
