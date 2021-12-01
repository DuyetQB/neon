import styled from "styled-components";
import { NavLink as Links } from "react-router-dom";

export const CartIconFloat = styled.div`
  width: 50px;
  height: 50px;
  border-radius: ${({ theme }) => theme.borderRadius.xxl};
  color: ${({ theme }) => theme.colors.white1};
  background: ${({ theme }) => theme.colors.blue2};
  position: fixed;
  top: 10px;
  left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Lists = styled.div`
  width: 300px;
  padding: 30px;
  background: ${({ theme }) => theme.colors.white1};
  z-index: 110;
  box-shadow: ${({ theme }) => theme.boxShadow.buttonBox};
  position: fixed;
  left: 117px;
  list-style-type: none;
  & li {
    margin-top: 20px;
  }
`;

export const Link = styled(Links)`
  color: ${({ theme }) => theme.colors.black};
  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.colors.blueDark};
  }
`;
