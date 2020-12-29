import styled from "styled-components";
import { COLORS } from "../../constants";

export const Button = styled.button<{ isActive: boolean }>`
  width: 80px;
  height: 80px;
  background-color: ${(props) => props.isActive ? COLORS.coolGrey : 'white'};
  border: unset;
  font-weight: 600;
  cursor: pointer;
`