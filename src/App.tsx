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
  min-height: 100vh;
  background-color: ${COLORS.darkPurple};
  padding: 20px 0;
`

const Headline1 = styled.h1`
  color: white;
`

const Headline2 = styled.h2`
  color: white;
`

const ChordDisplay = styled.p`
  margin: 0 0 20px 0;
  font-size: 20px;
  color: white;

  @media (min-width: ${BREAKPOINTS.desktop}) {
    font-size: 50px;
  }
`

const ButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

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
      <Headline1>CHORDR</Headline1>
      <ChordDisplay>
        {rootNoteIdx && chordKey ? getChordName(rootNoteIdx, chordKey) : 'Pick a root note and a chord'}
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
      <ButtonArea> <div>
        <Headline2>Chord</Headline2>
        <ChordSelection
          isDisabled={!rootNoteIdx}
          selectedChordKey={chordKey}
          onChordSelect={cKey => {
            setInversionIdx(0);
            setChordKey(chordKey === cKey ? undefined : cKey);
          }}>
        </ChordSelection>
      </div>
        {
          chordKey
            ? <div>
              <Headline2>Inversion</Headline2>
              <InversionSelection
                numberOfInversions={getChordNotesForKey(chordKey).length}
                selectedInversionIdx={inversionIdx}
                onInversionSelect={iIdx => {
                  setInversionIdx(inversionIdx === iIdx ? 0 : iIdx);
                }}>
              </InversionSelection>
            </div>
            : ''
        }
      </ButtonArea>
    </Background>
  );
}

export default App;
