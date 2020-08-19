{
    interface ClockConstructor {
        new (hour: number, minute: number): void
    }

    interface ClockInterface {
        tick():void
    }

    const Clock: ClockConstructor = class Clock implements ClockInterface {
        constructor(h: number, m: number) {}
        tick() {
            console.log("beep beep");
        }
    }
}