import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { menuData } from '../data/MenuData';
import { Button } from './Button';

const DropdownContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #cd853f;
    display: grid;
    align-items: center;
    top: 0px;
    left: 0px;
    transition: 0.5s;
    opacity: ${({isOpen}) => (isOpen ? '1' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`

const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
`

const CloseIcon = styled(FaTimes)`
    color: #000d1a;
`

const DropdownWrapper = styled.div`

`

const DropdownMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
    margin-bottom: 1rem;

    @media (max-width: 480px){
        grid-template-columns: 1fr;
        grid-template-rows: repeat(4, 60px);
    }
`

const DropdownLink = styled(Link)`
    display: flex;
    color: #ffffff;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    cursor: pointer;
    transition: .5s;

    &:hover{
        color: #000d1a;
    }
`

const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
`


const Dropdown = ({toggle, isOpen}) => {
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                    {menuData.map((item, index) => (
                        <DropdownLink
                        key={index}
                        to={item.link}
                        >
                            {item.title}
                        </DropdownLink>
                    ))}
                </DropdownMenu>
                <BtnWrap>
                    <Button
                    primary="true"
                    round="true"
                    big="true"
                    to="/contact"
                    >
                    Контакты
                    </Button>
                </BtnWrap>
            </DropdownWrapper>
        </DropdownContainer>
    )
}

export default Dropdown
