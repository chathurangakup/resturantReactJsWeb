import styled from 'styled-components';
import {Link} from 'react-router-dom';



export const InputTextContainer=styled.div`
    width:100%;
`


export const SignInLabel=styled.label`

 
`

export const SignInInputText=styled.input`
            width: 100%;
            padding: 12px;
            border: 1px solid #ccc;
            margin-top: 6px;
            margin-bottom: 16px;
            resize: vertical;

            &:focus{
                border-color:black;
            }
 
`