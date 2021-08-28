import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {FaBars}  from 'react-icons/fa';


export const Nav = styled.nav`
    background :#15171c;
    height:70px;
    justify-content:space-between;
    display:flex;
    padding:0.5rem calc((100vw-1000px)/2);
    z-index:10;
  
`;

export const NavLink =styled(Link)`
    color:#fff;
    display:flex;
    font-size:1rem;
    align-items:center;
    text-decoration:none;
    padding:0 1rem;
    height:100%;
    cursor: pointer;

    @media screen and (max-width:768px){
        text-align:center;
        padding:2rem;
        width:100%fit-content;
        display:table;
    }  
 

    &:hover{
        color:#4b59f7;
        transition:all 0.3s ease;
    }
    
  &:active{
    color:#15cdfc;
  }
`

export const NavIcon =styled(Link)`
    margin-left:2rem;
    font-size:2rem;
    height:80px;
    display:flex;
    justify-content:flex-start;
    align-items:center;

    @media screen and (max-width:768px){
        display:none;
    }

`

export const Bars=styled(FaBars)`
    display:none;
    color:#fff;
  

    @media screen and (max-width:768px){
        display:block;
        position:absolute;
        margin:20px;
        top:0;
        right:0;
        transition:translate(-100%,75%);
        font-size:1.8rem;
        cursor: pointer;
    }

`

export const NavMenu=styled.div`
    display:flex;
    align-items:center;
    margin-right:-24px;
    
    list-style:none;
    text-align:center;

    @media screen and (max-width:768px){
        display:flex;
        flex-direction:column;
        width:100%;
        height:90vh;
        position:absolute;
        top:50px;
        left:${({click})=>(click?0:'-100%')};
        opacity:1;
        transition:all 0.5s ease;
        background:#101522;
    }

`

export const NavItem=styled.li`
    height:60px;
    border-bottom:2px solid transparent;
    color:#fff;
  

    &:hover{
        border-bottom:2px solid #4b59f7;
    }

    @media screen and (max-width:768px){
        width:100%;
       
        &:hover{
            border:none;
        }
    }
`

export const NavBtn=styled.div`
    display:flex;
    align-items:center;
    margin-right:24px;
    @media screen and (max-width:768px){
        display:none;
    }

`

export const NavBtnLink=styled(Link)`
    border-radius:4px;
    background:#256ce1;
    padding:10px 22px;
    color:#fff;
    border:none;
    outline:none;
    cursor: pointer;
    transition:all 0.2s ease-in-out;
    text-decoration:none;

    &:hover{
        transition:all 0.2s ease-in-out;
        background:#fff;
        color:#010606;
    }
`