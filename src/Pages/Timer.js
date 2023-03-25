import React, { useEffect, useState } from 'react'

export default function Timer(props) {
	const [seconds, setSeconds] = useState(parseInt(props.seconds));
	const [minutes, setMinutes] = useState(parseInt(props.minutes));
	const [hours, setHours] = useState(parseInt(props.hours));

	const convertTime = () => {
		console.log('object')
		setMinutes(minutes + parseInt(seconds / 60));
		setSeconds(seconds % 60);

		setHours(hours + parseInt(minutes / 60));
		setMinutes(minutes % 60);
    }

	const countDown = () => setInterval(timeChange  , 1000);

	function timeChange() {
		if (seconds === 0 && minutes === 0 && hours === 0) {
			props.setShowTimer(false);
            clearInterval(countDown);
        }
        
        if (minutes === -1) {
            if (hours) {
                // hours -= 1;
				setHours(prevHours => prevHours - 1);
                // minutes += 60;
				setMinutes(prevMinutes => prevMinutes + 60);
            }
        }
		
        if (seconds == -1) {
			if (minutes) {
				// minutes -= 1;
				setMinutes(prevMinutes => prevMinutes - 1);
                // seconds += 60;
				setSeconds(prevSeconds => prevSeconds + 60);
            }
        }
    
		setSeconds(prevSeconds => prevSeconds - 1);
	}


	useEffect(() => {
		convertTime();
		countDown();
	}, []);

	return (
		<div>
			<button onClick={() => { props.setShowTimer(false) }}>Close</button>
			<h1>{hours}</h1>
			<h1>{minutes}</h1>
			<h1>{seconds}</h1>

		</div>
	)
}
