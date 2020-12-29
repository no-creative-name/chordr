import { useEffect, useState } from "react";
import styled from "styled-components";
import { NUM_OF_OCTAVES } from "../../constants";
import { getListOfNotes } from "../../helpers/get-list-of-notes";
import { Key } from "./keys";

interface PianoRollProps {
  rootIdx: number | undefined;
  chordNotes: number[];
  onKeySelect(index: number): void;
}

const PianoRollContainer = styled.div`
  display: flex;
  overflow: scroll;
  max-width: 100%;
  height: 50vh;
`

export const PianoRoll: React.FC<PianoRollProps> = ({
  rootIdx,
  chordNotes,
  onKeySelect,
}) => {
  const [isRootIdxActive, setIsRootIdxActive] = useState(true);

  useEffect(() => {
    if (rootIdx && chordNotes.length && chordNotes.findIndex(note => note === 0) !== -1) {
      setIsRootIdxActive(true);
    } else if (rootIdx && chordNotes.length === 0) {
      setIsRootIdxActive(true);
    } else {
      setIsRootIdxActive(false);
    }
  }, [rootIdx, chordNotes]);

  const isKeyRoot = (keyIndex: number): boolean => !!rootIdx && (keyIndex - rootIdx) % 12 === 0

  const isKeyActive = (keyIndex: number): boolean => {
    if (rootIdx && keyIndex === rootIdx) {
      return isRootIdxActive;
    }
    if (rootIdx && chordNotes.length) {
      return chordNotes.includes(keyIndex - rootIdx);
    }
    return false;
  }

  return (
    <PianoRollContainer>
      {
        getListOfNotes(NUM_OF_OCTAVES).map((note, index) =>
          <Key
            isRoot={isKeyRoot(index)}
            isEbony={note.color === 'ebony'}
            isActive={isKeyActive(index)}
            onKeyClick={() => onKeySelect(index)}>
          </Key>
        )}
    </PianoRollContainer>
  )
}