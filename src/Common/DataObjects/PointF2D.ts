// Represent a point on a plane, with (x,y) coordinates
export class PointF2D {
    public x = 0;
    public y = 0;

    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    public static get Empty(): PointF2D {
        return new PointF2D();
    }
    public static pointsAreEqual(p1: PointF2D, p2: PointF2D): boolean {
        return (p1.x === p2.x && p1.y === p2.y);
    }
    public ToString(): string {
        return "[" + this.x + ", " + this.y + "]";
    }
}
