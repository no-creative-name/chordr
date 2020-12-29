import styled from "styled-components"
import { CHORDS, COLORS } from "../../constants"

interface ChordSelectionProps {
  isDisabled: boolean;
  selectedChordKey: string | undefined;
  onChordSelect(chordKey: string): void;
}

const ChordButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 15px;
`

const ChordButton = styled.button<{ isActive: boolean }>`
  width: 80px;
  height: 80px;
  background-color: ${(props) => props.isActive ? COLORS.coolGrey : 'white'};
  border: unset;
  font-weight: 600;
  cursor: pointer;
`

export const ChordSelection: React.FC<ChordSelectionProps> = ({
  isDisabled,
  selectedChordKey,
  onChordSelect,
}) => {
  return (
    <ChordButtonContainer>
      {
        CHORDS.map(chord =>
          <ChordButton
            disabled={isDisabled}
            onClick={() => onChordSelect(chord.key)}
            isActive={chord.key === selectedChordKey}>{chord.key}</ChordButton>)
      }
    </ChordButtonContainer>
  )
}