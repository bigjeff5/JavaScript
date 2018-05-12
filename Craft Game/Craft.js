// Construct the Canvas
var CANVAS_WIDTH = 720;
var CANVAS_HEIGHT = 480;

var canvas = document.getElementById('craft');
var ctx = canvas.getContext('2d');

// Game Loop
window.requestAnimationFrame(function() {
    draw();
});

// bouncy-ball object


// Core Draw function
function draw() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

// Core Update function
function update() {

}