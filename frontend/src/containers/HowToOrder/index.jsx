import React from "react";
import * as S from "./styled";
import { Heading2, Text } from "components/common/Text";
import IconLocation from "images/icon-location.png";
import IconShop from "images/icon-shop.png";
import IconFoodDelivery from "images/icon-food-delivery.png";
import IconShopingCart from "images/icon-shopping-cart.png";
import IconArrowRight1 from "images/icon-arrow-1-psd.png";

export default function HowToOrder() {
  return (
    <div className="container">
      <S.WrapHowToOrder>
        <div className="row">
          <div className="col-md-12">
            <S.WrapText>
              <Heading2 padding="20px 0px 0px 0px" size="30px">
                How To Order
              </Heading2>
              <Text size="19px" isGrey>
                Follow the Steps
              </Text>
            </S.WrapText>
          </div>
          <div className="col-md-12">
            <S.WrapImage>
              <div className="row">
                <div className="col-md-3">
                  <S.ImageItem>
                    <img src={IconLocation} alt="" />
                    <S.FloatImageChervonRight>
                      <S.ImageChervonRight
                        src={IconArrowRight1}
                        alt=""
                        className="child-1"
                      />
                    </S.FloatImageChervonRight>
                    <div className="d-flex justify-content-center">
                      <S.CircleNumber>1</S.CircleNumber>
                    </div>
                    <Text size="21px" mt="30px" weight="600">
                      Choose your location{" "}
                    </Text>
                  </S.ImageItem>
                </div>
                <div className="col-md-3">
                  <S.ImageItem>
                    <img src={IconShop} alt="" />
                    <S.FloatImageChervonRight>
                      <S.ImageChervonRight
                        src={IconArrowRight1}
                        alt=""
                        className="child-2"
                      />
                    </S.FloatImageChervonRight>
                    <div className="d-flex justify-content-center">
                      <S.CircleNumber>2</S.CircleNumber>
                    </div>
                    <Text size="21px" mt="30px" weight="600">
                      Choose restaurant{" "}
                    </Text>
                  </S.ImageItem>
                </div>

                <div className="col-md-3">
                  <S.ImageItem>
                    <img src={IconShopingCart} alt="" />
                    <S.FloatImageChervonRight>
                      <S.ImageChervonRight
                        src={IconArrowRight1}
                        alt=""
                        className="child-3"
                      />
                    </S.FloatImageChervonRight>
                    <div className="d-flex justify-content-center">
                      <S.CircleNumber>3</S.CircleNumber>
                    </div>
                    <Text size="21px" mt="30px" weight="600">
                      Make your order{" "}
                    </Text>
                  </S.ImageItem>
                </div>
                <div className="col-md-3">
                  <S.ImageItem>
                    <img src={IconFoodDelivery} alt="" />
                    <div className="d-flex justify-content-center">
                      <S.CircleNumber>4</S.CircleNumber>
                    </div>
                    <Text size="21px" mt="30px" weight="600">
                      Food is on the way{" "}
                    </Text>
                  </S.ImageItem>
                </div>
              </div>
            </S.WrapImage>
          </div>
        </div>
      </S.WrapHowToOrder>
    </div>
  );
}
