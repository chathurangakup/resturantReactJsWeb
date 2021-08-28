import React from 'react'
import PropTypes from 'prop-types';
import {SelectDropDown} from  './DropDownElements'

function  index(props) {
  
    return (
        <div>
             <label for="country">{props.name}</label>
                <SelectDropDown value={props.value} onChange={props.handleChange}>
                {
                   props.dropdownlist.map(function(item, i){
                       return(
                        <option value={item.name}>{item.label}</option>
                       )
                       
                    })
                   }
            </SelectDropDown>
        </div>
    )
}

index.propTypes = {
    dropdownlist:PropTypes.array,
}

export default index

