
function setup(){
    createCanvas(600, 400);
    background(0)
}


px=0
py=0

vx=0.5
vy=0.5
radius = 30
function draw () {

    background(0)

    px = px + vx
    py = py + vy

    ellipse(px, py, radius, radius);
}