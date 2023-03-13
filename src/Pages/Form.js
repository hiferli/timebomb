import React, { useState } from 'react'

export default function Form() {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    return (
        <div>
            <h1>Hello Form</h1>

            <form action="">
                
                <label htmlFor="hours">Hours</label>
                <br />
                <input onChange={(event) => setHours(
                    (event.target.value === '' ? 0 : parseInt(event.target.value))
                    )} type="number" id="hours" name="hours" />
                <br />
                
                <label htmlFor="minutes">Minutes</label>
                <br />
                <input onChange={(event) => setMinutes(
                    (event.target.value === '' ? 0 : parseInt(event.target.value))
                    )} type="number" id="minutes" name="minutes" />
                <br />

                <label htmlFor="seconds">Seconds</label>
                <br />
                <input onChange={(event) => setSeconds(
                    (event.target.value === '' ? 0 : parseInt(event.target.value))
                )} type="number" id="seconds" name="seconds" />
                <br />

                <button type='submit' style={
                    {
                        height: '1rem',
                        width: '2rem'
                    }
                } onClick={(e) => {
                    e.preventDefault();
                    // console.log(seconds);
                    // console.log(minutes);
                    // console.log(hours);

                    localStorage.setItem("seconds" , seconds)
                    localStorage.setItem("minutes" , minutes)
                    localStorage.setItem("hours" , hours)
                }}></button>
            </form>

        </div>
    )
}
