export function rotateMatrix(x = 0, y = 0, rad = 0, cx = 0, cy = 0) {
  (x -= cx), (y -= cy);
  var newX = x * Math.cos(rad) - y * Math.sin(rad);
  var newY = x * Math.sin(rad) + y * Math.cos(rad);
  (newX += cx), (newY += cy);
  return {
    x: newX,
    y: newY,
  };
}

// console.log(rotateMatrix(1, 1, 1));
