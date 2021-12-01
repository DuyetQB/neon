import React, { useState, useEffect } from "react";
import * as S from "./styled";

function ButtonAddToCart({ handleClick, children, ...rest }) {
  const [textBubble, setTextBubble] = useState(false);
  const [coordBubble, setCoordBubble] = useState({ x: -1, y: -1 });

  const handleAddToCart = (handleClick = (e) => {
    const clientX = e.clientX;
    const clientY = e.clientY;
    const rect = e.target.getBoundingClientRect();
    setCoordBubble({ x: clientX - rect.left, y: clientY - rect.top });
  });

  useEffect(() => {
    if (coordBubble.x !== -1 && coordBubble.y !== -1) {
      setTextBubble(true);
      setTimeout(() => {
        setTextBubble(false);
      }, 300);
    } else {
      setTextBubble(false);
    }
  }, [coordBubble]);
  useEffect(() => {
    if (!textBubble) {
      setCoordBubble({ x: -1, y: -1 });
    }
  }, [textBubble]);
  return (
    <>
      <S.AddToCart onClick={handleAddToCart}>
        {children}
        {textBubble ? (
          <span
            className="bubble-pointer"
            style={{
              left: coordBubble.x,
              top: coordBubble.y,
            }}
          ></span>
        ) : (
          " "
        )}
      </S.AddToCart>
    </>
  );
}

export default ButtonAddToCart;
