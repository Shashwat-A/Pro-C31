class Particle{
    constructor(x, y) {
        var options = {
            isStatic: false,
            restitution: 0.4,
            weight: 100.0,
            density: 8.0
        }
        this.body = Bodies.circle(x, y, 10, options);
        this.body.velocityY = 10;
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill(this.color);
        ellipse(pos.x, pos.y, 10, 10);
    }
}