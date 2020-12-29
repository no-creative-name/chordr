import { Button } from "../button"
import { ButtonContainer } from "../button-container"

interface InversionSelectionProps {
  numberOfInversions: number;
  selectedInversionIdx: number | undefined;
  onInversionSelect(inversionIndex: number): void;
}

export const InversionSelection: React.FC<InversionSelectionProps> = ({
  numberOfInversions,
  selectedInversionIdx,
  onInversionSelect,
}) => {
  return <ButtonContainer>
    {
      Array.from(Array(numberOfInversions)).map((_, index) => <Button
        isActive={selectedInversionIdx === index}
        onClick={() => onInversionSelect(index)}
      >
        {index}
      </Button>)
    }
  </ButtonContainer>
}