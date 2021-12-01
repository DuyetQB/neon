import React from "react";
import * as S from "./styled";
import { Heading2, Text } from "components/common/Text";
import Button from "components/Button";
import ImageCook from "images/cooker-psd-final.png";
import IconArrowRightBlack from "./images/icon-arrow-right-black.png";

export default function Banner() {
  return (
    <div className="container">
      <S.WrapBanner>
        <div className="row">
          <div className="col-md-5">
            <S.WrapImage>
              <img src={ImageCook} alt="" />
            </S.WrapImage>
          </div>
          <div className="col-md-7">
            <S.WrapText>
              <Heading2 padding="40px 0px 0px 0px" size="30px">
                Delicious and healthy food for your body
              </Heading2>
              <Text isGrey margin="20px 0px">
                Our company is engaged in the delivery of healthy and tasty food
                arround the city . Special cooking and delivery technologies
                allow you to buy fresh and healthy food
              </Text>
              <div className="row">
                <div className="col-md-6">
                  <S.WrapTextFlex>
                    <S.IconRight src={IconArrowRightBlack} alt="icon right" />
                    <Text>Order a nutritionlist consultation</Text>
                  </S.WrapTextFlex>
                </div>
                <div className="col-md-6">
                  <S.WrapTextFlex>
                    <S.IconRight src={IconArrowRightBlack} alt="icon right" />
                    <Text>Order healthy food express delivery </Text>
                  </S.WrapTextFlex>
                </div>
                <div className="col-md-6">
                  <S.WrapTextFlex>
                    <S.IconRight src={IconArrowRightBlack} alt="icon right" />
                    <Text>Tariff plain on an ongoing basics</Text>
                  </S.WrapTextFlex>
                </div>
                <div className="col-md-6">
                  <S.WrapTextFlex>
                    <S.IconRight src={IconArrowRightBlack} alt="icon right" />
                    <Text>Offer for special clients</Text>
                  </S.WrapTextFlex>
                </div>
              </div>

              <S.WrapBtn>
                <div className="row">
                  <div className="col-md-4">
                    <Button
                      className="active"
                      padding="10px 20px"
                      maxWidth="180px"
                      isBlue
                      Radius
                    >
                      CHOOSE A DIET
                    </Button>
                  </div>
                  <div className="col-md-4">
                    <Button padding="10px 20px" maxWidth="180px" isWhite Radius>
                      WHAT'S NEW?
                    </Button>
                  </div>
                </div>
              </S.WrapBtn>
            </S.WrapText>
          </div>
        </div>
      </S.WrapBanner>
    </div>
  );
}
