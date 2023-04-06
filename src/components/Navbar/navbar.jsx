import './navbar.css';
import logo from '../../assets/imgs/logo.png';
import { useState } from 'react';

export default function Navbar() {
  const [active, setActive] = useState(false);

  return (
    <div className='nav-section'>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className='nav-content'>
          <div className='logo-container'>
            <img src={logo} alt="logo" />
          </div>
          <div className='nav-list__container'>
            <ul>
              <li>
                <a href='/'>Community</a>
              </li>
              <li>
                <a href='https://exchange.biswap.org/#/swap?outputCurrency=0x098EfF3952177AF536FC97281961Bed2D5d8B2d3'>Career</a>
              </li>
              <li>
                <a href='https://exchange.biswap.org/#/swap?outputCurrency=0x098EfF3952177AF536FC97281961Bed2D5d8B2d3'>About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='mobile-menu' onClick={() => setActive(!active)}>
          <span
            className={
              active
                ? 'mobile-menu__item1-active'
                : 'mobile-menu__item1-passive'
            }
          ></span>
          <span className={active ? '' : 'mobile-menu__item2-passive'}></span>
          <span
            className={
              active
                ? 'mobile-menu__item3-active'
                : 'mobile-menu__item3-passive'
            }
          ></span>
        </div>
      </div>
      <div
        className={
          active ? 'mobile-nav__section-active' : 'mobile-nav__section'
        }
      >
        <ul
          className={active ? 'active-mobile-navbar' : 'passive-mobile-navbar'}
        >
          <li>
            <a href='/'>Community</a>
          </li>
          <li>
            <a href='https://web.archive.org/web/20220818140904/https://itech.finance/?a=career'>
              Career
            </a>
          </li>
          <li>
            <a href='https://web.archive.org/web/20220818140904/https://itech.finance/?a=about'>
              About
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
