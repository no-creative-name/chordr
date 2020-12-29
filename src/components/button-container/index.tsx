import styled from "styled-components";
import { BREAKPOINTS } from "../../constants";

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;

  @media (min-width: ${BREAKPOINTS.desktop}) {
    gap: 15px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`