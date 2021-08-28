import React,{useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import * as FaIcon from 'react-icons/fa';
import * as AilIcon from 'react-icons/ai';
import SubMenu from './SubMenu';
import {SidebarData} from './SidebarData';
import { IconContext } from 'react-icons/lib';
import {Nav,NavLink,NavIcon ,Bars,NavMenu,NavBtn,NavBtnLink, NavItem} from './SideNavElements'





const SidebarNav=styled.nav`


    background:#15171c;
    width:250px;
    height:100vh;
    display:flex; 
    justify-content:center;
    position:fixed;
    top:0;
    left:${({sidebar})=>(sidebar ? '0':'-100%')};
    transition:350ms;
    z-index:10;
`;

const SidebarWrap=styled.div`
    width:100%;

`;

function Sidebar(props) {
    const [sidebar,setSidebar]=useState(false);
    const showSidebar=()=>setSidebar(!sidebar);
    const [navnar,setNavbar]=useState(false);
    const showNavbar=()=>setNavbar(!navnar);


    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
        <Nav>
           <NavIcon to='#'>
                <FaIcon.FaBars onClick={props.showSidebar}/>
            </NavIcon>
            {/* <NavLink to='#'>
                <FaIcon.FaBars onClick={showSidebar}/>
            </NavLink> */}
            <Bars onClick={showNavbar}/>
            <NavMenu onClick={showNavbar} click={navnar}>
                {/* <NavItem >
                    <NavLink to='/about' activeStyle>
                        About
                    </NavLink>
                </NavItem>
                <NavItem >
                   <NavLink to='/services' activeStyle>
                                Services
                   </NavLink>
                </NavItem> */}
            </NavMenu>
            <NavBtn>
                <NavBtnLink to='/signin' onClick={props.Logout}>Logout</NavBtnLink>
            </NavBtn>
        </Nav>
        <SidebarNav sidebar={props.sidebar}>
            <SidebarWrap>
                <NavIcon >
                    <AilIcon.AiOutlineClose onClick={props.showSidebar}/>
                </NavIcon>
                {SidebarData.map((item,index)=>{
                   return <SubMenu item={item} key={index}/> 
                })}
            </SidebarWrap>
        </SidebarNav>
        </IconContext.Provider>
        </>
    )
}

export default Sidebar
