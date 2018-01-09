import styled from 'styled-components';

import { colorPrice, mediaXs } from 'components/style/vars';

export const Outer = styled.article`
  margin: 10px;
  display: flex;
  justify-content: center;
`;

export const Inner = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
`;

export const Figure = styled.figure`
  margin-bottom: 10px;
`;

export const Img = styled.img`
  display: block;
  height: 215px;
  object-fit: fill;
  margin: 0 auto;

  ${mediaXs} {
    height: 120px;
  }
`;

export const Footer = styled.footer`
  flex: 1 1 auto;
  padding: 10px 0;
  margin: 0 50px;
  border-top: 1px solid rgba(222, 222, 222, 0.4);
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mediaXs} {
    margin: 0;
  }
`;

export const Price = styled.span`
  color: ${colorPrice};
  margin-left: 10px;
`;
