const gridSize = 4;
const cellSize = 20;
const cellGap = 2;

export default class Grid {
  #cells;
  constructor(gridElement) {
    gridElement.style.setProperty('--grid-size', gridSize);
    gridElement.style.setProperty('--cell-size', `${cellSize}vmin`);
    gridElement.style.setProperty('--cell-gap', `${cellGap}vmin`);
    this.#cells = createCellElements(gridElement).map(
      (cellElement, index) =>
        new Cell(cellElement, index % gridSize, Math.floor(index / gridSize))
    );
  }
}

class Cell {
  #cellElement;
  #x;
  #y;
  constructor(cellElement, x, y) {
    this.#cellElement = cellElement;
    this.#x = x;
    this.#y = y;
  }
}

function createCellElements(gridElement) {
  const cells = [];
  for (let i = 0; i < gridSize * gridSize; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cells.push(cell);
    gridElement.appendChild(cell);
  }
  return cells;
}
