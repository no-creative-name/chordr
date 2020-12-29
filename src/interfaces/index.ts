export interface Note {
  name: string,
  altName?: string;
  color: 'ebony' | 'ivory'
}

export interface Chord {
  key: string;
  notes: number[];
}