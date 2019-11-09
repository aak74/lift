export interface Control {
  direction: string;
  isActive: boolean;
}

export interface Floor {
  number: number;
  controls: Control[]
}
