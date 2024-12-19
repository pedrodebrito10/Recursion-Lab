function drawRecursiveCircles(x, y, radius, depth) {
  if (depth <= 0) {
    return; // Base case
  }
  
  // to draw current circle
  ellipse(x, y, radius * 2, radius * 2); 
  
  // to draw smaller circles on both axes
  drawRecursiveCircles(x + radius / 2, y, radius / 2, depth - 1);
  drawRecursiveCircles(x, y + radius / 2, radius / 2, depth - 1);
