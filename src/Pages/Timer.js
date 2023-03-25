import React, { useEffect, useState } from 'react'

export default function Timer(props) {
	const [seconds, setSeconds] = useState(parseInt(props.seconds));
	const [minutes, setMinutes] = useState(parseInt(props.minutes));
	const [hours, setHours] = useState(parseInt(props.hours));

	const [timeup, setTimeup] = useState(false);

	const [totalTime, setTotalTime] = useState((parseInt(props.seconds) + (60 * parseInt(props.minutes)) + (60 * 60 * parseInt(props.hours))));

	const convertTime = () => {
		console.log('object')
		setMinutes(minutes + parseInt(seconds / 60));
		setSeconds(seconds % 60);

		setHours(hours + parseInt(minutes / 60));
		setMinutes(minutes % 60);
	}

	useEffect(() => {
		if (!totalTime) {
			console.log("Done Done Done!!!!")
			setTimeup(true);
			// props.setShowTimer(false);
			return;
		}

		console.log(totalTime)
		convertTime();

		const countDown = setInterval(() => {
			setTotalTime(time => time - 1);
			setSeconds(secs => secs - 1);

			if (minutes === 0) {
				if (hours) {
					// hours -= 1;
					setHours(hrs => hrs - 1);
					// minutes += 60;
					setMinutes(mins => mins + 60);
				}
			}

			if (seconds == 0) {
				if (minutes) {
					// minutes -= 1;
					setMinutes(mins => mins - 1);
					// seconds += 60;
					setSeconds(secs => secs + 60);
				}
			}

			// seconds -= 1;
		}, 1000);

		return () => clearInterval(countDown);
	}, [totalTime]);

	return (
		<div>
			{
				timeup ?
				
					<div className="timeup">
						<h1>Timeup! Over</h1>
						<button onClick={() => { props.setShowTimer(false) }}>Back</button>
					</div>
					
					:
					
					<div className="running">
						<h1>{hours}</h1>
						<h1>{minutes}</h1>
						<h1>{seconds}</h1>
						<button onClick={() => { props.setShowTimer(false) }}>Close</button>
					</div>
			}

		</div>
	)
}
