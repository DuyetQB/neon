import React from "react";
import * as S from "./styled";
import { Heading2, Text } from "components/common/Text";

export default function Banner() {
  return (
    <div className="container">
      <S.WrapBanner>
        <div className="row">
          <div className="col-md-6">
            <S.WrapText>
              <Heading2 padding="40px 0px 0px 0px" size="30px">
                Make The Delicious Food and Order Our App
              </Heading2>
              <Text isGrey>
                Image you don't need a diet because we provide healthy and
                delicious food for you
              </Text>
              <S.WrapFlex>
                <S.CircleNumber>01</S.CircleNumber>
                <Text>Follow Delevery Status</Text>
              </S.WrapFlex>
              <S.WrapFlex>
                <S.CircleNumber>02</S.CircleNumber>
                <Text>Order From Any Location</Text>
              </S.WrapFlex>
              <S.WrapFlex>
                <a href="https://play.google.com/store">
                  <S.ImageStore
                    src="https://www.luxstay.com/icons/apple-store.svg"
                    alt=""
                  />
                </a>
                <a href="https://appstoreconnect.apple.com">
                  <S.ImageStore
                    src="https://www.luxstay.com/icons/google-play.svg"
                    alt=""
                  />
                </a>
              </S.WrapFlex>
            </S.WrapText>
          </div>
          <div className="col-md-6">
            <S.WrapImage>
              <img src="https://www.luxstay.com/home/home-02.png" alt="" />
            </S.WrapImage>
          </div>
        </div>
      </S.WrapBanner>
    </div>
  );
}
