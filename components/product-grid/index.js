import React from 'react';
import styled from 'styled-components';

import Product from 'components/category-item';
import { translate } from 'react-i18next';
import { responsive } from 'ui';

export const Grid = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 20px 20px;
  grid-template-areas: '. . . .' '. . . .' '. . . .';

  > li {
    display: flex;

    &:nth-child(7n + 1) {
      grid-column: span 2;
      grid-row: span 2;
    }
  }

  ${responsive.smAndLess} {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: unset;
    grid-template-rows: unset;
  }
`;

class ProductGrid extends React.Component {
  render() {
    const { products } = this.props;

    return (
      <Grid>
        {products.map(item => (
          <li key={item.id}>
            <Product data={item} />
          </li>
        ))}
      </Grid>
    );
  }
}

export default translate()(ProductGrid);
