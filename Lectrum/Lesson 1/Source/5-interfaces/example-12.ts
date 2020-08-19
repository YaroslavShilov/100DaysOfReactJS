{
    interface ClockInterface {
        currentTime: Date;
    }

    class Clock implements ClockInterface {
        currentTime: Date = new Date();
        constructor(h: number, m: number) { }
    }
}