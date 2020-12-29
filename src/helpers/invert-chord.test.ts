import { invertChord } from "./invert-chord"

describe('invertChord', () => {
  test('inverts chords correctly x 1', () => {
    expect(invertChord([0, 3, 5], 1)).toEqual([3, 5, 12]);
    expect(invertChord([0, 4, 7, 11], 1)).toEqual([4, 7, 11, 12]);
  });
  test('inverts chords correctly x 2', () => {
    expect(invertChord([0, 3, 5], 2)).toEqual([5, 12, 15]);
    expect(invertChord([0, 4, 7, 11], 2)).toEqual([7, 11, 12, 16]);
  });
})