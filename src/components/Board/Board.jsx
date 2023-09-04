import { useEffect, useState } from "react";

import { getSize } from "../../utils/getSize";
import { createBoard } from "../../utils/createBoard";

export const Board = ({ mode }) => {
  const size = getSize(mode);
  const emptyBoard = Array(size)
    .fill()
    .map(() => Array(size).fill(null));

  const [isPlaying, setPlaying] = useState(false);
  const [board, setBoard] = useState(emptyBoard);

  const startGame = (ignoreCoordinates) => {
    if (isPlaying === true) return;

    setBoard(() => createBoard(size, ignoreCoordinates));

    setPlaying(true);
  };

  useEffect(() => {
    setBoard(emptyBoard);

    setPlaying(false);
  }, [size]);

  return (
    <div className={"board " + "board-" + mode}>
      {board.map((_, x) =>
        board.map((_, y) => (
          <div
            key={y}
            className="cell"
            onClick={() => {
              if (isPlaying === false) {
                startGame([x, y]);
                return;
              }
            }}
          >
            {board[x][y] === "B" ? "💣" : board[x][y]}
          </div>
        ))
      )}
    </div>
  );
};
