function initXY(x, y) {
  const posX = [x];
  const posY = [y];

  for (let i = 1; i <= 20; i++) {
    posX.push(x + i * 40);
    posY.push(y + i * 30);
  }

  return { posX, posY };
}

console.log(initXY(10, 20));
