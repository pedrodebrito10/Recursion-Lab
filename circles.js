function drawRecursiveCircles(x, y, radius, depth) {
  if (depth <= 0) {
    return; 
  }
  

  ellipse(x, y, radius * 2, radius * 2); 

  drawRecursiveCircles(x + radius / 2, y, radius / 2, depth - 1);
  drawRecursiveCircles(x, y + radius / 2, radius / 2, depth - 1);
}
