interface GameState {
  cells: Cell[];
  status: string | null;
}

interface Cell {
  text: string;
  playable: boolean;
  x: number;
  y: number;
}

export type { GameState, Cell }