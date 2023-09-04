export const increaseNeighbors = (x, y, board) => {
  const inc = (x, y) => {
    if (board[x]?.[y] === "B") return;

    if (typeof board[x]?.[y] === "undefined") return;

    board[x][y]++;
  };

  inc(x, y + 1);
  inc(x + 1, y + 1);
  inc(x + 1, y);
  inc(x + 1, y - 1);
  inc(x, y - 1);
  inc(x - 1, y - 1);
  inc(x - 1, y);
  inc(x - 1, y + 1);
};
