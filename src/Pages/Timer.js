import React, { useEffect, useState } from 'react'

export default function Timer(props) {
	const [seconds, setSeconds] = useState((props.seconds));
	const [minutes, setMinutes] = useState((props.minutes));
	const [hours, setHours] = useState((props.hours));

	const [timeup, setTimeup] = useState(false);

	const [totalTime, setTotalTime] = useState(((props.seconds) + (60 * (props.minutes)) + (60 * 60 * (props.hours))));

	const convertTime = () => {
		console.log('object')
		setMinutes(minutes + (seconds / 60));
		setSeconds(seconds % 60);

		setHours(hours + (minutes / 60));
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

			if (seconds === 0) {
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
				
					<div className="timeup container">
						<h1 className='title'>Time's Over!</h1>
						<button onClick={() => { props.setShowTimer(false) }} className="button"><span>Back</span></button>
						{/* <button >Back</button> */}
					</div>
					
					:
					
					<div className="container running">
						<h1>{hours} Hours : {minutes} Minutes : {seconds} Seconds</h1>
						<button className="button" onClick={() => { props.setShowTimer(false)}}><span>Close</span></button>
					</div>
			}

		</div>
	)
}
