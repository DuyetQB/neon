import styled from "styled-components";
import { media } from "styles/breakPoint";

export const WrapPopular = styled.div`
  padding: 20px 0px;
  position: relative;
`;
export const WrapText = styled.div`
  padding: 20px;
  text-align: center;
`;
export const PopularProducts = styled.div`
  padding-top: 30px;
`;
export const ProductItem = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 0.1px solid ${({ theme }) => theme.colors.blue2};
  padding: 10px;
  text-align: center;
  margin: 20px;
  transition: all 0.3s ease;
 
  ${media.tablet`
  margin: 5px;
  padding: 5px;
  `}
  &:hover {
    background: #5691ef;
    ${"" /* background: ${({ theme }) => theme.colors.blue2}; */}
    color: ${({ theme }) => theme.colors.white1};
    box-shadow: ${({ theme }) => theme.boxShadow.buttonBox};

     & button {
      background: ${({ theme }) => theme.colors.white1};
      color: ${({ theme }) => theme.colors.blue1};
      font-weight: ${({ theme }) => theme.fontWeight.extraBold}
    } 
    }
  }

  & img {
    width: 230px;
    height: 200px;
    object-fit: cover;
  }
`;

export const WrapCollections = styled.div`
  padding: 20px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Price = styled.h3``;

export const SeeAllMenu = styled.div`
  padding: 60px 0px;
  position: relative;
  display: flex;
  justify-content: center;
`;
