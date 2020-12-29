import styled from "styled-components";
import { NUM_OF_OCTAVES } from "../../constants";
import { getListOfNotes } from "../../helpers/get-list-of-notes";
import { Key } from "./keys";

interface PianoRollProps {
  selectedNoteIdx: number | undefined;
  chordNotes: number[];
  onKeySelect(index: number): void;
}

export const PianoRoll: React.FC<PianoRollProps> = ({
  selectedNoteIdx,
  chordNotes,
  onKeySelect,
}) => {
  const PianoRollContainer = styled.div`
    display: flex;
    overflow: scroll;
    max-width: 100%;
    height: 500px;
  `

  const isKeyActive = (keyIndex: number): boolean => !!(selectedNoteIdx && (keyIndex === selectedNoteIdx || chordNotes.includes(keyIndex - (selectedNoteIdx || 0))))

  return (
    <PianoRollContainer>
      {
        getListOfNotes(NUM_OF_OCTAVES).map((note, index) =>
          <Key
            isRoot={index === selectedNoteIdx}
            isEbony={note.color === 'ebony'}
            isActive={isKeyActive(index)}
            onKeyClick={() => onKeySelect(index)}>
          </Key>
        )}
    </PianoRollContainer>
  )
}