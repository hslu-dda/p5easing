function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (let i = 0; i < 30; i++) {
    let xPos = map(i, 0, 30, 10, width - 20);
    let t = i / 30; // 0 → 1
    let v = ease(10, 150, t, "easeInOutQuintic");
    rect(xPos, width / 2, 10, v);
  }
}
