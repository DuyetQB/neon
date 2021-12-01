 import { css } from 'styled-components';
const sizes = {
 largeDesktop: 1640,
 desktop: 1399,
 smallDesktop: 1199,
 tablet: 991,
phone: 767,
smallPhone: 575,
};
 export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
  @media (max-width: ${sizes[label] / 16}em) {
 ${css(...args)}
 }
`;
 return acc;
}, {});