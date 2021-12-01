import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  padding: 0.5em 0em;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey1};
`;

export const Error = styled.span`
  padding: 2em;
  color: ${({ theme }) => theme.colors.red};
`;
