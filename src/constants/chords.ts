import { Chord } from "../interfaces"

export const CHORDS: Chord[] = [
  {
    key: 'major',
    notes: [0, 4, 7],
  },
  {
    key: 'm',
    notes: [0, 3, 7],
  },
  {
    key: '7',
    notes: [0, 4, 7, 10],
  },
  {
    key: 'm7',
    notes: [0, 3, 7, 10],
  },
  {
    key: 'aug',
    notes: [0, 4, 8],
  },
  {
    key: 'dim',
    notes: [0, 3, 6],
  },
  {
    key: 'dim7',
    notes: [0, 3, 6, 9],
  },
]

export const getChordNotesForKey = (key: string): number[] => {
  return (CHORDS.find(chord => chord.key === key) as Chord).notes;
} 