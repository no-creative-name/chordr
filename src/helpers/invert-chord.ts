export const invertChord = (chord: number[], inversion: number = 0): number[] => {

    const toTranspose = chord.slice(0, inversion);

    return [
      ...chord.slice(inversion, chord.length),
      ...toTranspose.map(note => note + 12)
    ]
} 