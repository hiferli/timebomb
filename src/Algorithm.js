let hours = 0;
let minutes = 0;
let seconds = 5;

const convertTime = () => {
    // Seconds to Minutes
    minutes += parseInt(seconds / 60);
    seconds = (seconds % 60);

    // Minutes to Hours
    hours += parseInt(minutes / 60);
    minutes = (minutes % 60);
}

const totalTime = () => {
    return (((hours * 60 * 60) + (minutes * 60) + (seconds)) * 1000);
}


const timer = setInterval(() => {
    if (seconds === 0 && minutes === 0 && hours === 0) {
        clearInterval(timer);
    }
    
    if (minutes === 0) {
        if (hours) {
            hours -= 1;
            minutes += 60;
        }
    }

    if (seconds == 1) {
        if (minutes) {
            minutes -= 1;
            seconds += 60;
        }
    }

    console.log(hours + " " + minutes + " " + seconds);
    seconds -= 1;
    
}, 1000);


console.log("Hlow")