import React from 'react'

export default function Form(props) {
    return (
        <div>
            <h1>Hello Form</h1>

            <form action="">
                
                <label htmlFor="hours">Hours</label>
                <br />
                <input onChange={(event) => props.setHours(
                    (event.target.value === '' ? 0 : parseInt(event.target.value))
                    )} type="number" id="hours" name="hours" />
                <br />
                
                <label htmlFor="minutes">Minutes</label>
                <br />
                <input onChange={(event) => props.setMinutes(
                    (event.target.value === '' ? 0 : parseInt(event.target.value))
                    )} type="number" id="minutes" name="minutes" />
                <br />

                <label htmlFor="seconds">Seconds</label>
                <br />
                <input onChange={(event) => props.setSeconds(
                    (event.target.value === '' ? 0 : parseInt(event.target.value))
                )} type="number" id="seconds" name="seconds" />
                <br />

            </form>

        </div>
    )
}
