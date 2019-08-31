import React from 'react';
import {NavLink} from 'react-router-dom';

import styled from 'styled-components';

import TipseaseLogo from "../Tipsease-logo.png"; 

const WrapperLogo = styled.img`
    height: 15%;
    width: 15%;
    display: block;
    margin-left: auto;
    margin-right: auto;
`;

const WrappedDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-top: -2%;
`;

const WrappedNav = styled.nav`
    margin-left: 10px;
    margin-right: 10px;
`;


export default function TabNav(){
    return (
        <>
        <NavLink exact to="/"><WrapperLogo src={TipseaseLogo} alt="Logo" /> </NavLink>
        <WrappedDiv>
        <WrappedNav><NavLink to="/login" className="NavLink" activeClassName="ActiveNav">Login</NavLink></WrappedNav>
        <WrappedNav><NavLink to="/sign_up" className="NavLink" activeClassName="ActiveNav">Sign Up</NavLink></WrappedNav>
        <WrappedNav><NavLink to="/tipsomeone" className="NavLink" activeClassName="ActiveNav">Tip Someone</NavLink></WrappedNav>
        </WrappedDiv>
        </>
    )

}