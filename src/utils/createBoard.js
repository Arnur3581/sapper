import { increaseNeighbors } from "./increaseNeighbors";

export const createBoard = (size, ignoreCoordinates) => {
  const [ignoreX, ignoreY] = ignoreCoordinates;

  let board = Array(size)
    .fill()
    .map(() => Array(size).fill(0));

  for (let i = 0; i < size; ) {
    const x = Math.floor(Math.random() * size);
    const y = Math.floor(Math.random() * size);

    if (x === ignoreX && y === ignoreY) continue;
    if (board[x][y] === "B") continue;

    board[x][y] = "B";

    increaseNeighbors(x, y, board);

    i++;
  }

  return board;
};
