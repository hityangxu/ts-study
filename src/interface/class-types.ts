/**
 * Created by yangxu on 16-10-22.
 */

interface ClockInterface {
    currentTime: Date;
    setTime(date: Date);

    new (m: number, n: number);
}

class Clock implements ClockInterface {
    currentTime: Date;

    setTime(date: Date) {

        this.currentTime = date;
    }


    // constructor(m: number, n:number){} constructor is in static side
}