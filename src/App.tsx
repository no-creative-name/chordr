import { useState } from "react";
import styled from "styled-components";
import { ChordSelection } from "./components/chord-selection";
import { InversionSelection } from "./components/inversion-selection";
import { PianoRoll } from "./components/piano-roll"
import { BREAKPOINTS, COLORS, getChordNotesForKey } from "./constants";
import { getChordName } from "./helpers/get-chord-name";
import { invertChord } from "./helpers/invert-chord";

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${COLORS.darkPurple};
`

const Heading = styled.h1`
  color: white;
`

const ChordDisplay = styled.p`
  font-size: 20px;
  color: white;

  @media (min-width: ${BREAKPOINTS.desktop}) {
    font-size: 50px;
  }
`

const ButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  > *:not(:first-child) {
    margin-top: 20px; 
  }

  @media (min-width: ${BREAKPOINTS.desktop}) {
    flex-direction: row;

    > *:not(:first-child) {
      margin-left: 50px; 
    }
  }
`

export const App: React.FC = () => {
  const [rootNoteIdx, setRootNoteIdx] = useState<number>();
  const [chordKey, setChordKey] = useState<string>();
  const [inversionIdx, setInversionIdx] = useState<number>(0);

  return (
    <Background>
      <Heading>CHORDR</Heading>
      <ChordDisplay>
        {rootNoteIdx && chordKey ? getChordName(rootNoteIdx, chordKey) : 'Please select a root note and a chord'}
      </ChordDisplay>
      <PianoRoll
        rootIdx={rootNoteIdx}
        chordNotes={chordKey ? invertChord(getChordNotesForKey(chordKey), inversionIdx) : []}
        onKeySelect={key => {
          setInversionIdx(0);
          if (key === rootNoteIdx) {
            setRootNoteIdx(undefined);
            setChordKey(undefined);
          } else {
            setRootNoteIdx(key);
          }
        }}>
      </PianoRoll>
      <ButtonArea>
        <ChordSelection
          isDisabled={!rootNoteIdx}
          selectedChordKey={chordKey}
          onChordSelect={cKey => {
            setInversionIdx(0);
            setChordKey(chordKey === cKey ? undefined : cKey);
          }}>
        </ChordSelection>
        {
          chordKey ?
            <InversionSelection
              numberOfInversions={getChordNotesForKey(chordKey).length}
              selectedInversionIdx={inversionIdx}
              onInversionSelect={iIdx => {
                setInversionIdx(inversionIdx === iIdx ? 0 : iIdx);
              }}>
            </InversionSelection> : ''
        }
      </ButtonArea>
    </Background>
  );
}

export default App;
