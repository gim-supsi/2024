function setup() {
	createCanvas(windowWidth, windowHeight)
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function draw() {
	background(200)
	noStroke()

	translate(width/2, height/2)

	const num = 12

	randomSeed(0)

	for(let j=0; j<num; j++) {

		push()
		for (let i=0; i<10; i++) {
			const l = random(20, 80)
			rotate(noise(j  + frameCount * 0.002) * 2 - 1)
			fill(0)
			rect(0, -10, l, 20)
			fill(255)
			circle(0, 0, 20)
			translate(l, 0)
			scale(0.9)
		}
		pop()

		rotate(TAU/num)
	}

}