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

setTimeout(() => {
    setInterval(() => {
        console.log(totalTime());
        seconds -= 1;
    }, 1000);
}, totalTime());
    

console.log("Hlow")