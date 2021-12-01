import React from "react";
import * as S from "./styled";
import { Heading2, Text } from "components/common/Text";
import ImageClientsSaid from "images/clients-said-psd-final.png";

export default function Banner() {
  return (
    <div className="container">
      <S.WrapBanner>
        <div className="row">
          <div className="col-md-5">
            <S.WrapImage>
              <img src={ImageClientsSaid} alt="" />
            </S.WrapImage>
          </div>
          <div className="col-md-7">
            <S.WrapText>
              <Heading2 padding="40px 0px 0px 0px" size="30px">
                What Our clients say about us
              </Heading2>
              <Text size="18px" isGrey mt="20px">
                I am grateful to the company for the timely and exceptionally
                accurate delivery of food . Everything is very tasty and hight
                quality . And it follows that the weight loss plan i have chosen
                really works ! I was surpriced
              </Text>
            </S.WrapText>
          </div>
        </div>
      </S.WrapBanner>
    </div>
  );
}
