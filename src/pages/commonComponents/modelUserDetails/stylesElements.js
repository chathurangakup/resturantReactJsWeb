import styled from "styled-components";

export const ModelContaioner=styled.div`
           display: ${({isdisplay})=>( isdisplay)}; /* Hidden by default */
        /* Hidden by default */
            position: fixed; /* Stay in place */
            z-index: 1; /* Sit on top */
            left: 0;
            padding-left:20%;
            padding-top:10%;
            top: 0;
            width: 100%; /* Full width */
            height: 100%; /* Full height */
            overflow: auto; /* Enable scroll if needed */
            background-color: rgb(0,0,0); /* Fallback color */
            background-color: rgba(0,0,0,0.4);  /* Black w/ opacity */
`