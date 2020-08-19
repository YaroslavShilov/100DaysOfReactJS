{
    interface Point {
        readonly x: number;
        readonly y: number;
        set: (a:number) => void;
    }

    let p1: Point = { x: 10, y: 20, set(a) {this.x = a} };
    // p1.x = 5; // error!
    p1.set(1);
}
