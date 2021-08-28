import React from 'react'
import {Button } from './ButtonElement'

function index(props) {
    return (
        <div>
            <Button
                type={props.type}
                onClick={props.onClick}
              >{props.name}</Button>

        </div>
    )
}

// index.propTypes = {

// }

export default index

