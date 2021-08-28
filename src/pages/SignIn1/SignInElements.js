import styled from 'styled-components';
import {Link} from 'react-router-dom';
import img from '../../images/bg.jpeg';


export const SignInRawContainer=styled.div`
    
    height: 100%;
 background-color:rgb(204, 255, 102);
 display:flex;
 flex-direction:column;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

    &:after{
        content: "";
        display: table;
        clear: both;
    }
`



export const SignInInsideContainer=styled.div`

  margin:5% auto;
  width: 80%;

  padding: 20px;
  @media screen and (max-width: 600px) {
    width: 100%;
    margin-top: 0%;
  }
 
`

export const SignInColumnContainer=styled.div`
    float: left;
    width: 50%;
    align-items:center;
  
    height:500px;
`

export const FormH1=styled.h1`
    margin-bottom:40px;
    color:#fff;
    font-size:50px;
    text-align:center;
`

export const SignInForm=styled.form`
  padding-top:10%;
 
`

export const ImageContainer=styled.div`
   position: relative;
   width: 100%;
   height:100%;

  &:hover{
    opacity:1;
    animation: shake 0.5s;

    /* When the animation is finished, start again */
    animation-iteration-count: infinite;
  }

  @keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}

`

export const Image=styled.img`
  display: block;
  width: 100%;
  height: 100%;
 
 
`

export const OverlayImageContainer=styled.div`
   position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .3s ease;
  /* background-color: wheat; */
  
  &:hover{
    opacity:0.5
  }
`