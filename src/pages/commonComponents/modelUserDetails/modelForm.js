import React from 'react'
import PropTypes from 'prop-types'
import {ModelContaioner} from "./stylesElements";
import './styles.css';
import TextInput from '../TextInput';
import ImageUploading from 'react-images-uploading';

function ModelsForm(props) {
    const [images, setImages] = React.useState([]);
    const maxNumber = 1;
   
    const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      console.log(imageList, addUpdateIndex);
      setImages(imageList);
    };



    return (
        <ModelContaioner isdisplay={props.isdisplayuser} ref={props.ref}>
            <div className="modal-contents">
                <span className="closes" onClick={props.onclickSpanClose}>&times;</span>
                <div><h3>Add New Item</h3></div>
               <div >
             




                      <TextInput
                                     type="text"
                                      lblname=""
                                      id="Firstname"
                                      isdisable='true'
                                      value={props.firsttName}
                                 
                                     
                               /> 

<TextInput
                                     type="text"
                                      lblname=""
                                      id="pass"
                                      isdisable='true'
                                      value={props.lastName}
                                      
                                    
                               /> 

<TextInput
                                     type="text"
                                      lblname=""
                                      id="pass"
                                      value={props.phoneno}
                                      isdisable='true'
                                      placeholder="Add Price"
                               /> 

                               
<TextInput
                                     type="text"
                                      lblname=""
                                      id="pass"
                                      value={props.address}
                                      isdisable='true'
                                      placeholder="Add Price"
                               /> 


                  
               </div>
            </div>

        </ModelContaioner>
    )
}

// Models.propTypes = {

// }

export default ModelsForm

