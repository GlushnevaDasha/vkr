import styled from "styled-components";
import { colors } from "./colors";

export const Form = styled.form`
  width: 384px;
  padding: 32px;
  margin: 0 auto;
  background: ${colors.white.main};
  box-shadow: 0 4px 32px -4px rgba(0, 0, 0, 0.8);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FormHeader = styled.h4`
  color: ${colors.black.main};
  margin-bottom: 8px;
`;
