import React from 'react'
import {SignInLabel,SignInInputText, InputTextContainer} from  './TextInputElement'

function TextInput(props) {
    return (
        <>
        <InputTextContainer>
            <SignInLabel>
                {props.lblname}
            </SignInLabel>
            <SignInInputText 
             type={props.type}
             disabled={props.isdisable}
             id={props.id} 
             name={props.name}
             value={props.value}
             placeholder={props.placeholder} 
             onChange={props.onChange}>

            </SignInInputText>
        </InputTextContainer>

             
        </>
    )
}



export default TextInput





