function setup() {
	createCanvas(windowWidth, windowHeight)
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function draw() {
	background(220)

	noStroke()
	fill(0)
	rect(0, height/3 * 0, second() / 60 * width, height/3)
	rect(0, height/3 * 1, minute() / 60 * width, height/3)
	rect(0, height/3 * 2, hour()   / 24 * width, height/3)

	// let s = second()
	// if (s < 10) {
	// 	s = "0" + s
	// }
	// // alternativa: s = s.padLeft(2, '0')

	// let m = minute()
	// if (m < 10) {
	// 	m = "0" + m
	// }

	// let h = hour()
	// if (h < 10) {
	// 	h = "0" + h
	// }

	// textAlign(CENTER, CENTER)
	// textSize(30)
	// fill(255)

	// const ora = h + ":" + m + ":" + s
	// text(ora, width/2, height/2)

	// const totaleSecondi = hour() * 60 * 60 + minute() * 60 + second()
	// text(totaleSecondi, width/2, height/2)

}
