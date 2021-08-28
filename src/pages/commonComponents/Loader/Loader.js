import React from 'react';
import './styles.css'
import {ModelContaioner  } from "./styleElements";


function Loader(props) {
    return (
        <ModelContaioner isdisplay={props.isdisplay} ref={props.ref}>
        {/* <div className='modal-content'> */}
            {/* <span class="close" onClick={props.onclickSpanClose}>&times;</span> */}
           <div>  
           <div class="loader"></div>
           {/* </div> */}
        </div>

      </ModelContaioner>
    )
}

export default Loader





