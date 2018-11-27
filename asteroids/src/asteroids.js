const MovingObject = require("./moving_object");
const Util = require("./utils.js");

let DEFAULT = {color: "white", radius: 50}

function Asteroid(options) {
    options.vector = Util.randomVec(Math.random() * 100);
    options.color = options.color || DEFAULT.color;
    options.radius = options.radius || DEFAULT.radius;
    MovingObject.call(this, options)
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;