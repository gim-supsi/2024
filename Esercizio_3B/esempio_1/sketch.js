
function setup() {
	createCanvas(windowWidth, windowHeight)
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}


function draw() {

	// background(255)

	stroke(0)
	fill(255, 0, 0)

	rect(20, 10, 80, 60)


	fill(255, 200, 66)
	rect(width - 80 - 20, 10, 80, 60)


	stroke(255, 128, 0)
	fill(0, 255, 255, 128)
	rect(50, 30, 80, 60)

	point(120, 140)

	// se i tre valori sono identici è possibile inserirne solo uno
	// stroke(255) equivale a stroke(255, 255, 255)
	stroke(0, 0, 255)
	line(100, 220, 300, 120)

	fill(0, 255, 128)
	circle( width/2, height/2, 90)

	noStroke()

	textSize(30)

	fill(mouseX, mouseY, random(255))
	text(mouseX + ", " + mouseY, mouseX, mouseY)

}
