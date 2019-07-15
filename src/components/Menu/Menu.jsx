import React, {
  Component
} from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
  {
    name: 'Trang chủ',
    to: '/',
    exact: true
  },
  {
    name: 'Quản lý sản phẩm',
    to: '/product-list',
    exact: false
  }
]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? 'active' : '';
        return (
          <li className={`nav-item ${active}`}>
            <Link to={to} className="nav-link text-white">
              {label}
            </Link>
          </li>
        )
      }}
    />
  )
}

class Menu extends Component {
  state = {}
  render() {
    return (
      <ul className="nav bg-primary mt-2 mb-2">
        {this.showMenu(menus)}
      </ul>
    );
  }

  showMenu = (menus) => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            activeOnlyWhenExact={menu.exact}
          />
        )
      })
    }
    return result;
  }

}

export default Menu;