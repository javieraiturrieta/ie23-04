function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
let recursionLevel = 4; // Nivel de recursión inicial
let backgroundColor;

function setup() {
  createCanvas(400, 400);
  backgroundColor = color(135, 206, 250); // Color de fondo celeste
  background(backgroundColor);
  noFill();
  stroke(255, 0, 255); // Color de los círculos magentas
  noLoop();
  
  // Crea una barra de nivelación
  createP('Recursion Level');
  let slider = createSlider(1, 7, recursionLevel, 1);
  slider.input(function() {
    recursionLevel = slider.value();
    background(backgroundColor);
    recursiveCircles(width / 2, height / 2, 150, recursionLevel);
  });
}

function draw() {
  // La función draw solo se ejecuta una vez en este caso, 
  // ya que hemos generado todo en el setup
}

function recursiveCircles(x, y, d, level) {
  ellipse(x, y, d);
  if (level > 1) {
    let newD = d * 0.7;
    let offset = (d - newD) / 2;
    recursiveCircles(x - offset, y, newD, level - 1);
    recursiveCircles(x + offset, y, newD, level - 1);
  }
}