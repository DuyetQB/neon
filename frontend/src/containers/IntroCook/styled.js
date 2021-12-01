import styled from "styled-components";
import { media } from "styles/breakPoint";

export const WrapBanner = styled.div`
  padding: 20px 0px;
`;
export const WrapText = styled.div`
  padding: 20px 60px 20px 20px;
`;
export const WrapImage = styled.div``;

export const WrapTextFlex = styled.div`
  display: flex;
  padding: 10px 0px;
`;
export const IconRight = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

export const WrapBtn = styled.div`
  padding: 10px 0px;

  & .active {
    ${"" /* box-shadow: ${({ theme }) => theme.boxShadow.layoutBox}; */}

    box-shadow:0px 5px 13px rgba(10, 210, 660, 0.2);
  }
  & button {
    ${media.phone`
  margin-top:20px;
  
  `}
    ${media.tablet`
 
  font-size: 14px;
  `}
    &:hover {
      box-shadow: ${({ theme }) => theme.boxShadow.buttonBox};
    }
  }
`;
