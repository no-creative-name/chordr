import { CHORDS } from "../../constants"
import { Button } from "../button"
import { ButtonContainer } from "../button-container"

interface ChordSelectionProps {
  isDisabled: boolean;
  selectedChordKey: string | undefined;
  onChordSelect(chordKey: string): void;
}

export const ChordSelection: React.FC<ChordSelectionProps> = ({
  isDisabled,
  selectedChordKey,
  onChordSelect,
}) => {
  return (
    <ButtonContainer>
      {
        CHORDS.map(chord =>
          <Button
            disabled={isDisabled}
            onClick={() => onChordSelect(chord.key)}
            isActive={chord.key === selectedChordKey}>{chord.key}
          </Button>)
      }
    </ButtonContainer>
  )
}