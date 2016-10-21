/**
 * Created by yangxu on 16-10-22.
 */

interface ClockInterface {
    currentTime: Date;
    setTime(date: Date);
}

class Clock implements ClockInterface {
    currentTime: Date;

    setTime(date: Date) {

        this.currentTime = date;
    }

    constructor(currentTime: Date) {
        this.currentTime = currentTime;
    }
}