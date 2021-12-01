import React from "react";
import * as S from "./styled";
import { Heading2, Text } from "components/common/Text";
import BannerBiker from "images/bike-final.png";
import InputZipCode from "components/Form/InputZipCodeField";
export default function Banner() {
  return (
    <div className="container">
      <S.WrapBanner>
        <div className="row">
          <div className="col-md-7">
            <S.WrapText>
              <Heading2 padding="40px 0px 0px 0px" size="41px">
                We Provider Delivery Within 30 Min
              </Heading2>
              <Text size="19px" isGrey>
                Image you don't need a diet because we provide healthy and
                delicious food for you
              </Text>
              <InputZipCode
                placeholder="Enter zip code"
                margin="30px 0px 0px 0px"
                btntext="Discover"
              />
            </S.WrapText>
          </div>
          <div className="col-md-5">
            <S.WrapImage>
              <img src={BannerBiker} alt="" />
            </S.WrapImage>
          </div>
        </div>
      </S.WrapBanner>
    </div>
  );
}
