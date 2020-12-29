import styled from "styled-components"
import { COLORS } from "../../constants"

interface InversionSelectionProps {
  numberOfInversions: number;
  selectedInversionIdx: number | undefined;
  onInversionSelect(inversionIndex: number): void;
}

const InversionButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 15px;
`

const InversionButton = styled.button<{ isActive: boolean }>`
width: 80px;
height: 80px;
  background-color: ${(props) => props.isActive ? COLORS.coolGrey : 'white'};
  border: unset;
  font-weight: 600;
  cursor: pointer;
`

export const InversionSelection: React.FC<InversionSelectionProps> = ({
  numberOfInversions,
  selectedInversionIdx,
  onInversionSelect,
}) => {
  return <InversionButtonContainer>
    {
      Array.from(Array(numberOfInversions)).map((_, index) => <InversionButton
        isActive={selectedInversionIdx === index}
        onClick={() => onInversionSelect(index)}
      >
        {index}
      </InversionButton>)
    }
  </InversionButtonContainer>
}