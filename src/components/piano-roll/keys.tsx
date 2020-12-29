import styled from "styled-components";
import { BREAKPOINTS, COLORS } from "../../constants";

interface StyledKeyProps {
  isActive: boolean;
  isRoot: boolean;
}

const getKeyColor = (isEbony: boolean, isActive: boolean, isRoot: boolean) => {
  if (isActive && isRoot) {
    return COLORS.magentaHaze;
  }
  if (isActive) {
    return COLORS.coolGrey;
  }
  if (isEbony) {
    return 'black';
  }
  return 'white';
}

export const IvoryKey = styled.div<StyledKeyProps>`
  width: 16vw;
  height: 100%;
  transition: background-color 0.1s;
  background-color: ${props => getKeyColor(false, props.isActive, props.isRoot)};
  flex-shrink: 0;
  cursor: pointer;

  &:not(:last-child) {
    border-right: 1px solid black;
  }

  @media (min-width: ${BREAKPOINTS.desktop}) {
    width: 6vw;
  }
`

export const EbonyKey = styled.div<StyledKeyProps>`
  width: 12vw;
  height: 60%;
  transition: background-color 0.1s;
  background-color: ${props => getKeyColor(true, props.isActive, props.isRoot)};
  margin-left: -6vw;
  z-index: 2;
  flex-shrink: 0;
  cursor: pointer;

  + ${IvoryKey} {
    margin-left: -6vw;
  }

  @media (min-width: ${BREAKPOINTS.desktop}) {
    width: 3vw;
    margin-left: -1.5vw;

    + ${IvoryKey} {
      margin-left: -1.5vw;
    }
  }
`

interface KeyProps extends StyledKeyProps {
  isEbony: boolean;
  onKeyClick(): void;
}

export const Key: React.FC<KeyProps> = ({
  isActive,
  isRoot,
  isEbony,
  onKeyClick,
}) => {
  return isEbony
    ? <EbonyKey isActive={isActive} isRoot={isRoot} onClick={() => onKeyClick()}></EbonyKey>
    : <IvoryKey isActive={isActive} isRoot={isRoot} onClick={() => onKeyClick()}></IvoryKey>
}