import styled from "styled-components"
import { CHORDS, COLORS } from "../../constants"
import { getObjectKeys } from "../../helpers/get-object-keys"

interface ChordSelectionProps {
  isDisabled: boolean;
  selectedChordKey: keyof typeof CHORDS | undefined;
  onChordSelect(chordKey: keyof typeof CHORDS): void;
}

const ChordButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  gap: 10px;
  margin-top: 20px;
`

const ChordButton = styled.button<{ isActive: boolean }>`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.isActive ? COLORS.coolGrey : 'white'};
  border: unset;
  font-weight: 600;
`

export const ChordSelection: React.FC<ChordSelectionProps> = ({
  isDisabled,
  selectedChordKey,
  onChordSelect,
}) => {
  return (
    <ChordButtonContainer>
      {
        getObjectKeys(CHORDS).map(chordKey =>
          <ChordButton
            disabled={isDisabled}
            onClick={() => onChordSelect(chordKey)}
            isActive={chordKey === selectedChordKey}>{chordKey}</ChordButton>)
      }
    </ChordButtonContainer>
  )
}