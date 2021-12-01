import React from "react";
import * as S from "./styled";

import { Heading2, Text } from "components/common/Text";
import ButtonArrow from "components/ButtonArrow";
import ButtonAddToCart from "components/ButtonAddToCart";

import Rau1 from "./images/rau1-psd.png";
import Rau2 from "./images/rau2-psd.png";
import Rau3 from "./images/rau3-psd.png";
import Rau4 from "./images/rau4-psd.png";
import Rau5 from "./images/rau5-psd.png";
import Rau6 from "./images/rau6-psd.png";

export default function Popular() {
  return (
    <div className="container">
      <S.WrapPopular>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <S.WrapText>
              <Heading2 padding="40px 0px 0px 0px" size="30px">
                Popular dishes with delivery
              </Heading2>
              <Text isGrey>
                The most delicious and healthy dishes from our chefs . You can
                order this meal separately or as part of a meal plan
              </Text>
            </S.WrapText>
          </div>
        </div>

        <S.PopularProducts>
          <div className="row">
            <div className="col-md-4">
              <S.ProductItem>
                <img src={Rau1} alt="" />
                <Text size="20px">Stevied cabbage with sause</Text>
                <S.WrapCollections>
                  <S.Price>$5.90</S.Price>
                  <ButtonAddToCart handleClick={(e) => console.log(e)}>
                    Buy
                  </ButtonAddToCart>
                </S.WrapCollections>
              </S.ProductItem>
            </div>
            <div className="col-md-4">
              <S.ProductItem>
                <img src={Rau2} alt="" />
                <Text size="20px">Puree soup with turkey pieces</Text>
                <S.WrapCollections>
                  <S.Price>$5.90</S.Price>
                  <ButtonAddToCart handleClick={(e) => console.log(e)}>
                    Buy
                  </ButtonAddToCart>
                </S.WrapCollections>
              </S.ProductItem>
            </div>
            <div className="col-md-4">
              <S.ProductItem>
                <img src={Rau3} alt="" />
                <Text size="20px">Stevied cabbage with sause</Text>
                <S.WrapCollections>
                  <S.Price>$5.90</S.Price>
                  <ButtonAddToCart handleClick={(e) => console.log(e)}>
                    Buy
                  </ButtonAddToCart>
                </S.WrapCollections>
              </S.ProductItem>
            </div>
            <div className="col-md-4">
              <S.ProductItem>
                <img src={Rau4} alt="" />
                <Text size="20px">Stevied cabbage with sause</Text>
                <S.WrapCollections>
                  <S.Price>$5.90</S.Price>
                  <ButtonAddToCart handleClick={(e) => console.log(e)}>
                    Buy
                  </ButtonAddToCart>
                </S.WrapCollections>
              </S.ProductItem>
            </div>
            <div className="col-md-4">
              <S.ProductItem>
                <img src={Rau5} alt="" />
                <Text size="20px">Stevied cabbage with sause</Text>
                <S.WrapCollections>
                  <S.Price>$5.90</S.Price>
                  <ButtonAddToCart handleClick={(e) => console.log(e)}>
                    Buy
                  </ButtonAddToCart>
                </S.WrapCollections>
              </S.ProductItem>
            </div>
            <div className="col-md-4">
              <S.ProductItem>
                <img src={Rau6} alt="" />
                <Text size="20px">Stevied cabbage with sause</Text>
                <S.WrapCollections>
                  <S.Price>$5.90</S.Price>
                  <ButtonAddToCart handleClick={(e) => console.log(e)}>
                    Buy
                  </ButtonAddToCart>
                </S.WrapCollections>
              </S.ProductItem>
            </div>
          </div>
        </S.PopularProducts>
        <S.SeeAllMenu>
          <ButtonArrow
            btntext="See All Menu"
            right="unset"
            padding="10px 21px"
            shadow
          />
        </S.SeeAllMenu>
      </S.WrapPopular>
    </div>
  );
}
