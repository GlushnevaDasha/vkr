import styled, { css } from "styled-components";
import { colors } from "./colors";

export const Button = styled.button<{ $variant?: "out" | "text" }>`
  color: ${colors.blue.main};
  border-image: none;
  border: 1px solid ${colors.blue.main};
  border-radius: 4px;
  font-size: 14px;
  background-color: ${colors.white.light};
  cursor: pointer;
  padding-block: 2px;
  padding-inline: 4px;
  min-height: 34px;
  &:hover {
    background-color: ${colors.blue.hover};
  }

  &:disabled {
    border: 1px solid ${colors.black.light};
    color: ${colors.black.main};
    background-color: ${colors.black.hover};
    cursor: default;
  }

  ${({ $variant }) => {
    switch ($variant) {
      case "out":
        return css`
          color: ${colors.white.main};
          border: 1px solid ${colors.blue.main};
          background-color: ${colors.blue.main};

          &:hover {
            background-color: ${colors.blue.dark};
          }

          &:disabled {
            border: 1px solid ${colors.black.light};
            color: ${colors.black.main};
            background-color: ${colors.black.light};
            cursor: default;
          }
        `;
      case "text":
        return css`
          color: ${colors.blue.main};
          border: none;
          background-color: none;

          &:hover {
            background-color: ${colors.blue.hover};
          }

          &:disabled {
            border: none;
            background-color: none;
            color: ${colors.black.main};
            cursor: default;
          }
        `;
      default:
        return css``;
    }
  }}
`;
