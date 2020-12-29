import { NOTES } from "../constants";

export const getChordName = (rootNoteIdx: number, chord: string) => {
  return `${NOTES[rootNoteIdx % 12].name} ${chord}`
}