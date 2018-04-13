import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import PropTypeCategory from 'lib/prop-types/category';
import PropTypeTenant from 'lib/prop-types/tenant';

import BasketButton from './basket-button';
import { Outer, Nav, Logo } from './styles';

export default class Header extends React.PureComponent {
  static propTypes = {
    tenant: PropTypeTenant,
    categories: PropTypes.arrayOf(PropTypeCategory)
  };

  render() {
    const { categories, tenant, simple } = this.props;

    if (simple) {
      return (
        <Outer simple={simple}>
          {tenant && <Logo src={tenant.logo_url} alt={tenant.company_name} />}
        </Outer>
      );
    }

    return (
      <Outer simple={simple}>
        <Link href="/">
          <a>
            {tenant && <Logo src={tenant.logo_url} alt={tenant.company_name} />}
          </a>
        </Link>
        <Nav>
          {categories &&
            categories.map(category => (
              <Link
                href="/category"
                as={category.link}
                key={category.link}
                prefetch
              >
                <a>{category.name}</a>
              </Link>
            ))}
          <Link href="/user" prefetch>
            <a>User profile</a>
          </Link>
        </Nav>
        <BasketButton />
      </Outer>
    );
  }
}
