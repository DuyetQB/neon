import React, { useRef, useState } from "react";
import * as S from "./styled";
import { Heading2, Text } from "components/common/Text";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ImageHamburger from "images/hamburger-icon.png";
import ImageHotPot from "images/hotpot.png";
import ImageBiBimBap from "images/bibimbap.png";
import ImageRamen from "images/ramen.png";
import ImageSalad from "images/salad-icon.png";
import ImagePizza from "images/pizza.png";

export default function DishesList() {
  const [activeRight, setActiveRight] = useState("active");
  const [activeLeft, setActiveLeft] = useState();
  const slideRef = useRef();
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const nextSlide = () => {
    const stateSlide = slideRef.current.innerSlider.state.currentSlide;
    slideRef.current.slickNext();
    if (stateSlide === 0) {
      setActiveRight("active");
      setActiveLeft("nonactive");
    } else {
      setActiveRight("active");
      setActiveLeft("active");
    }
  };
  const prevSlide = () => {
    const stateSlide = slideRef.current.innerSlider.state.currentSlide;

    slideRef.current.slickPrev();
    if (stateSlide === 0) {
      setActiveRight("active");
      setActiveLeft("nonactive");
    } else {
      setActiveRight("active");
      setActiveLeft("active");
    }
  };
  return (
    <div className="container">
      <S.WrapDishesList>
        <div className="row">
          <div className="col-md-12">
            <S.WrapText>
              <Heading2 padding="40px 0px 0px 0px" size="30px">
                We Provider Delivery Within 30 Min
              </Heading2>
              <Text isGrey>
                Wellcome to the Biggest Network of Food Ordering & Delivery
              </Text>
            </S.WrapText>
          </div>
          <div className="col-md-12">
            <S.WrapSlide>
              <div className="row">
                <Slider {...settings} ref={slideRef}>
                  <div className="col-md-2">
                    <S.SlideItem>
                      <S.Circle>
                        <img src={ImageHamburger} alt="" />
                      </S.Circle>
                      <Text textCenter mt="10px">
                        Hamburger
                      </Text>
                    </S.SlideItem>
                  </div>
                  <div className="col-md-2">
                    <S.SlideItem>
                      <S.Circle>
                        <img src={ImageHotPot} alt="" />
                      </S.Circle>
                      <Text textCenter mt="10px">
                        Hotpot
                      </Text>
                    </S.SlideItem>
                  </div>
                  <div className="col-md-2">
                    <S.SlideItem>
                      <S.Circle>
                        <img src={ImageBiBimBap} alt="" />
                      </S.Circle>
                      <Text textCenter mt="10px">
                        Bibimmap
                      </Text>
                    </S.SlideItem>
                  </div>
                  <div className="col-md-2">
                    <S.SlideItem>
                      <S.Circle>
                        <img src={ImageRamen} alt="" />
                      </S.Circle>
                      <Text textCenter mt="10px">
                        Ramen
                      </Text>
                    </S.SlideItem>
                  </div>
                  <div className="col-md-2">
                    <S.SlideItem>
                      <S.Circle>
                        <img src={ImageSalad} alt="" />
                      </S.Circle>
                      <Text textCenter mt="10px">
                        Salad
                      </Text>
                    </S.SlideItem>
                  </div>
                  <div className="col-md-2">
                    <S.SlideItem>
                      <S.Circle>
                        <img src={ImagePizza} alt="" />
                      </S.Circle>
                      <Text textCenter mt="10px">
                        Pizza
                      </Text>
                    </S.SlideItem>
                  </div>
                  <div className="col-md-2">
                    <S.SlideItem>
                      <S.Circle>
                        <img src={ImagePizza} alt="" />
                      </S.Circle>
                      <Text textCenter mt="10px">
                        Pizza
                      </Text>
                    </S.SlideItem>
                  </div>
                </Slider>

                <S.ButtonSlide>
                  <S.BtnPrev
                    onClick={prevSlide}
                    className={activeLeft ? "active" : "nonactive"}
                  >
                    <i className="fas fa-chevron-left"></i>
                  </S.BtnPrev>
                  <S.BtnNext
                    onClick={nextSlide}
                    className={activeRight ? "active" : "nonactive"}
                  >
                    <i className="fas fa-chevron-right"></i>
                  </S.BtnNext>
                </S.ButtonSlide>
              </div>
            </S.WrapSlide>
          </div>
        </div>
      </S.WrapDishesList>
    </div>
  );
}
