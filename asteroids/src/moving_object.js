function MovingObject (options) {
        this.pos = options.pos;
        this.vel = options.vel;
        this.radius = options.radius;
        this.color = options.color;
}

MovingObject.prototype.draw= function(ctx) {
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.fillStyle = this.color;
    ctx.fill();
}

MovingObject.prototype.move= function(){
    let [x,y] = this.pos;
    x += this.vel[0]
    y += this.vel[1];
    this.pos = [x,y];
    // this.draw(ctx)
}



module.exports = MovingObject;