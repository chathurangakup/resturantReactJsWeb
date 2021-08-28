import styled from "styled-components";

export const ModelContaioner=styled.div`
        display: ${({isdisplay})=>( isdisplay)};; /* Hidden by default */
        position: fixed; /* Stay in place */
        display:flex;
        align-items:center;
        text-align:center;
        justify-content:center;
        z-index: 1; /* Sit on top */
        padding-top: 100px; /* Location of the box */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.1); /* Black w/ opacity */
`