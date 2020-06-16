
//array to store every city(vector)
var cities = [];
//totalCities
var totalCities = 12;

var recordDistance;
var bestEver;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //creating cities and store them
  for (var i = 0; i < totalCities; i++) {
    var v = createVector(random(width), random(height));
    cities[i] = v;
  }
//calling to functions to calculate the destace
  var d = calcDistance(cities);
  recordDistance = d;
  bestEver = cities.slice();
}

function draw() {
  //drawing
  background(0);
  fill(255);
  noStroke();
  textSize(62);
  text(`Best: ${floor(recordDistance)}`, 50, 50);


  fill(255,0,255);
  //drawing cities
  for (var i = 0; i < cities.length; i++) {
    ellipse(cities[i].x, cities[i].y, 8, 8);

  }

  stroke(255);
  strokeWeight(1);
  noFill();

//drawing lines(distance) between nodes (cities)
  beginShape();
  for (var i = 0; i < cities.length; i++) {
    vertex(cities[i].x, cities[i].y);
  }
  endShape();

  stroke(255, 0, 255);
  strokeWeight(4);
  noFill();
  //drawing lines(best distance) between nodes (cities)
  beginShape();
  for (var i = 0; i < cities.length; i++) {
    vertex(bestEver[i].x, bestEver[i].y);
  }
  endShape();

  var i = floor(random(cities.length));
  var j = floor(random(cities.length));
  swap(cities, i, j);

  var d = calcDistance(cities);
  if (d < recordDistance) {
    recordDistance = d;
    bestEver = cities.slice();
  }
}

function swap(a, i, j) {
  var temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}
//this function to calculate the distance between nodes
function calcDistance(points) {
  var sum = 0;
  for (var i = 0; i < points.length - 1; i++) {
    var d = dist(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y);
    sum += d;
  }
  return sum;
}
