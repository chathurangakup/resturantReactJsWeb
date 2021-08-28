import React from 'react'
import PropTypes from 'prop-types'
import {ModelContaioner  } from "./styleElement";
import './styles.css';
import TextInput from '../TextInput'

function Models(props) {
    return (
        <ModelContaioner isdisplay={props.isdisplay} ref={props.ref}>
            <div className="modal-contents">
                <span className="closes" onClick={props.onclickSpanClose}>&times;</span>
                <div><h3>Add New Item</h3></div>
               <div >
                     <TextInput
                                     type="text"
                                      lblname=""
                                      id="pass"
                                      value={props.value}
                                      name="password"
                                      onChange={props.onChangetxt}
                                      placeholder="Add Item Name"
                               />

                    <button type="button" className="block" onClick={props.btnOnClick}>Block Button</button>
               </div>
            </div>

        </ModelContaioner>
    )
}

// Models.propTypes = {

// }

export default Models

