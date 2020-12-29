import { NOTES } from "../constants";
import { Note } from "../interfaces";

export const getListOfNotes = (numOfOctaves: number = 1): Note[] => {
  const notes = [];
  for (let currentOctave = 0; currentOctave < numOfOctaves; currentOctave++) {
    notes.push(...NOTES);
  }
  return notes;
}