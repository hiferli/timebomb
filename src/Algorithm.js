class Timer {
    constructor(hours , minutes , seconds){
        this.hours = hours;    
        this.minutes = minutes;
        this.seconds = seconds;
        this.convertTime();
    }

    getTime(){
        console.log(this.hours + " " + this.minutes + " " + this.seconds);
    }
    
    convertTime = () => {
        // Seconds to Minutes
        this.minutes += parseInt(this.seconds / 60);
        this.seconds = (this.seconds % 60);
    
        // Minutes to Hours
        this.hours += parseInt(this.minutes / 60);
        this.minutes = (this.minutes % 60);
    }
    
    timer = setInterval(() => {
        if (this.seconds === 0 && this.minutes === 0 && this.hours === 0) {
            clearInterval(this.timer);
        }
        
        if (this.minutes === -1) {
            if (this.hours) {
                this.hours -= 1;
                this.minutes += 60;
            }
        }
    
        if (this.seconds == -1) {
            if (this.minutes) {
                this.minutes -= 1;
                this.seconds += 60;
            }
        }
    
        console.log(this.hours + " " + this.minutes + " " + this.seconds);
        this.seconds -= 1;
        
    }, 1000);
}

const time = new Timer(0 , 1 , 10);
time.timer;

