import styled from "styled-components";
import { media } from "styles/breakPoint";
export const WrapDishesList = styled.div`
  padding: 20px 0px;
`;
export const WrapText = styled.div`
  text-align: center;
`;
export const WrapSlide = styled.div`
  padding: 40px 0px;
  .active {
    background: linear-gradient(
      70deg,
      ${({ theme }) => theme.colors.blue2},
      ${({ theme }) => theme.colors.blue1}
    );
    box-shadow: ${({ theme }) => theme.boxShadow.buttonBox};
    & i {
      color: ${({ theme }) => theme.colors.white1};
    }
  }
`;
export const SlideItem = styled.div`
  padding: 25px;
  margin-right: 15px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.greenSky3};
  text-aligns: center;
  text-transform: uppercase;
  transition: background 0.3s ease;
  display: flex;
  justify-content: center;

  align-items: center;
  flex-direction: column;

  &:hover {
    background: ${({ theme }) => theme.colors.blue2};
    color: ${({ theme }) => theme.colors.white1};
    box-shadow: ${({ theme }) => theme.boxShadow.buttonBox};
  }
`;

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.white1};
  border-radius: ${({ theme }) => theme.borderRadius.xxl};
  ${media.smallPhone`
  width:200px;
  height:200px;
  `}
`;

export const ButtonSlide = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;

  & button {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.blue1};
    outline: none;
    border-radius: ${({ theme }) => theme.borderRadius.xxl};

    background: ${({ theme }) => theme.colors.white1};
    transition: all 0.4s ease;
    i {
      color: ${({ theme }) => theme.colors.blue1};
    }

    &:hover {
      background: linear-gradient(
        70deg,
        ${({ theme }) => theme.colors.blue2},
        ${({ theme }) => theme.colors.blue1}
      );
      box-shadow: ${({ theme }) => theme.boxShadow.buttonBox};
      & i {
        color: ${({ theme }) => theme.colors.white1};
      }
    }
  }
`;

export const BtnNext = styled.button`
  margin: 10px;
`;

export const BtnPrev = styled.button`
  margin: 10px;
`;
