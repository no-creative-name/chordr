import { getListOfNotes } from "./get-list-of-notes"

describe('getListOfNotes', () => {
  test('returns empty array for number of octaves of < 0', () => {
    expect(getListOfNotes(-1)).toEqual([]);
  });
  test('returns empty array for number of octaves of 0', () => {
    expect(getListOfNotes(0)).toEqual([]);
  });
  test('returns array with correct length for number of octaves of 1', () => {
    expect(getListOfNotes(1)).toHaveLength(12);
  });
  test('returns array with correct length for number of octaves of 4', () => {
    expect(getListOfNotes(4)).toHaveLength(48);
  });
})