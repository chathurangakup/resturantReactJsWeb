import styled from 'styled-components';
import {Link} from 'react-router-dom';
import img from '../../images/bg.jpeg';

export const Container=styled.div`
    min-height:692px;
    position:fixed;
    justify-content:center;
    display:flex;
    flex-direction:column;
    bottom:0;
    left:0;
    right:0;
    top:0;
    z-index:0;
    overflow:hidden;
    width: auto;
  
    background-image: url(${img});
`

export const FromWrap=styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    background:'red';
    @media screen and (max-width: 400px){
        height:80%;
    }

`
export const Icon=styled(Link)`
        margin-left:32px;
        margin-top:32px;
        text-decoration:none;
        color:#fff;
        font-weight:700;
        font-size:32px;
        

   @media screen and (max-width: 480px){
       margin-left:16px;
       margin-top:8px;
    }
`

export const FormContent=styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    background:'red';

    @media screen and (max-width: 480px){
        padding:10px;
    }

`

export const Form=styled.div`
    /* background:#010101;
    max-width:400px;
    height:auto;
    width:100%;
    z-index:1;
    display:grid;
    margin:0 auto;
    padding:80px 32px;
    border-radius:4px;
    box-shadow:0 1px 3px rgba(0,0,0,0.9); */

    max-width:400px;
    height:auto;
    z-index:1;
    margin:0 auto 0 auto;
    display: flex;
    flex-direction:column;
    background-color: #2196F3;
    padding: 10px;
    box-shadow:0 1px 3px rgba(0,0,0,0.9);

    @media screen and (max-width: 480px){
        padding:32px 32px;
    }

`

export const FormH1=styled.h1`
    margin-bottom:40px;
    color:#fff;
    font-size:20px;
    text-align:center;
`

export const FormLable=styled.label`
    
`

export const FormInput=styled.input`

`

export const FormButton=styled.button`

`

export const Text=styled.span`

`