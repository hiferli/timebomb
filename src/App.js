import { useState } from 'react';
import './App.css';
import Form from './Pages/Form';
import Timer from './Pages/Timer';

function App() {

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div className="App">
      <Form seconds={seconds} minutes={minutes} hours={hours} setMinutes={setMinutes} setHours={setHours} setSeconds={setSeconds} />

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

        localStorage.setItem("seconds", seconds)
        localStorage.setItem("minutes", minutes)
        localStorage.setItem("hours", hours)
        setShowTimer(true)

      }}></button>

      {showTimer || <Timer seconds={seconds} hours={hours} minutes={minutes} />}

    </div>
  );
}

export default App;
