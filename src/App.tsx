import { useState } from "react";
import styled from "styled-components";
import { ChordSelection } from "./components/chord-selection";
import { PianoRoll } from "./components/piano-roll"
import { BREAKPOINTS, CHORDS, COLORS } from "./constants";
import { getChordName } from "./helpers/get-chord-name";

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${COLORS.darkPurple};
`

const ChordDisplay = styled.p`
  font-size: 20px;
  color: white;

  @media (min-width: ${BREAKPOINTS.desktop}) {
    font-size: 50px;
  }
`

export const App: React.FC = () => {
  const [rootNodeIdx, setRootNodeIdx] = useState<number>();
  const [chordKey, setChordKey] = useState<keyof typeof CHORDS>();

  const reset = () => {
    setRootNodeIdx(undefined);
    setChordKey(undefined);
  }

  return (
    <Background>
      <ChordDisplay>
        {rootNodeIdx && chordKey ? getChordName(rootNodeIdx, chordKey) : 'Please select a root note and a chord'}
      </ChordDisplay>
      <PianoRoll
        selectedNoteIdx={rootNodeIdx}
        chordNotes={chordKey ? CHORDS[chordKey] : []}
        onKeySelect={key => {
          if (key === rootNodeIdx) {
            reset()
          } else {
            setRootNodeIdx(key);
          }
        }}>
      </PianoRoll>
      <ChordSelection
        isDisabled={!rootNodeIdx}
        selectedChordKey={chordKey}
        onChordSelect={cKey => {
          setChordKey(chordKey === cKey ? undefined : cKey);
        }}>
      </ChordSelection>
    </Background>
  );
}

export default App;
