const MovingObject = require("./moving_object.js")
const Asteroid = require('./asteroids');
const Util = require("./utils.js")

window.MovingObject = MovingObject;
window.Asteroid = Asteroid;

document.addEventListener("DOMContentLoaded", function(){
    const canvasEl = document.getElementById("game-canvas");
    window.ctx = canvasEl.getContext("2d");
})
