let posizioneX, posizioneY
let velX, velY

function setup() {
	createCanvas(windowWidth, windowHeight)

	posizioneX = width/2
	posizioneY = height/2

	velX = random(-10, 10)
	velY = random(-10, 10)
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function keyPressed() {
	if (key == 's') {
		save('pattern.png')
	}
}

function draw() {

	posizioneX = posizioneX + velX
	posizioneY = posizioneY + velY

	if (posizioneX >= width || posizioneX < 0) {
		velX = -velX
	}

	if (posizioneY >= height || posizioneY < 0) {
		velY = -velY
	}

	// background(200)

	fill(frameCount % 2 * 255)
	noStroke()

	rectMode(CENTER)
	rect(posizioneX, posizioneY, (sin(frameCount*0.1) * 0.5 + 0.5) * 200 + 10)
}
