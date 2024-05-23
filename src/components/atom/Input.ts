import styled from "styled-components";
import { colors } from "./colors";

export const Input = styled.input`
  width: 100%;
  color: ${colors.black.main};
  border-image: none;
  font-size: 14px;
  border: 1px solid ${colors.blue.main};
  border-radius: 4px;
  background-color: ${colors.white.light};
  padding-block: 8px;
  padding-inline: 8px;

  &:disabled {
    border: 1px solid ${colors.black.light};
    background-color: ${colors.black.hover};
    cursor: default;
  }
`;
