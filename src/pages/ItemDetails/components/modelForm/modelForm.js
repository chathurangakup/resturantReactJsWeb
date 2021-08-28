import React from 'react'
import PropTypes from 'prop-types'
import {ModelContaioner} from "./stylesElements";
import './styles.css';
import TextInput from '../../../commonComponents/TextInput';
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
        <ModelContaioner isdisplay={props.isdisplay} ref={props.ref}>
            <div className="modal-contents">
                <span className="closes" onClick={props.onclickSpanClose}>&times;</span>
                <div><h3>Add New Item</h3></div>
               <div >
               <ImageUploading
        multiple
        value={props.images}
        onChange={props.onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  {/* <button onClick={() =>onImageRemove(index)}>Remove</button> */}
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>




                      <TextInput
                                     type="text"
                                      lblname=""
                                      id="pass"
                                      value={props.valItemcatName}
                                      onChange={props.onChangeName}
                                      placeholder="Add Item Name"
                               /> 

<TextInput
                                     type="text"
                                      lblname=""
                                      id="pass"
                                      value={props.valItemcatDesc}
                                      onChange={props.onChangeDesc}
                                      placeholder="Add Descriptopn"
                               /> 

<TextInput
                                     type="number"
                                      lblname=""
                                      id="pass"
                                      value={props.valItemcatPrice}
                                      onChange={props.onChangePrice}
                                      placeholder="Add Price"
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

