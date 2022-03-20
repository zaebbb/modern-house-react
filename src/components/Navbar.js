import React from 'react';
import styled, {css} from 'styled-components/macro';
import {Link} from 'react-router-dom';
import {menuData} from './../data/MenuData';
import {Button} from './Button';
import Bars from './../images/bars.svg';
import {FaBars} from 'react-icons/fa';

const Nav = styled.nav`
    height: 60px;
    background: rgba(0,0,0,0.35);
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
    text-transform: uppercase;
`

const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0px 1rem;
    height: 100%;
    cursor: pointer;
`

const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
`

const MenuBars = styled.i`
  display: none;

  @media (max-width: 768px){
    display: block;
    background: url(${Bars});
    background-repeat: no-repeat;
    background-size: contain;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0px;
    right: 0px;
    transform: translate(-50%, 25%);
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;
  
  @media (max-width: 768px){
    display: none;
  }
`

const NavMenuLinks = styled(Link)`
  ${NavLink}
`

const NavBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 24px;
  
  @media (max-width: 768px){
    display: none;
  }
`

const Navbar = ({toggle}) => {
    return (
        <Nav>
            <Logo to="/">DEVPROGER</Logo>
            <MenuBars onClick={toggle} />
            <NavMenu>
                {
                  menuData.map((item, index) => (
                    <NavMenuLinks
                    to={item.link}
                    key={index}
                    >
                      {item.title}
                    </NavMenuLinks>
                    ))
                }
            </NavMenu>
            <NavBtn>
              <Button 
              to="/contact"
              primary="true"
              >
              Контакты
              </Button>
            </NavBtn>
        </Nav>
    )
}

export default Navbar
