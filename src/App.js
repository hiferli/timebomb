import { useState } from 'react';
import './App.css';
import Form from './Pages/Form';
import Timer from './Pages/Timer';

function App() {

  const [seconds, setSeconds] = useState(localStorage.getItem("seconds") ? localStorage.getItem('seconds') : 0);
  const [minutes, setMinutes] = useState(localStorage.getItem("minutes") ? localStorage.getItem("minutes") : 0);
  const [hours, setHours] = useState(localStorage.getItem('hours') ? localStorage.getItem('hours') : 0);
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div className="App">

      {!showTimer &&

        <div className="setter">
          <Form seconds={seconds} minutes={minutes} hours={hours} setMinutes={setMinutes} setHours={setHours} setSeconds={setSeconds} />

          <button type='submit' onClick={(e) => {
            e.preventDefault();
            // console.log(seconds);
            // console.log(minutes);
            // console.log(hours);

            localStorage.setItem("seconds", seconds)
            localStorage.setItem("minutes", minutes)
            localStorage.setItem("hours", hours)
            setShowTimer(true)

          }}> Start </button>

          <div className="displayTime">
            <h1>{hours}</h1>
            <h1>{minutes}</h1>
            <h1>{seconds}</h1>
          </div>

        </div>
      }

      {showTimer && <Timer hours={hours} minutes={minutes} seconds={seconds} showTimer={showTimer} />}

    </div>
  );
}

export default App;
