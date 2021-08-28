import React from 'react'
import PropTypes from 'prop-types'
import {ModelContaioner} from "./stylesElements";
import './styles.css';
import TextInput from '../../../commonComponents/TextInput';
import ImageUploading from 'react-images-uploading';
import {AiFillDelete} from 'react-icons/ai'

function ModelsForm(props) {
   
  const obj=[
    {id:"ddd"},
    {id:"dddd"},

  ]

  const deleteItem=(val)=>{
      props.clickDelete(val)
  }


    return (
        <ModelContaioner isdisplay={props.isdisplay} ref={props.ref}>
            <div className="modal-contents">
                <span className="closes" onClick={props.onclickSpanClose}>&times;</span>
                <div><h3>Varients</h3></div>
               <div >
            
                <div className='varientitems'>
                <table id="myTable">
            <tr>
              <th>Name</th>
              <th>Country</th>
            </tr>
            {props.varientArr.map((item)=>
                <tr>
                <td>{item.varientname}</td>
                <td><button  onClick={()=>deleteItem(item.varientid)} ><AiFillDelete style={{fontSize:30,color:'red'}}/></button></td>
              </tr>
            )}
           
           
</table>
               
                </div>
                    

                           <TextInput
                                     type="text"
                                      lblname=""
                                      id="pass"
                                      name="password"
                                      placeholder="Add Varient Name"
                                      value={props.valueVarientnme}
                                      onChange={props.onChangevarName}
                               /> 

                         <TextInput
                                     type="number"
                                      min="0.00" max="10000.00" step="0.01"
                                      lblname=""
                                      id="pass"
                                      name="password"
                                      placeholder="Add Price"
                                      value={props.valueVarientprice}
                                      onChange={props.onChangevarPrice}
                               /> 

                    <button type="button" className="block" onClick={props.onClickButton}>Block Button</button>
               </div>
            </div>

        </ModelContaioner>
    )
}

// Models.propTypes = {

// }

export default ModelsForm

